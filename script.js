console.log('spotify');

let songIndex = 0;
let audioElement = new Audio("song/1.mp3")
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar")
let gif1 = document.getElementById("gif1");
let gif2 = document.getElementById("gif2");
let gif3 = document.getElementById("gif3");
let masterSongName = document.getElementById("masterSongName");
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "these days", filePath:"song/1.mp3", coverPath:"cover/1.jpg"},
    {songName: "these days", filePath:"song/2.mp3", coverPath:"cover/2.jpg"},
    {songName: "these days", filePath:"song/3.mp3", coverPath:"cover/3.jpg"},
    {songName: "these days", filePath:"song/4.mp3", coverPath:"cover/4.jpg"},
    {songName: "these days", filePath:"song/5.mp3", coverPath:"cover/5.jpg"},
    {songName: "these days", filePath:"song/6.mp3", coverPath:"cover/6.jpg"},
    {songName: "these days", filePath:"song/7.mp3", coverPath:"cover/7.jpg"},
    {songName: "these days", filePath:"song/8.mp3", coverPath:"cover/8.jpg"},
    {songName: "these days", filePath:"song/9.mp3", coverPath:"cover/9.jpg"},
    {songName: "these days", filePath:"song/10.mp3", coverPath:"cover/10.jpg"}
    ]
    masterPlay.addEventListener('click', ()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif1.style.opacity = 1;
            gif2.style.opacity = 1;
            gif3.style.opacity = 1;
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif1.style.opacity = 0;
            gif2.style.opacity = 0;
            gif3.style.opacity = 0;
        }
    })

// songItem.forEach((element,i)=> {
//     console.log(element,i)
//     element.getElementsByTagName("img")[0].src = songs[0].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// });

audioElement.addEventListener("timeupdate",()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif1.style.opacity = 1;
        gif2.style.opacity = 1;
        gif3.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif1.style.opacity = 1;
    gif2.style.opacity = 1;
    gif3.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif1.style.opacity = 1;
    gif2.style.opacity = 1;
    gif3.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})