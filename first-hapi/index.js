const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = await Hapi.server({
        port: "3000",
        host : "127.0.0.0.1"
    });

    await server.start()
    console.log('Server is listening on http://127.0.0.1:3000');

}



