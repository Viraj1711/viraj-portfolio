const stop=new Set('a an the is are was were be been to for and or of in on with my me i you your his he it that this what which how can does do has have tell about viraj dhas please'.split(' '));
export function tokens(text){return text.toLowerCase().replace(/c\+\+/g,'cpp').match(/[a-z0-9]+/g)?.filter(x=>!stop.has(x))||[]}
export function rankDocuments(question,docs){
  let terms=tokens(question);const lower=question.toLowerCase();
  if(/contact|reach|phone|email|mail|call/.test(lower))terms.push('contact','email','phone');
  if(/school|college|degree|education|qualification/.test(lower))terms.push('education','cgpa');
  if(/career|experience|worked|employment/.test(lower))terms.push('experience');
  if(/who (is|are)|introduce|background|yourself/.test(lower))terms.push('profile');
  const projectQuestion=/\bprojects?\b/.test(lower),experienceQuestion=/\b(experience|employment|worked|career)\b/.test(lower);
  if(!terms.length)return [];
  const unique=[...new Set(terms)];let pool=docs.filter(d=>d.kind!=='Page');
  if(projectQuestion)pool=pool.filter(d=>d.kind==='GitHub project'||d.kind.startsWith('Professional project'));
  if(experienceQuestion&&!projectQuestion)pool=pool.filter(d=>d.kind.startsWith('Experience')||d.kind==='Technology');
  return pool.map(d=>{const title=new Set(tokens(d.title)),words=new Set(tokens(d.text+' '+d.kind));let score=0,matches=0;
    for(const term of unique){if(title.has(term)){score+=4;matches++}else if(words.has(term)){score+=1;matches++}}
    if(/contact|reach|phone|email|mail|call/.test(lower)&&d.title==='Contact Viraj')score+=10;
    if(/who (is|are)|introduce|background|yourself/.test(lower)&&d.title==='About Viraj')score+=10;
    if(/education|college|degree|qualification/.test(lower)&&d.title==='About Viraj')score+=10;
    return {...d,score,coverage:matches/unique.length};
  }).filter(d=>d.score>0&&d.coverage>=.2).sort((a,b)=>b.score-a.score).slice(0,3);
}
