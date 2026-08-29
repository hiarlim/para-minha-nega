const audio = document.getElementById("audio");
const play = document.getElementById("play");
const current = document.querySelector(".current");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const bar = document.querySelector(".progress span");
const time = document.querySelector(".time");

/*
  A sincronização usa o relógio real do áudio.
  Os tempos abaixo são pontos de entrada das frases.
  Para ajustar uma frase, altere apenas o número em `at`.
*/
const cues = [
  {at: 8.0, text: "We're different"},
  {at: 18.5, text: "But my mind still says redundant things"},
  {at: 31.0, text: "Can I not think"},
  {at: 41.5, text: "Will you love this part of me?"},
  {at: 52.0, text: "My lover is"},
  {at: 62.0, text: "The day I can't forget"},
  {at: 73.0, text: "Fluttering my distance from you"}
];

let active = -1;

function format(t){
  t = Math.max(0, Math.floor(t));
  return `${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`;
}

function showCue(index){
  if(index === active) return;
  active = index;
  if(index < 0){
    current.textContent = "";
    previous.textContent = "";
    next.textContent = cues[0]?.text || "";
    return;
  }
  current.classList.remove("show");
  void current.offsetWidth;
  current.textContent = cues[index].text;
  previous.textContent = index > 0 ? cues[index-1].text : "";
  next.textContent = cues[index+1]?.text || "";
  current.classList.add("show");
}

function sync(){
  const t = audio.currentTime;
  let idx = -1;
  for(let i=0;i<cues.length;i++) if(t >= cues[i].at) idx=i;
  showCue(idx);
  if(audio.duration) bar.style.width = `${(t/audio.duration)*100}%`;
  time.textContent = format(t);
}

audio.addEventListener("timeupdate", sync);
audio.addEventListener("loadedmetadata", sync);

play.addEventListener("click", async ()=>{
  if(audio.paused){
    await audio.play();
    play.textContent = "Ⅱ";
  }else{
    audio.pause();
    play.textContent = "▶";
  }
});

audio.addEventListener("ended", ()=>{
  play.textContent = "▶";
  active = -1;
  sync();
});

document.querySelector(".progress").addEventListener("click", e=>{
  if(!audio.duration) return;
  const r=e.currentTarget.getBoundingClientRect();
  audio.currentTime=((e.clientX-r.left)/r.width)*audio.duration;
  sync();
});

function hearts(){
  const wrap=document.querySelector(".hearts");
  const h=document.createElement("span");
  h.className="heart";
  h.textContent=Math.random()>.45?"♥":"♡";
  h.style.left=`${Math.random()*100}%`;
  h.style.fontSize=`${9+Math.random()*18}px`;
  h.style.color=Math.random()>.5?"#ff72b6":"#6d9cff";
  h.style.textShadow=`0 0 10px ${h.style.color}`;
  h.style.animationDuration=`${5+Math.random()*7}s`;
  wrap.appendChild(h);
  setTimeout(()=>h.remove(),13000);
}
setInterval(hearts,650);
sync();
