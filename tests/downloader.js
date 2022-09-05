const execSync = require('child_process').execSync;
async function d(){
    await execSync('download https://cdn.freesound.org/previews/367/367624_4377219-lq.mp3 sound')
}
d()