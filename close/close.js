let fs = require('fs')
let path = require('path')
var uniqid = require('uniqid');
var exec = require('child_process').exec;
const find = require('find-process');
exports.functionPublic = logger;
//do{
//    process.chdir('../')
//    console.log(process.cwd())
//  }
//  while(process.cwd() !== 'C:\\Users\\USER\\Desktop\\Developmenmt')
 fs.readdir(__dirname+'/sites', (err, files) => {
        if (err) throw err;
      
        for (const file of files) {
          fs.unlink(path.join(__dirname+'/sites', file), err => {
            if (err) throw err;
          });
        }
      });
    
function logger(){
    process.chdir('desktop/developmenmt/forever-server/tabs')
   
   let filename =  fs.readdirSync(process.cwd())
   filename.forEach((file)=>{
    fs.readFile(`${process.cwd()}/${file}`,{encoding: 'utf-8'}, function(err,data){
       // console.log(data)
        process.chdir('../../commands/close')
        fs.writeFileSync(`./sites/${uniqid()}.txt`, data)
        process.chdir('../../forever-server/tabs')
    })
   })

   find('name', 'chrome.exe')
   .then(function (list) {
     console.log(list);
     list.forEach((pid)=>{
        console.log(pid.pid)
        process.kill(pid.pid)
     })
   }, function (err) {
     console.log(err.stack || err);
   })

}