const http = require('http');
console.log(21);
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    
    const { method } = req;
    if (method == "GET") {
        console.log(9);
        res.end("<h1>Halo 123 Dunia dan Semuanya!!</h1>")
    } 
    else if (method == "POST") {
        let body = [];

        req.on("data", chunk => {
            body.push(chunk);
        });
        req.on("end", () => {
            body = JSON.parse(body);r
            res.end(`<h1>POST Data, Hai ${body["name"]} !!</h1>`)
        })
    }
});
server.listen(3000, () => {
    console.log('Server is listening on http://127.0.0.1:3000');
});