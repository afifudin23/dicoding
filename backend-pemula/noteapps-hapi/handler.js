const { nanoid } = require("nanoid");
const notes = require("./notes");


module.exports = {
    addNoteHandler: (req, h) => {
        const { title, tags, body } = req.payload;
        
        const id = nanoid(5);
        const createAt = new Date().toISOString();
        const updateAt = createAt;
    }

    // notes.push()
}