let fs = require('fs')
const inquirer = require('inquirer');
const exec = require('child_process').exec

exports.functionPublic = logger;


function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};


do{
    process.chdir('../')
  }
  while(process.cwd() !== 'C:\\Users\\USER\\Desktop\\Developmenmt')



  let someVal = true;


async function ask(arg){
       
 
      const answers = await inquirer.prompt({
      name:'name',
      type: 'input',
      message: "Browse Further?",
      default(){
        //someVal = true
        return 'path'
      }})
      if(answers.name.includes('.')){
        let fileContent = fs.readFileSync(`${process.cwd()}\\${answers.name}`)
        console.log("\x1b[35m", fileContent.toString())
        console.log("\x1b[34m", `${process.cwd()}\\${answers.name}`)
        

      }else{
        process.chdir(`${process.cwd()}\\${answers.name}`)
        console.log(process.cwd())
        logger()
        
      }
     
   }



function logger(){
  
    
    if(!process.argv[2] && someVal == true){
        fs.readdir(process.cwd(), (err, files)=>{
            if(!err){
             console.log(files)
            }
            ask()
        })
    }else{
        fs.readdir(`${process.cwd()}\\${process.argv[2]}`, (err, files)=>{
            if(!err){
             console.log(files)
            }
            process.chdir(`${process.cwd()}\\${process.argv[2]}`)
            ask(process.argv[2])
            process.argv[2] = ''
        })
    }

    
       
}