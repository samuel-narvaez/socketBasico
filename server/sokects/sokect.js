const { io } = require('../server')


io.on('connection', (client) => {
    console.log('usuario conectado-server');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        //console.log(mensaje);

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);


        /*   if (mensaje.usuario) {
              callback({
                  resp: 'Todo salio bien'
              });
          } else {
              callback({
                  resp: 'Todo salio mal'
              })
          } */

    });
});