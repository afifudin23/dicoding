module.exports = {
    // Add Note
    addNoteSuccess: (h, id) => {
        return h.response({
            status: "Success",
            message: "Add New Notes Succesfully",
            data: {
                noteId: id,
            },
        }).code(201)
    },
    addNoteFailed: h => {
        return h.response({
            status: "Failed",
            message: "Add New Notes Failed",
        }).code(500);
    },

    // Get Note By Id
    getNoteByIdSuccess: (h, id, data) => {
        return h.response({
            status: "Success",
            data,
            message: `Id.${id} Note Founded`,
        }).code(200);
    },
    getNoteByIdFailed: (h, id) => {
        return h.response({
            status: "Success",
            message: `Id.${id} Note is not Founded`,
        }).code(200);
    },

    // Edit Note
    editNoteSuccess: (h, id) => {
        return h.response({
            status: "Success",
            notesId: id,
            message: "Notes Update Successfully",
        }).code(200);
    },
    editNoteFailed: h => {
        return h.response({
            status: "Failed",
            message: "Notes Update Failed",
        }).code(404);
    },

    // Delete Note
    deleteNoteSuccess: (h, id) => {
        return h.response({
            status: "Success",
            notesId: id,
            message: "Notes Delete Successfully",
        }).code(200);
    },
    deleteNoteFailed: (h) => {
        return h.response({
            status: "Failed",
            message: "Notes DeleteFailed",
        }).code(404);
    }
}