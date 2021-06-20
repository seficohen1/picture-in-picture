const startBtn = document.querySelector('button');
const videoEl = document.getElementById('video')

// Prompt to select a media stream passing to video 


async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoEl.srcObject = mediaStream
    videoEl.onloadedmetadata = () => {
      videoEl.play()
    }
  } catch(err) {
    console.log(err)
  }
}

startBtn.addEventListener('click', async () => {
  // Disable btn
  startBtn.disabled = true;
  // Starting Picture in Picture 
  await videoEl.requestPictureInPicture()
  // Reset Button 
  startBtn.disabled = false;
})

// On Load
selectMediaStream()