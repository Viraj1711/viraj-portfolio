(()=>{
  const systems={
    rag:{kicker:'KNOWLEDGE → CONTEXT → ANSWERS',title:'Knowledge that informs the conversation.',description:'I connect vector knowledge retrieval with model context so the conversational and agent-assist workflows can respond using relevant information. LangChain, embeddings, and Redis-backed session memory support this connected RAG workflow.',flow:['CONVERSATION','RETRIEVAL','CONTEXT','ANSWER'],url:'project-orvera-rag.html',link:'Explore the RAG case study ↗'},
    voice:{kicker:'LISTEN → UNDERSTAND → RESPOND',title:'A conversation, carried end to end.',description:'I work across the voice-bot pipeline: bidirectional WebSocket audio, Deepgram speech recognition, context-aware AI responses, and ElevenLabs speech output. Python, FastAPI, and AsyncIO coordinate streaming work while Redis preserves conversation state.',flow:['AUDIO IN','SPEECH TO TEXT','AI + CONTEXT','VOICE OUT'],url:'project-orvera-voice-bot.html',link:'Explore the voice-bot case study ↗'},
    assist:{kicker:'LIVE CONTEXT → INTENT → ASSISTANCE',title:'Intelligence alongside the human agent.',description:'I worked end to end on Agent Assist, combining a fast model for immediate intent suggestions with a higher-capacity model for deeper knowledge retrieval. Persistent Redis context, streamed responses, and automated workflow checks connect the assistance to an ongoing interaction.',flow:['LIVE CONVERSATION','FAST INTENT','DEEP RETRIEVAL','AGENT ASSIST'],url:'project-orvera-agent-assist.html',link:'Explore the Agent Assist case study ↗'}
  };
  document.querySelectorAll('[data-briefing]').forEach(button=>button.addEventListener('click',()=>{
    const system=systems[button.dataset.briefing];
    document.querySelectorAll('[data-briefing]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
    document.querySelector('#briefing-kicker').textContent=system.kicker;
    document.querySelector('#briefing-system').textContent=system.title;
    document.querySelector('#briefing-description').textContent=system.description;
    const nodes=[];system.flow.forEach((label,i)=>{if(i){const arrow=document.createElement('i');arrow.textContent='→';nodes.push(arrow);}const stage=document.createElement('span');stage.textContent=label;nodes.push(stage);});
    document.querySelector('#briefing-flow').replaceChildren(...nodes);
    const link=document.querySelector('#briefing-link');link.href=system.url;link.textContent=system.link;
  }));
})();
