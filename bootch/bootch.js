let fs = require('fs')
let exec = require('child_process').exec;
const inquirer = require('inquirer');
//var keypress = require('keypress');

//keypress(process.stdin);
//keypress.enableMouse(process.stdout);
//process.stdin.on('mousepress', function (info) {
//  console.log('got "mousepress" event at %d x %d', info.x, info.y);
//});
exports.functionPublic = logger;
async function ask(open, parentFolder){
 if(!open){
   const answers = await inquirer.prompt({
   name:'name',
   type: 'input',
   message: "Browse Folder?",
   default(){
     return 'path'
   }
 }) 
 //console.log(`${process.cwd()}\\commands\\bootch\\snippets\\${answers.name}`)

  
 //console.log(answers.name)
  fs.readdir(`${process.cwd()}\\commands\\bootch\\snippets\\${answers.name}`,(err, files)=>{
    console.log(files)
    files.forEach((file)=>{
      console.log("\x1b[32m", `${process.cwd()}\\commands\\bootch\\snippets\\${answers.name}\\${file}`)
    })
   })
}


   else{
 const answers = await inquirer.prompt({
   name:'name',
   type: 'input',
   message: "Open Folder?",
   default(){
     return 'path'
   }
 }) 
 //console.log(`${process.cwd()}\\commands\\bootch\\snippets\\${answers.name}`)
 
   

   let fileStuff = fs.readdirSync(`${process.cwd()}\\commands\\bootch\\snippets\\${parentFolder}\\${answers.name}`,(err, files)=>{
     if(err){
       console.log(err)
     }
   }) 
   for(let x=0; x< fileStuff.length;x++){
    console.log("\x1b[32m",`${process.cwd()}\\commands\\bootch\\snippets\\${parentFolder}\\${answers.name}\\${fileStuff[x]}`)
    let str = fs.readFileSync(`${process.cwd()}\\commands\\bootch\\snippets\\${parentFolder}\\${answers.name}\\${fileStuff[x]}`).toString()
    console.log("\x1b[31m", str)
   }
   
}


 
 
}
async function logger(){
  let currentDir = process.cwd()
    if(process.argv[2] === 'push'){

        console.log(process.cwd())
        const fileContents = fs.readFileSync(`./${process.argv[3]}`).toString()
     // console.log(fileContents)
        let indexStart = fileContents.search('-b');
        let indexStop = fileContents.search('-s');
        console.log(indexStart,indexStop)
        let newFile = fileContents.slice(indexStart+4 , indexStop-2) 
      //console.log(newFile)
        
        do{
          process.chdir('../')
          //console.log(process.cwd())
        }
        while(process.cwd() !== 'C:\\Users\\USER\\Desktop\\Developmenmt')
        process.chdir('./commands/bootch')

        if(process.argv[4].search('/')!==-1){
          var newFolder = process.argv[4].split('/').splice(0,1).toString();
          var fileName = process.argv[4].split('/')[1].toString()
          console.log(newFolder, fileName)

          fs.access(`./snippets\\${newFolder}`, function(error) {
            if (error) {
              fs.mkdir(`./snippets\\${newFolder}`,(err)=>{
            
                if(err){
                  console.log(err)
                }
    
                fs.writeFile(`./snippets\\${newFolder}\\${fileName}`,newFile,(err)=>{
               
                  if(err){
                    console.log(err)
                  }
                })
              })
            } else {
              console.log("Directory exists.")
              fs.writeFile(`./snippets\\${newFolder}\\${fileName}`,newFile,(err)=>{
               
                if(err){
                  console.log(err)
                }
              })
            }
          })

         
         
         

        }
        var fileExt = process.argv[4].split('.').pop();
  
       
         if(fileExt === 'js' && process.argv[4].search('/')===-1){
      
          fs.writeFileSync(`./snippets/js/${process.argv[4]}`, newFile, (err) =>{
            if(err){
              console.log(err)
            }
          })
        }else if(fileExt === 'html'&& process.argv[4].search('/')===-1){
          fs.writeFileSync(`./snippets/html/${process.argv[4]}`, newFile, (err) =>{
            if(err){
              console.log(err)
            }
          })
        }else if(fileExt === 'css'&& process.argv[4].search('/')===-1){
          fs.writeFileSync(`./snippets/css/${process.argv[4]}`, newFile, (err) =>{
            if(err){
              console.log(err)
            }
          })
        }

     
     

    }else if(process.argv[2] === 'pull'){
      // bootch pull fucnctionName fileName
      let prevDirectory = process.cwd() 
      var fileExt = process.argv[3].split('.').pop();
      console.log(fileExt, process.argv[4]) 
        fs.readdir(__dirname+`\\snippets\\${fileExt}`, (err, files) => {
            if (err)
              console.log(err);
            else {
             
              do{
                process.chdir('../')
                //console.log('Changing dir..')
              }
              while(process.cwd() !== 'C:\\Users\\USER\\Desktop\\Developmenmt')
             //process.chdir('./commands/bootch')
              console.log("\nCurrent Files:");
              console.log(prevDirectory);

              
          const fileContents = fs.readFileSync(`${prevDirectory}\\${process.argv[4]}`).toString()
          let indexStart = fileContents.search('//--');
          let indexStop = fileContents.search('-');
          if(indexStart !== -1){
            let firstPart = fileContents.slice(0, indexStart)
            let secondPart = fileContents.slice(indexStop+3, fileContents.length)
         
            if(fileExt === 'js'){
              let snippet = fs.readFileSync(`${process.cwd()}\\commands\\bootch\\snippets\\js\\${process.argv[3]}`).toString()
              let newFile = firstPart + snippet + secondPart 
              fs.writeFile(`${prevDirectory}\\${process.argv[4]}`, newFile, (err) =>{
                if(err){
                  console.log(err)
                }
              })
            }else if(fileExt === 'css'){
              let snippet = fs.readFileSync(`${process.cwd()}\\commands\\bootch\\snippets\\css\\${process.argv[3]}`).toString()
              let newFile = firstPart + snippet + secondPart 
              fs.writeFile(`${prevDirectory}\\${process.argv[4]}`, newFile, (err) =>{
                if(err){
                  console.log(err)
                }
              })
            }else if(fileExt === 'html'){
              let snippet = fs.readFileSync(`${process.cwd()}\\commands\\bootch\\snippets\\css\\${process.argv[3]}`).toString()
              let newFile = firstPart + snippet + secondPart 
              fs.writeFile(`${prevDirectory}\\${process.argv[4]}`, newFile, (err) =>{
                if(err){
                  console.log(err)
                }
              })
            }
           
          }
         

              files.forEach(file => {
                //console.log(process.cwd()+`\\snippets`);
                console.log(process.cwd()+`\\commands\\bootch\\snippets\\${fileExt}\\${file}`);
              })
            }
          })
         
          
        
        }else if(process.argv[2] === 'browse'){
          // bootch browse fileExtension
          let prevDirectory = process.cwd() 

          do{
            process.chdir('../')
           
          }
          while(process.cwd() !== 'C:\\Users\\USER\\Desktop\\Developmenmt')
         
         if(process.argv[3]){

         
          fs.readdir(`${process.cwd()}\\commands\\bootch\\snippets\\${process.argv[3]}`, async (err, files)=>{
            
            if(process.argv[3].search('/') !== -1){
              //its a folder 
              files.forEach((file) =>{
                console.log("\x1b[37m", `${process.cwd()}\\commands\\bootch\\snippets\\${process.argv[3]}\\${file}`)
                if(file.search('.')!==-1){
                  let str = fs.readFileSync(`${process.cwd()}\\commands\\bootch\\snippets\\${process.argv[3]}\\${file}`).toString()
                  console.log("\x1b[33m", str)
                }
            
              })
            }else{
              files.forEach(async (file) =>{
                console.log("\x1b[33m",file)
                console.log("\x1b[32m", `Path: ${process.cwd()}\\commands\\bootch\\snippets\\${process.argv[3]}\\${file}`)
               // console.log(file, file.includes('.'))
                if(file.includes('.')){
                  let str = fs.readFileSync(`${process.cwd()}\\commands\\bootch\\snippets\\${process.argv[3]}\\${file}`).toString()
                  console.log("\x1b[31m", str)
                }else if(!file.includes('.')){
                  console.log("\x1b[35m", 'Folder')
                  
                }
               
              })
              await ask(true, process.argv[3])
            }
          
          })
        }else{
          fs.readdir(`${process.cwd()}\\commands\\bootch\\snippets`, async (err, files) =>{
            
            files.forEach((folder)=>{
              console.log("\x1b[32m",`${folder}`)
            })
             await ask()
          })
           
        }

        }
       

    
       
}
