const fs = require("fs/promises");
(async () => {
    try {
        const data = await fs.readFile("./tes.txt", "utf-8")
        console.log(data);    
    } catch (err) {
        throw err;
    }
})();