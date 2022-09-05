let fetch = require('node-fetch')
let fs = require('fs')
exports.functionPublic = logger;

async function logger(){
   
const downloadFile = (async (url, path) => {
    const res = await fetch(url);
    
    const fileStream = fs.createWriteStream(path);
    await new Promise((resolve, reject) => {
        res.body.pipe(fileStream);
        res.body.on("error", reject);
        fileStream.on("finish", resolve);
      });
  });
  
  let ext = process.argv[2].substring(process.argv[2].lastIndexOf('.'))
  await downloadFile(process.argv[2], `${process.cwd()}\\Desktop\\WebStuff\\${process.argv[3]}${ext}`)
  
}
