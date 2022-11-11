const { throws } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const input = fs.createReadStream(resolve(__dirname,"./input.txt"),{
    highWaterMark: 15
});

const output = fs.createWriteStream(resolve(__dirname, "./output.txt"));
input.on("readable", () => {
    try {
        output.write(`${input.read()}\n`);
    } catch (err) {
        throw err;
    }
})

input.on("end", () => {
    output.end();
})
