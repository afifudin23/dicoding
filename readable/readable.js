const fs = require('fs');

const data = fs.createReadStream("./tes.txt", {
    highWaterMark: 10
});
data.on('readable', () => {
    try {
        process.stdout.write(`[${data.read()}]`)
    } catch (err) {
        console.log(err);
    }
});

data.on("end", () => {
    console.log(`\nDone !!`);
})