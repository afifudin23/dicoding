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
        console.log(req.params+"\n\n\n\n\n\n");
        console.log(h);
        const {
            username = "Coders"
        } = req.params;
        let {
            lang,
            locate
        } = req.query;

        if (lang === "id") {
            return `Halo ${username} dari ${locate ?? "Indonesia"}, Selamat datang di Website Ku !!`;
        }
        return `Hello ${username} from ${locate ?? "Indonesian"}, Wellcome in My Website !!`;
        // Coalescing Operator, kalau locate nilai null atw undefined maka di isi nilai default
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
}, {
    method: "POST",
    path: "/login",
    handler: (req, h) => {
        const {
            username,
            password
        } = req.payload;

        console.log(req.payload);
        return `Wellcome back, ${username} !!!`
    }
}];
module.exports = routes;