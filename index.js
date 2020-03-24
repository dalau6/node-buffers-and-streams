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
