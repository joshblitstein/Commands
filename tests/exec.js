//bootchStart
const { exec } = require('child_process');

console.log(process.platform)

  const setNewFrame = () => { 
    //get amout of seconds
    let videoDuration:number = vidRef.current.duration
    let percentChunks:number = videoDuration/100 
    let currentFrameInSeconds:number = percentChunks * mockApiProgress*10
    //set current frame
    if(isFinite(Math.floor(currentFrameInSeconds)) ){
      vidRef.current.currentTime = Math.floor(currentFrameInSeconds) 
    }
  }
  //bootchStop