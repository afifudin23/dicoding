const Hapi = require('@hapi/hapi');
const routes = require("./routes");


const init = async () => {
    const server = Hapi.server({
        host: "127.0.0.1",
        port: 3000,
        routes: {
            cors: {
                origin: ["*"]
            }
        },
    });
    
    server.route(routes);
    
    await server.start();
    console.log(`Server is listening on ${server.info.uri}`);
}

init();

