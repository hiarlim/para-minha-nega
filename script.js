const cues=[{"at": 42.0, "text": "Time changed, we're different"}, {"at": 45.66, "text": "But my mind still says redundant things, can I not think?"}, {"at": 50.5, "text": "Will you love this part of me?"}, {"at": 53.86, "text": "My lover is the day I can't forget"}, {"at": 58.41, "text": "Furthering my distance from you"}, {"at": 62.07, "text": "Realistically, I can't leave now, but I'm okay"}, {"at": 68.1, "text": "As long as you keep me from going crazy"}, {"at": 72.84, "text": "Keep me from going crazy"}, {"at": 82.04, "text": "Straight up ahead, you'll find a sign"}, {"at": 86.29, "text": "That says you can't get by with a lie"}, {"at": 91.43, "text": "But if I stayed away by a thread from the glory path"}, {"at": 97.76, "text": "And made my life harder lying 'bout the stupid shit I say"}, {"at": 105.27, "text": "Then you wouldn't know a single thing about"}, {"at": 109.82, "text": "How I feel about you and all those really dumb things people feel"}, {"at": 119.11, "text": "I'll take the bumpy road, it'll probably break my legs"}, {"at": 126.03, "text": "As long as I don't show you what's ruining my head"}, {"at": 132.95, "text": "Funny thing about you is you read me pretty well"}, {"at": 139.08, "text": "But you haven't found me yet at the bottom of the well"}, {"at": 145.8, "text": "Annoying you with smoke signals, asking you for help"}, {"at": 152.92, "text": "'Cause your immediate presence lifts me straight away from hell"}, {"at": 160.63, "text": "Me and Mr. Heart, we say the cutest things about you"}, {"at": 168.05, "text": "How you seem unreal and we'd probably die so quick without you"}, {"at": 176.45, "text": "Suffocated from the radiated air around us"}, {"at": 182.38, "text": "Full of happiness we don't have"}, {"at": 187.33, "text": "Brightness gone, so dark without you, girl"}, {"at": 200.18, "text": "Time changed, we're different"}, {"at": 203.84, "text": "But my mind still says redundant things, can I not think?"}, {"at": 208.68, "text": "Will you love this part of me?"}, {"at": 212.04, "text": "My lover is the day I can't forget"}, {"at": 216.59, "text": "Furthering my distance from you"}, {"at": 220.25, "text": "Realistically, I can't leave now, but I'm okay"}, {"at": 226.28, "text": "As long as you keep me from going crazy"}, {"at": 231.02, "text": "Keep me from going crazy"}, {"at": 240.22, "text": "Family calls me crazy and my friends say I'm degenerate"}, {"at": 247.83, "text": "But you tell me I'm so generous and my self-worth isn't hideous"}, {"at": 255.54, "text": "This psychedelic canvas of the person I'm becoming"}, {"at": 263.45, "text": "Went from horror movie on TV to happy-ending-princess me"}, {"at": 271.56, "text": "Processing the information transferred from your mind to me"}, {"at": 279.46, "text": "At light speed like the Falcon from the original Star Wars trilogy"}, {"at": 288.16, "text": "Feeling like a free old me when I was six and no worries"}, {"at": 296.07, "text": "Would stop me from reaching the stars a million miles away from me"}, {"at": 304.97, "text": "Sick in the head for you and no cure has been discovered"}, {"at": 313.08, "text": "Like a plague hitting my body 'cept if I fall, I'm just fallin' for ya"}, {"at": 321.78, "text": "Conscious beyond knowledge, alterations are acknowledged"}, {"at": 329.69, "text": "And the beauty you've inflicted is always in its action"}, {"at": 337.59, "text": "Lovely day today, perfect time to open up to you"}, {"at": 345.5, "text": "But I know that you're having fun, wouldn't wanna mess this up for you"}, {"at": 354.4, "text": "But I'm happy that you're happy, at least I do that much for you"}, {"at": 363.3, "text": "Always glad you're with me, this emotion will be gone before you know"}, {"at": 374.17, "text": "Time changed, we're different"}, {"at": 377.83, "text": "But my mind still says redundant things, can I not think?"}, {"at": 382.68, "text": "Will you love this part of me?"}, {"at": 386.04, "text": "My lover is the day I can't forget"}, {"at": 390.58, "text": "Furthering my distance from you"}, {"at": 394.24, "text": "Realistically, I can't leave now, but I'm okay"}, {"at": 400.27, "text": "As long as you keep me from going crazy"}, {"at": 405.02, "text": "Keep me from going crazy, girl"}, {"at": 419.16, "text": "Time changed, we're different"}, {"at": 422.81, "text": "But my mind still says redundant things, can I not think?"}, {"at": 427.66, "text": "Will you love this part of me?"}, {"at": 431.02, "text": "My lover is the day I can't forget"}, {"at": 435.57, "text": "Furthering my distance from you"}, {"at": 439.22, "text": "Realistically, I can't leave now, but I'm okay"}, {"at": 445.25, "text": "As long as you keep me from going crazy"}, {"at": 450.0, "text": "Keep me from going crazy"}];
const audio=document.getElementById('audio'),start=document.getElementById('start'),play=document.getElementById('play');
const current=document.getElementById('current'),previous=document.getElementById('previous'),next=document.getElementById('next');
const bar=document.getElementById('bar'),fill=document.getElementById('fill'),time=document.getElementById('time');
let active=-1;
function fmt(t){t=Math.floor(t||0);return Math.floor(t/60)+':'+String(t%60).padStart(2,'0')}
function sync(){
 let i=-1;
 for(let n=0;n<cues.length;n++){if(audio.currentTime>=cues[n].at)i=n;else break}
 if(i!==active){
   active=i;
   current.classList.remove('change'); void current.offsetWidth; current.classList.add('change');
   current.textContent=i>=0?cues[i].text:'';
   previous.textContent=i>0?cues[i-1].text:'';
   next.textContent=i>=0&&cues[i+1]?cues[i+1].text:'';
 }
 time.textContent=fmt(audio.currentTime)+' / '+fmt(audio.duration);
 fill.style.width=audio.duration?(audio.currentTime/audio.duration*100)+'%':'0%';
}
async function toggle(){
 if(audio.paused){try{await audio.play();start.style.display='none';play.textContent='Ⅱ'}catch(e){alert('Clique novamente para iniciar a música.')}}
 else{audio.pause();play.textContent='▶'}
}
start.onclick=toggle;play.onclick=toggle;
audio.addEventListener('timeupdate',sync);audio.addEventListener('loadedmetadata',sync);
audio.addEventListener('ended',()=>{play.textContent='▶';start.style.display='block';active=-1;sync()});
document.getElementById('mute').onclick=()=>{audio.muted=!audio.muted;document.getElementById('mute').textContent=audio.muted?'×♫':'♫'};
bar.onclick=e=>{if(!audio.duration)return;const r=bar.getBoundingClientRect();audio.currentTime=((e.clientX-r.left)/r.width)*audio.duration};
document.addEventListener('keydown',e=>{if(e.code==='Space'){e.preventDefault();toggle()}if(e.key==='ArrowLeft')audio.currentTime=Math.max(0,audio.currentTime-5);if(e.key==='ArrowRight')audio.currentTime=Math.min(audio.duration,audio.currentTime+5)});
setInterval(()=>{
 const h=document.createElement('span');h.className='heart';h.textContent=Math.random()>.5?'♡':'♥';
 h.style.left=Math.random()*100+'%';h.style.color=Math.random()>.5?'#ff78b8':'#739cff';
 h.style.setProperty('--d',6+Math.random()*8+'s');h.style.setProperty('--r',(Math.random()*50-25)+'deg');
 document.getElementById('hearts').appendChild(h);setTimeout(()=>h.remove(),15000);
},900);
sync();
