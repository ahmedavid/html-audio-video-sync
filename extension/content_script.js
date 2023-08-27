document.addEventListener("DOMContentLoaded", () => {
  const customVideo = document.querySelector("video.html5-main-video")

  customVideo.addEventListener("canplay", () => {
    console.log("CANPLAY")
  })

  customVideo.addEventListener("waiting", () => {
    console.log("WAITING")
  })
})