const lines = [
  ["We're different", "But my mind still says redundant things"],
  ["But my mind still says redundant things", "Can I not think"],
  ["Can I not think", "Will you love this part of me?"],
  ["Will you love this part of me?", "My lover is"],
  ["My lover is", "The day I can't forget"],
  ["The day I can't forget", "Fluttering my distance from you"]
];

const current = document.getElementById("current");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const bar = document.getElementById("progressBar");
const button = document.getElementById("nextBtn");

let i = 0;

function render(){
  current.style.animation="none";
  void current.offsetWidth;
  current.textContent=lines[i][0];
  previous.textContent=i ? lines[i-1][0] : "";
  next.textContent=lines[i][1] || "";
  current.style.animation="enter .8s ease forwards";
  bar.style.width=`${((i+1)/lines.length)*100}%`;
}
function advance(){
  i=(i+1)%lines.length;
  render();
}
button.addEventListener("click",advance);
document.addEventListener("keydown",e=>{
  if(e.code==="Space"||e.code==="ArrowRight") advance();
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
render();
