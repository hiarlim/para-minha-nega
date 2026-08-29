const audio=document.getElementById('audio');
const play=document.getElementById('play');
const current=document.querySelector('.current');
const previous=document.querySelector('.previous');
const next=document.querySelector('.next');
const fill=document.getElementById('fill');
const clock=document.getElementById('clock');

const cues=[{"at": 16.0, "text": "Time changed, we're different"}, {"at": 19.7, "text": "But my mind still says redundant things, can I not think?"}, {"at": 24.6, "text": "Will you love this part of me?"}, {"at": 28.0, "text": "My lover is the day I can't forget"}, {"at": 32.6, "text": "Furthering my distance from you"}, {"at": 36.3, "text": "Realistically, I can't leave now, but I'm okay"}, {"at": 42.4, "text": "As long as you keep me from going crazy"}, {"at": 47.2, "text": "Keep me from going crazy"}, {"at": 56.5, "text": "Straight up ahead, you'll find a sign"}, {"at": 60.8, "text": "That says you can't get by with a lie"}, {"at": 66.0, "text": "But if I stayed away by a thread from the glory path"}, {"at": 72.4, "text": "And made my life harder lying 'bout the stupid shit I say"}, {"at": 80.0, "text": "Then you wouldn't know a single thing about"}, {"at": 84.6, "text": "How I feel about you and all those really dumb things people feel"}, {"at": 94.0, "text": "I'll take the bumpy road, it'll probably break my legs"}, {"at": 101.0, "text": "As long as I don't show you what's ruining my head"}, {"at": 108.0, "text": "Funny thing about you is you read me pretty well"}, {"at": 114.2, "text": "But you haven't found me yet at the bottom of the well"}, {"at": 121.0, "text": "Annoying you with smoke signals, asking you for help"}, {"at": 128.2, "text": "'Cause your immediate presence lifts me straight away from hell"}, {"at": 136.0, "text": "Me and Mr. Heart, we say the cutest things about you"}, {"at": 143.5, "text": "How you seem unreal and we'd probably die so quick without you"}, {"at": 152.0, "text": "Suffocated from the radiated air around us"}, {"at": 158.0, "text": "Full of happiness we don't have"}, {"at": 163.0, "text": "Brightness gone, so dark without you, girl"}, {"at": 176.0, "text": "Time changed, we're different"}, {"at": 179.7, "text": "But my mind still says redundant things, can I not think?"}, {"at": 184.6, "text": "Will you love this part of me?"}, {"at": 188.0, "text": "My lover is the day I can't forget"}, {"at": 192.6, "text": "Furthering my distance from you"}, {"at": 196.3, "text": "Realistically, I can't leave now, but I'm okay"}, {"at": 202.4, "text": "As long as you keep me from going crazy"}, {"at": 207.2, "text": "Keep me from going crazy"}, {"at": 216.5, "text": "Family calls me crazy and my friends say I'm degenerate"}, {"at": 224.2, "text": "But you tell me I'm so generous and my self-worth isn't hideous"}, {"at": 232.0, "text": "This psychedelic canvas of the person I'm becoming"}, {"at": 240.0, "text": "Went from horror movie on TV to happy-ending-princess me"}, {"at": 248.2, "text": "Processing the information transferred from your mind to me"}, {"at": 256.2, "text": "At light speed like the Falcon from the original Star Wars trilogy"}, {"at": 265.0, "text": "Feeling like a free old me when I was six and no worries"}, {"at": 273.0, "text": "Would stop me from reaching the stars a million miles away from me"}, {"at": 282.0, "text": "Sick in the head for you and no cure has been discovered"}, {"at": 290.2, "text": "Like a plague hitting my body 'cept if I fall, I'm just fallin' for ya"}, {"at": 299.0, "text": "Conscious beyond knowledge, alterations are acknowledged"}, {"at": 307.0, "text": "And the beauty you've inflicted is always in its action"}, {"at": 315.0, "text": "Lovely day today, perfect time to open up to you"}, {"at": 323.0, "text": "But I know that you're having fun, wouldn't wanna mess this up for you"}, {"at": 332.0, "text": "But I'm happy that you're happy, at least I do that much for you"}, {"at": 341.0, "text": "Always glad you're with me, this emotion will be gone before you know"}, {"at": 352.0, "text": "Time changed, we're different"}, {"at": 355.7, "text": "But my mind still says redundant things, can I not think?"}, {"at": 360.6, "text": "Will you love this part of me?"}, {"at": 364.0, "text": "My lover is the day I can't forget"}, {"at": 368.6, "text": "Furthering my distance from you"}, {"at": 372.3, "text": "Realistically, I can't leave now, but I'm okay"}, {"at": 378.4, "text": "As long as you keep me from going crazy"}, {"at": 383.2, "text": "Keep me from going crazy, girl"}, {"at": 397.5, "text": "Time changed, we're different"}, {"at": 401.2, "text": "But my mind still says redundant things, can I not think?"}, {"at": 406.1, "text": "Will you love this part of me?"}, {"at": 409.5, "text": "My lover is the day I can't forget"}, {"at": 414.1, "text": "Furthering my distance from you"}, {"at": 417.8, "text": "Realistically, I can't leave now, but I'm okay"}, {"at": 423.9, "text": "As long as you keep me from going crazy"}, {"at": 428.7, "text": "Keep me from going crazy"}];
let active=-1;

function fmt(t){t=Math.max(0,Math.floor(t));return Math.floor(t/60)+':'+String(t%60).padStart(2,'0')}
function syncLyrics(){
  const t=audio.currentTime;
  let i=-1;
  for(let n=0;n<cues.length;n++) if(t>=cues[n].at) i=n;
  if(i!==active){
    active=i;
    if(i>=0){
      current.classList.remove('show'); void current.offsetWidth;
      current.textContent=cues[i].text;
      previous.textContent=i>0?cues[i-1].text:'';
      next.textContent=cues[i+1]?cues[i+1].text:'';
      current.classList.add('show');
    } else {
      current.textContent=''; previous.textContent=''; next.textContent=cues[0].text;
    }
  }
  if(audio.duration) fill.style.width=(t/audio.duration*100)+'%';
  clock.textContent=fmt(t);
}
audio.addEventListener('timeupdate',syncLyrics);
audio.addEventListener('loadedmetadata',syncLyrics);
play.onclick=async()=>{
  if(audio.paused){await audio.play();play.textContent='Ⅱ'}else{audio.pause();play.textContent='▶'}
};
audio.addEventListener('ended',()=>{play.textContent='▶';active=-1;syncLyrics()});
document.querySelector('.track').onclick=e=>{
  if(!audio.duration)return;
  const r=e.currentTarget.getBoundingClientRect();
  audio.currentTime=((e.clientX-r.left)/r.width)*audio.duration;
  syncLyrics();
};
setInterval(()=>{
  const h=document.createElement('span');h.className='heart';h.textContent=Math.random()>.45?'♥':'♡';
  h.style.left=(Math.random()*100)+'%';h.style.fontSize=(9+Math.random()*18)+'px';
  h.style.color=Math.random()>.5?'#ff70b7':'#6c9bff';h.style.textShadow='0 0 10px '+h.style.color;
  h.style.animationDuration=(5+Math.random()*7)+'s';document.querySelector('.hearts').appendChild(h);
  setTimeout(()=>h.remove(),13000);
},650);
syncLyrics();
