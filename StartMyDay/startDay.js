const exec = require('child_process').exec;
var cp = require('child_process');
const open = require('open');
let fs = require('fs')
var chromeProfileList = require('chrome-profile-list');
//console.log(chromeProfileList());
exports.functionPublic = logger;

 async function logger(){
    console.log('Good Morning')
    await open('https://sindresorhus.com', {app: ['google chrome', '--incognito']});
    //await open ('https://google.com')
    //await open ('https://google.com')
//
}
logger()