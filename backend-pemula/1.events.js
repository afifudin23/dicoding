const {EventEmitter} = require("events");

const welcomeEventListener = ({web, name}) => {
  console.log(`Selamat Datang di Website ${web}, ${name} !!`)
}

const myEmitter = new EventEmitter();
myEmitter.on('welcome',  welcomeEventListener);
myEmitter.emit('welcome', {name: "Afif", web: "Dicoding"});
