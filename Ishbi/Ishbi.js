
exports.functionPublic = logger;

function logger(){
    console.log('from ishbi')
    let newArr = process.argv.slice(2, process.argv.length)
    console.log(newArr)
}