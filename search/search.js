const puppeteer = require('puppeteer');
exports.functionPublic = logger;

async function logger(){
      //let path = `${process.cwd()}\\Desktop`
     // process.chdir(path)
    //  console.log(process.cwd())
      let newArr = process.argv.slice(2, process.argv.length)
      let strSearch = newArr.join(' ')
      const browser = await puppeteer.launch({
        executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
        headless: true,
        //slowMo: 10,
        defaultViewport: null,
        args: [ 
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--disable-setuid-sandbox',
          '--no-first-run',
          '--no-sandbox',
          '--no-zygote',
          '--deterministic-fetch',
          '--disable-features=IsolateOrigins',
          '--disable-site-isolation-trials',
          // '--single-process',
          ],
          browserContext: "default",
        });
      const page = await browser.newPage();
      await page.goto(`https://www.google.com/search?q=${strSearch}`);
      await page.waitForSelector('div.yuRUbf')
      const links = await page.$$eval('div.yuRUbf', options => {
        return options.map(option => option.querySelector('a').getAttribute('href'));
      });
      await page.waitForSelector('div.yuRUbf')
      
      console.log(links)
      await browser.close();
}
