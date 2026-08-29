const video=document.getElementById('video');
const play=document.getElementById('play');
const center=document.getElementById('centerPlay');
const fill=document.getElementById('fill');
const time=document.getElementById('time');
const track=document.getElementById('track');

function fmt(t){
  t=Math.max(0,Math.floor(t));
  return Math.floor(t/60)+':'+String(t%60).padStart(2,'0');
}
function sync(){
  if(video.duration) fill.style.width=(video.currentTime/video.duration*100)+'%';
  time.textContent=fmt(video.currentTime);
}
async function toggle(){
  if(video.paused){
    await video.play();
    play.textContent='Ⅱ';
    center.textContent='Ⅱ';
    center.style.opacity='.0';
  }else{
    video.pause();
    play.textContent='▶';
    center.textContent='▶';
    center.style.opacity='1';
  }
}
play.onclick=toggle;
center.onclick=toggle;
video.addEventListener('timeupdate',sync);
video.addEventListener('ended',()=>{
  play.textContent='▶'; center.textContent='▶'; center.style.opacity='1'; sync();
});
track.onclick=e=>{
  if(!video.duration)return;
  const r=track.getBoundingClientRect();
  video.currentTime=((e.clientX-r.left)/r.width)*video.duration;
  sync();
};
video.addEventListener('play',()=>{center.style.opacity='0'});
video.addEventListener('pause',()=>{center.style.opacity='1'});
sync();
