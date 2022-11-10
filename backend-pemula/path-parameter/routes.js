const routes = [{
    method: "GET",
    path: "/",
    handler: (req, h) => {
        return "Hello, Wolcome in Homepage !!";
    },
}, {
    method: "*",
    path: "/",
    handler: (req, h) => {
        return "Homepage tidak dapat diakses dengan method tersebut";
    },
}, {
    method: "GET",
    path: "/users/{username?}",
    handler: (req, h) => {
        const {
            username = "Coders"
        } = req.params;
        return `Hello ${username}, Wellcome in My Website !!`;
    },

    // Opsional path hanya bisa satu dan ditaruh diakhir bagian. 
    // Jika lebih dari itu maka Hapi akan menolaknya, dan tidak valid
}, {
    method: "*",
    path: "/users",
    handler: (req, h) => {
        return "Users page tidak dapat diakses dengan method tersebut";
    },
}, {
    method: "*",
    path: "/{any*}",
    handler: (req, h) => {
        return "Halaman tidak ditemukan !!";
    },
}];
module.exports = routes;