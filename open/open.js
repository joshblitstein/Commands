const exec = require('child_process').exec;
var cp = require('child_process');
const open = require('open');
let fs = require('fs')
exports.functionPublic = logger;

function logger(){
    if(process.argv[2] !== 'chrome'){
    let path = `${process.cwd()}\\Desktop\\Developmenmt\\${process.argv[2]}`
    console.log(path)
    process.chdir(path)
    exec('code .')
    console.log(`Opening ${process.argv[2]}`)
    }else{
        //process.chdir('desktop/developmenmt/commands/close/sites')
        fs.readdir('desktop/developmenmt/commands/close/sites', (err,files)=>{
            
            files.forEach((file)=>{
                fs.readFile(`desktop/developmenmt/commands/close/sites/${file}`,{encoding: 'utf-8'}, async function(err,data){
                    console.log(data)
                    await open (data)
                })  
            })
        })
       
    }
 

}
