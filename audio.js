function toggleAudio(){
  const audio = document.getElementById("musica");

  if(audio.paused){
      audio.play();
  }else{
      audio.pause();
  }
}