const cues=[{"at": 0, "text": "Time changed, we're different"}, {"at": 4, "text": "But my mind still says redundant things, can I not think?"}, {"at": 9, "text": "Will you love this part of me?"}, {"at": 13, "text": "My lover is the day I can't forget"}, {"at": 18, "text": "Furthering my distance from you"}, {"at": 22, "text": "Realistically, I can't leave now, but I'm okay"}, {"at": 28, "text": "As long as you keep me from going crazy"}, {"at": 34, "text": "Keep me from going crazy"}, {"at": 42, "text": "Straight up ahead, you'll find a sign"}, {"at": 47, "text": "That says you can't get by with a lie"}, {"at": 53, "text": "But if I stayed away by a thread from the glory path"}, {"at": 60, "text": "And made my life harder lying 'bout the stupid shit I say"}, {"at": 68, "text": "Then you wouldn't know a single thing about"}, {"at": 72, "text": "How I feel about you and all those really dumb things people feel"}, {"at": 81, "text": "I'll take the bumpy road, it'll probably break my legs"}, {"at": 89, "text": "As long as I don't show you what's ruining my head"}, {"at": 97, "text": "Funny thing about you is you read me pretty well"}, {"at": 104, "text": "But you haven't found me yet at the bottom of the well"}, {"at": 112, "text": "Annoying you with smoke signals, asking you for help"}, {"at": 120, "text": "'Cause your immediate presence lifts me straight away from hell"}, {"at": 129, "text": "Me and Mr. Heart, we say the cutest things about you"}, {"at": 137, "text": "How you seem unreal and we'd probably die so quick without you"}, {"at": 146, "text": "Suffocated from the radiated air around us"}, {"at": 153, "text": "Full of happiness we don't have"}, {"at": 159, "text": "Brightness gone, so dark without you, girl"}, {"at": 168, "text": "Time changed, we're different"}, {"at": 172, "text": "But my mind still says redundant things, can I not think?"}, {"at": 177, "text": "Will you love this part of me?"}, {"at": 181, "text": "My lover is the day I can't forget"}, {"at": 186, "text": "Furthering my distance from you"}, {"at": 190, "text": "Realistically, I can't leave now, but I'm okay"}, {"at": 196, "text": "As long as you keep me from going crazy"}, {"at": 202, "text": "Keep me from going crazy"}, {"at": 212, "text": "Family calls me crazy and my friends say I'm degenerate"}, {"at": 220, "text": "But you tell me I'm so generous and my self-worth isn't hideous"}, {"at": 228, "text": "This psychedelic canvas of the person I'm becoming"}, {"at": 236, "text": "Went from horror movie on TV to happy-ending-princess me"}, {"at": 244, "text": "Processing the information transferred from your mind to me"}, {"at": 252, "text": "At light speed like the Falcon from the original Star Wars trilogy"}, {"at": 260, "text": "Feeling like a free old me when I was six and no worries"}, {"at": 268, "text": "Would stop me from reaching the stars a million miles away from me"}, {"at": 276, "text": "Sick in the head for you and no cure has been discovered"}, {"at": 285, "text": "Like a plague hitting my body 'cept if I fall, I'm just fallin' for ya"}, {"at": 294, "text": "Conscious beyond knowledge, alterations are acknowledged"}, {"at": 302, "text": "And the beauty you've inflicted is always in its action"}, {"at": 310, "text": "Lovely day today, perfect time to open up to you"}, {"at": 318, "text": "But I know that you're having fun, wouldn't wanna mess this up for you"}, {"at": 327, "text": "But I'm happy that you're happy, at least I do that much for you"}, {"at": 337, "text": "Always glad you're with me, this emotion will be gone before you know"}, {"at": 349, "text": "Time changed, we're different"}, {"at": 353, "text": "But my mind still says redundant things, can I not think?"}, {"at": 358, "text": "Will you love this part of me?"}, {"at": 362, "text": "My lover is the day I can't forget"}, {"at": 367, "text": "Furthering my distance from you"}, {"at": 371, "text": "Realistically, I can't leave now, but I'm okay"}, {"at": 377, "text": "As long as you keep me from going crazy"}, {"at": 383, "text": "Keep me from going crazy, girl"}, {"at": 392, "text": "Time changed, we're different"}, {"at": 396, "text": "But my mind still says redundant things, can I not think?"}, {"at": 401, "text": "Will you love this part of me?"}, {"at": 405, "text": "My lover is the day I can't forget"}, {"at": 410, "text": "Furthering my distance from you"}, {"at": 414, "text": "Realistically, I can't leave now, but I'm okay"}, {"at": 420, "text": "As long as you keep me from going crazy"}, {"at": 426, "text": "Keep me from going crazy"}];
const audio=document.getElementById('audio'), start=document.getElementById('start'), play=document.getElementById('play');
const current=document.getElementById('current'), previous=document.getElementById('previous'), next=document.getElementById('next');
const bar=document.getElementById('bar'), fill=document.getElementById('fill'), time=document.getElementById('time');
let active=-1;
function fmt(t){t=Math.floor(t||0);return Math.floor(t/60)+':'+String(t%60).padStart(2,'0')}
function sync(){
 let i=-1; for(let n=0;n<cues.length;n++)if(audio.currentTime>=cues[n].at)i=n;
 if(i!==active){
   active=i;
   current.classList.remove('change2');void current.offsetWidth;current.classList.add('change2');
   current.textContent=i>=0?cues[i].text:'';
   previous.textContent=i>0?cues[i-1].text:'';
   next.textContent=i>=0&&cues[i+1]?cues[i+1].text:'';
 }
 time.textContent=fmt(audio.currentTime);
 fill.style.width=audio.duration?(audio.currentTime/audio.duration*100)+'%':'0%';
}
async function toggle(){
 if(audio.paused){try{await audio.play();start.style.display='none';play.textContent='Ⅱ'}catch(e){alert('Não foi possível tocar o áudio. Verifique se music.m4a está na mesma pasta do index.html.')}} 
 else{audio.pause();play.textContent='▶'}
}
start.onclick=toggle;play.onclick=toggle;
audio.addEventListener('timeupdate',sync);audio.addEventListener('loadedmetadata',sync);
audio.addEventListener('ended',()=>{play.textContent='▶';start.style.display='block';active=-1;sync()});
document.getElementById('mute').onclick=()=>{audio.muted=!audio.muted;document.getElementById('mute').textContent=audio.muted?'×♫':'♫'};
bar.onclick=e=>{if(!audio.duration)return;const r=bar.getBoundingClientRect();audio.currentTime=((e.clientX-r.left)/r.width)*audio.duration};
document.addEventListener('keydown',e=>{if(e.code==='Space'){e.preventDefault();toggle()}});
setInterval(()=>{
 const h=document.createElement('span');h.className='heart';h.textContent=Math.random()>.5?'♡':'♥';
 h.style.left=Math.random()*100+'%';h.style.color=Math.random()>.5?'#ff78b8':'#739cff';
 h.style.setProperty('--d',6+Math.random()*8+'s');h.style.setProperty('--r',(Math.random()*50-25)+'deg');
 document.getElementById('hearts').appendChild(h);setTimeout(()=>h.remove(),15000);
},900);
sync();
