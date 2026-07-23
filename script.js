const songs=[
{title:'Indonesia Raya',file:'music/indonesia-raya.mp3'},
{title:'Mengheningkan Cipta',file:'music/mengheningkan-cipta.mp3'},
{title:'Bagimu Negeri',file:'music/bagimu-negeri.mp3'},
{title:'Hari Merdeka',file:'music/hari-merdeka.mp3'},
{title:'Mars Sekolah',file:'music/mars-sekolah.mp3'}];
let i=0;const p=document.getElementById('player'),ul=document.getElementById('playlist'),now=document.getElementById('now');
songs.forEach((s,idx)=>{let li=document.createElement('li');li.textContent='🎵 '+s.title;li.onclick=()=>load(idx,true);ul.appendChild(li);});
function load(idx,play){i=idx;p.src=songs[i].file;now.textContent='Sedang diputar: '+songs[i].title;if(play)p.play();}
function playSelected(){if(!p.src)load(i,true);else p.play();}
function nextSong(){load((i+1)%songs.length,true)}
function prevSong(){load((i-1+songs.length)%songs.length,true)}
p.onended=nextSong;