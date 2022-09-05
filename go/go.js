const fs = require('fs')
const exec = require('child_process').exec;

exports.writeNewProjPublic = writeNewProject;

function writeNewProject(){
   let path = `${process.cwd()}\\Desktop\\Developmenmt\\${process.argv[2]}`
   console.log(process.argv.length)
   fs.mkdir(path, (err) => {
      if (err) {
          return console.error(err);
      }
      let data = '//here is your file master'
      fs.writeFile(`${path}\\${process.argv[2]}.js`, data,  (err)=>{
         if(err){
            return console.error(err);
         }
         console.log(`Opening ${process.argv[2]} in VS Code master Josh.`)
         process.chdir(path)
         exec('npm init -y')
         console.log(`Initialinzing Appplication: ${process.argv[2]} master Josh.`)
         exec('code .')
         console.log(`Opening ${process.argv[2]} in VS Code master Josh.`)
         
      })
      console.log(`We are creating ${process.argv[2]} for you master Josh.`);
  });
   //fs.writeFile(`${path}\\${process.argv[2]}.js`)
}
