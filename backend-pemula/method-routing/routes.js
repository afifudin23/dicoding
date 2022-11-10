const routes = [

    {
        method: "GET",
        path: "/",
        handler: (req, h) => {
            return "Hello, Wolcome in Homepage !!";
        },
    }, {
        method: "*",
        path: "/",
        handler: (req, h) => {
            return "Halaman tidak dapat diakses dengan method tersebut";
        },
    }, {
        method: "GET",
        path: "/{any*}",
        handler: (req, h) => {
            return "Lu salah cuy, wkwk";
        },
    }, {
        method: "GET",
        path: "/testing",
        handler: (req, h) => {
            return "Ini testing, wkwk";
        },
    }, {
        method: "GET",
        path: "/about",
        handler: (req, h) => {
            return "Hello, Wolcome in About !!";
        },
    }, {
        method: "*",
        path: "/about",
        handler: (req, h) => {
            return "Halaman tidak dapat diakses dengan method";
        },
    }, {
        method: "*",
        path: "/{any*}",
        handler: (req, h) => {
            return "Halaman tidak ditemukan !!";
        },
    }
];
module.exports = routes;
