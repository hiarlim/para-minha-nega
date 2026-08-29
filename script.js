const video=document.getElementById('video');
const play=document.getElementById('play');
const big=document.getElementById('bigPlay');
const mute=document.getElementById('mute');
const fullscreen=document.getElementById('fullscreen');
const progress=document.getElementById('progress');
const progressWrap=document.getElementById('progressWrap');
const current=document.getElementById('current');
const duration=document.getElementById('duration');

function fmt(t){
  if(!Number.isFinite(t)) return '0:00';
  t=Math.max(0,Math.floor(t));
  return Math.floor(t/60)+':'+String(t%60).padStart(2,'0');
}
function sync(){
  current.textContent=fmt(video.currentTime);
  duration.textContent=fmt(video.duration);
  progress.style.width=video.duration?(video.currentTime/video.duration*100)+'%':'0%';
}
function setPlaying(on){
  play.textContent=on?'Ⅱ':'▶';
  big.textContent=on?'Ⅱ':'▶';
  big.style.opacity=on?'0':'1';
  big.style.pointerEvents=on?'none':'auto';
}
async function toggle(){
  if(video.paused){await video.play();setPlaying(true)}
  else{video.pause();setPlaying(false)}
}
play.onclick=toggle;
big.onclick=toggle;
video.onclick=()=>{if(video.paused)toggle()};
video.addEventListener('play',()=>setPlaying(true));
video.addEventListener('pause',()=>setPlaying(false));
video.addEventListener('timeupdate',sync);
video.addEventListener('loadedmetadata',sync);
video.addEventListener('ended',()=>setPlaying(false));

progressWrap.onclick=e=>{
  if(!video.duration)return;
  const r=progressWrap.getBoundingClientRect();
  video.currentTime=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width))*video.duration;
};
mute.onclick=()=>{
  video.muted=!video.muted;
  mute.textContent=video.muted?'×♫':'♫';
};
fullscreen.onclick=()=>{
  const el=document.getElementById('player');
  if(document.fullscreenElement) document.exitFullscreen();
  else el.requestFullscreen?.();
};
document.addEventListener('keydown',e=>{
  if(e.code==='Space'){e.preventDefault();toggle()}
  if(e.code==='ArrowRight')video.currentTime=Math.min(video.duration||0,video.currentTime+5);
  if(e.code==='ArrowLeft')video.currentTime=Math.max(0,video.currentTime-5);
});
sync();
