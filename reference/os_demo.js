const os=require('os');

//platform
console.log(os.platform()); //win32


//CPU Arch
console.log(os.arch()); //x64

//CPU cor info
console.log(os.cpus());

//free memory
console.log(os.freemem())

//total memory
console.log(os.totalmem())

//home directory
console.log(os.homedir())

//uptime
console.log(os.uptime())