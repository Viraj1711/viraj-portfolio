let extractor,documents=[],vectors=[],initializing;
async function initialize(docs){
  const {pipeline,env}=await import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1');
  env.allowLocalModels=false;
  env.backends.onnx.wasm.numThreads=1;
  extractor=await pipeline('feature-extraction','Xenova/all-MiniLM-L6-v2',{dtype:'q8',device:'wasm',progress_callback:p=>{if(p.status==='progress')postMessage({type:'progress',message:'Downloading model assets… '+Math.round(p.progress||0)+'%'});}});
  documents=docs.filter(d=>d.kind!=='Page');vectors=[];
  for(let start=0;start<documents.length;start+=6){
    const batch=documents.slice(start,start+6).map(d=>d.title+'. '+d.text);
    const output=await extractor(batch,{pooling:'mean',normalize:true});
    vectors.push(...output.tolist());
    postMessage({type:'progress',message:'Indexing portfolio… '+Math.min(start+6,documents.length)+' / '+documents.length});
  }
  postMessage({type:'ready'});
}
self.onmessage=async({data})=>{
  try{
    if(data.type==='init'){initializing??=initialize(data.documents);await initializing;return;}
    if(data.type==='query'){
      await initializing;
      if(!extractor)throw new Error('Model is not initialized');
      const output=await extractor(data.question,{pooling:'mean',normalize:true}),query=output.tolist()[0];
      const ranked=documents.map((d,i)=>({...d,score:query.reduce((sum,v,j)=>sum+v*vectors[i][j],0)})).sort((a,b)=>b.score-a.score);
      postMessage({type:'answer',id:data.id,documents:ranked.filter(d=>d.score>=.28).slice(0,3)});
    }
  }catch(error){postMessage({type:'error',id:data.id,message:'Semantic AI is unavailable. Keyword mode still works.'});}
};
