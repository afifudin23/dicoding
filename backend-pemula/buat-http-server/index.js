const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "127.0.0.1",
  });

  await server.start();
  console.log("Server in port https://127.0.0.1:3000");
}

init()
