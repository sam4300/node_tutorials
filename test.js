const student = (name)=>{console.log('Hello '+name);
}

student('Samar');   


//(global is the global variable in node as is window in browser)

//here set timeout delays the process for specified time(for following example it's 3000) 
global.setTimeout(() => {
    console.log('Hello there');
    clearInterval(int);
}, 3000);

//setInterval sets interval of the process for specified time and to cancel that interval we use (clearInterval in the setTimeout)
const int =  setInterval(() => {
    console.log('Hello samar');
}, 1000);

//to acess the full directory path and the file name path we use following codes respectively
console.log(__dirname);
console.log(__filename);

