const video = document.querySelector('.video'),
      playBtn = document.querySelector('.play_btn'),
      stopBtn = document.querySelector('.stop_btn'),
      progress = document.querySelector('.progress'),
      timer = document.querySelector('.controls_time')


// play pause    

progress.value='0'

function play(){
  if(video.paused){
    video.play()
    playBtn.src='https://cdn0.iconfinder.com/data/icons/music-sets/500/218-512.png'

  } else {
    video.pause()
    // playBtn.src=''
    playBtn.src='http://s1.iconbird.com/ico/2013/6/289/w512h5121371656105play.png'
  }
}

playBtn.addEventListener('click',play)

video.addEventListener('click',play)

function stopVideo (){
  video.currentTime=0
  video.pause()
  playBtn.src='http://s1.iconbird.com/ico/2013/6/289/w512h5121371656105play.png'
}

stopBtn.addEventListener('click',stopVideo)

// timer

function updateProgress (){
  progress.value=(video.currentTime/video.duration)*100

  // minutes

  let minutes= Math.floor(video.currentTime / 60)
  if(minutes<10){
    minutes=`0${minutes}`
  }
  let sec= Math.floor(video.currentTime % 60)
  if(sec<10){
    sec=`0${sec}`
  }
  timer.innerHTML=`${minutes}:${sec}`
}

video.addEventListener('timeupdate',updateProgress)

// set Progress

function setProgress () {
  video.currentTime = (progress.value * video.duration)/100
}

progress.addEventListener('change',setProgress)