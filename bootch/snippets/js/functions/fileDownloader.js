const fetch = require('node-fetch');


const downloadFile = (async (url, path) => {
    const res = await fetch(url);
    const fileStream = fs.createWriteStream(path);
    await new Promise((resolve, reject) => {
        res.body.pipe(fileStream);
        res.body.on("error", reject);
        fileStream.on("finish", resolve);
      });
  });
  downloadFile('https://m.media-amazon.com/images/I/81bSMNl6CEL._SL1200_.jpg', './7400.jpg')