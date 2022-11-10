const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: "127.0.0.1",
    });
    server.route(routes)

    await server.start();
    console.log(`Server is listening ${server.info.uri}`);
}
init();

