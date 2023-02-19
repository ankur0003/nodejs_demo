const  os = require('os')
const path  = require('path')
//there are 2 ways to fs blocking and non blocking
const fs = require('fs')


const user = os.userInfo()

const  uptime = os.uptime()
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(`uptime: ${uptime}`)
console.log(currentOS)

//this line of code prints only the object of type Object use above line for JSON
console.log(`Current OS: ${currentOS}`)
const filepath = path.join('/content','yo.txt')
const base = path.basename(filepath)
console.log(filepath)
console.log(base)   

//FileSystem
//these are the synchronous sapproach
console.log(fs.readFileSync('./content/yo.txt','utf8'))
console.log(fs.writeFileSync('./content/newFile.txt',"fuck off world"))


//Aysnchronous approach

fs.readFile('./content/yo.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})