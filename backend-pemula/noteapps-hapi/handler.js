const {
    nanoid
} = require("nanoid");
const notes = require("./notes");
const {
    addNoteSuccess,
    addNoteFailed,
    getNoteByIdSuccess,
    getNoteByIdFailed,
    editNoteSuccess,
    editNoteFailed,
    deleteNoteSuccess,
    deleteNoteFailed
} = require("./response");


module.exports = {
    addNoteHandler: (req, h) => {
        const {
            title,
            tags,
            body
        } = req.payload;

        const id = nanoid(20);
        const createAt = new Date().toISOString();
        const updateAt = createAt;

        // Add New Notes
        notes.push({
            id, title, body, tags, createAt, updateAt
        });
        const isSuccess = notes.map(data => id === data.id).length === 1;

        if (isSuccess === true) return addNoteSuccess(h, id);
        return addNoteFailed(h);
    },
    getAllNotesHandler: (req, h) => {
        return h.response({
            status: "success",
            data: {
                notes,
            },
        }).code(200);
    },
    getNoteByIdHandler: (req, h) => {
        const {
            id
        } = req.params;
        const result = notes.filter(data => data.id === id);

        if (result.length === 1) return getNoteByIdSuccess(h, id,result[0]);
        return getNoteByIdFailed(h, id);
    },
    editNoteHandler: (req, h) => {
        const {
            id
        } = req.params;

        const {
            title,
            tags,
            body
        } = req.payload;
        const updateAt = new Date().toISOString();

        const index = notes.findIndex(note => note.id === id);

        if (index !== -1) {
            notes[index] = {
                ...notes[index],
                title,
                tags,
                body,
                updateAt,
            }
            return editNoteSuccess(h, id);
        }
        return editNoteFailed(h);
    },
    deleteNoteHandler: (req, h) => {
        const {
            id
        } = req.params;
        const index = notes.findIndex(note => note.id === id);

        if (index !== -1) {
            notes.splice(index, 1);
            return deleteNoteSuccess(h, id);
        }
        return deleteNoteFailed(h);
    }
}