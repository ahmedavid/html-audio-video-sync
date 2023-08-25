document.addEventListener("DOMContentLoaded", () => {
  const audioElement = document.querySelector("audio")
  const videoElement = document.querySelector("video")
  const playButton = document.querySelector("#play")

  videoElement.muted = true

  let audioCanPlay = false
  let videoCanPlay = false

  playButton.addEventListener("click", () => {
    playBoth()
    // if(audioCanPlay && videoCanPlay) {
    //   playBoth()
    // } else {
    //   console.log("AUDIO and VIDEO not ready")
    // }
  })

  function pauseBoth() {
    audioElement.pause()
    videoElement.pause()
  }

  function playBoth() {
    if(!(audioCanPlay && videoCanPlay)) {
      throw new Error("Cannot play...")
    }
    audioElement.play()
    videoElement.play()
  }

  audioElement.addEventListener("canplay", e => {
    console.log('Audio Canplay...')
    audioCanPlay = true
    playBoth()
  })

  videoElement.addEventListener("canplay", e => {
    console.log('Video Canplay...')
    videoCanPlay = true
    playBoth()
  })

  audioElement.addEventListener("waiting", e => {
    console.log("Waiting audio...")
    audioCanPlay = false
    pauseBoth()
  })

  videoElement.addEventListener("waiting", e => {
    console.log("Waiting video...")
    videoCanPlay = false
    pauseBoth()
  })

  videoElement.addEventListener("seeked", e => {
    pauseBoth()
    audioElement.currentTime = videoElement.currentTime
    playBoth()
  })

  videoElement.addEventListener("pause", () => {
    audioElement.pause()
  })

  videoElement.addEventListener("play", () => {
    audioElement.play()
  })
})