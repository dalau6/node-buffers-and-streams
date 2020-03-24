const fs = require('fs');

// buffers
const buffer = Buffer.from('Change me to buffer');

console.log('from()', buffer);
// from() <Buffer 43 68 61 6e 67 65 20 6d 65 20 74 6f 20 62 75 66 66 65 72>
console.log('length', buffer.length);
// length 19
console.log('toString()', buffer.toString());
// toString() Change me to buffer

const array = [
  Buffer.from('skip '),
  Buffer.from('skip '),
  Buffer.from('skipping ')
];

const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());
// concat(): skip skip skipping

const buffer3 = Buffer.alloc(5);
console.log('alloc():', buffer3);
// alloc(): <Buffer 00 00 00 00 00>

// streams
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 }); // highWaterMark option helps determining the size of buffers (By default, 64KB but in this case, 16 bytes)
const data = [];

readStream.on('data', chunk => {
  data.push(chunk);
  console.log('data :', chunk, chunk.length);
  // data : <Buffer 49 20 61 6d 20 74 72 61 6e 73 66 65 72 72 69 6e> 16
  // data : <Buffer 67 20 69 6e 20 62 79 74 65 73 20 62 79 20 62 79> 16
  // data : <Buffer 74 65 73 20 63 61 6c 6c 65 64 20 63 68 75 6e 6b> 16
});

readStream.on('end', () => {
  console.log('end :', Buffer.concat(data).toString());
  // end : I am transferring in bytes by bytes called chunk
});

readStream.on('error', err => {
  console.log('error :', err);
});
