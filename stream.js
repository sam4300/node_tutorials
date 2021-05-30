//program to implement Readstream and writestream
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog.txt', {encoding :'utf8'});
const writeStream = fs.createWriteStream('./docs/blog1.txt');


// readStream.on('data', (chunk)=>{
//     console.log('.................. NEW CHUNK...........................');
//     console.log(chunk); 
//     writeStream.write('............................New Chunk..........');
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);