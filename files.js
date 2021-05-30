const fs = require('fs');

//reading files

// fs.readFile('./docs/blog.txt', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
// console.log(data.toString());
// });

// console.log('Last line');


//writing files

// fs.writeFile('./docs/blog.txt','Hello Samar', ()=>{
// console.log('Changes made');
// });

//directories

// if(fs.existsSync('./assets')){
//     fs.rmdir('./assets', (err)=>{
//         console.log(err)
//     })
// }
//     else{
// fs.mkdir('./assets', (err)=>{
// if(err){
//     console.log(err);
// }
// console.log('directory made');
// });  
//     }

//delete files

// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('File deleted');
//     })
// }