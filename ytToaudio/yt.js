const fs = require('fs')
const YoutubeMp3Downloader = require('youtube-mp3-downloader')

const ffmpeg = require('ffmpeg-static')
exports.functionPublic = logger;
//do{
//    process.chdir('../')
//  }
//  while(process.cwd() !== 'C:\\Users\\USER\\Desktop')

function logger(){
  
const YD = new YoutubeMp3Downloader({
    ffmpegPath: ffmpeg,
    outputPath: './Desktop\\good-audio',
    youtubeVideoQuality: 'highestaudio'
  })
  
  YD.download(process.argv[2])
  
  YD.on('progress', data => {
    console.log(data.progress.percentage + '% downloaded')
  })
  
  YD.on('finished', async (err, video) => {
    const videoFileName = video.file
    console.log(`Downloaded ${videoFileName}`)
  
    const file = {
      buffer: fs.readFileSync(videoFileName),
      mimetype: 'audio/mp3'
    }
    const options = {
      punctuate: true
    }
  
  })
}




