const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;

    const {method} = req;
    console.log(method);
    if (method == "GET") res.end("<h1>Afif dan Rara 🤗</h1>");
    else if (method == "POST") res.end("<h1>Afif dan Rara 🤗. INI POST</h1>");
    else if (method == "PUT") res.end("<h1>Afif dan Rara 🤗. INI PUT</h1>");
    else if (method == "DELETE") res.end("<h1>Afif dan Rara 🤗.INI DELETE</h1>");
});

server.listen(port, () => {
    console.log("Server is listening in http://127.0.0.1:3000");
});



