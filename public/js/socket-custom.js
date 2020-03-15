var socket = io();

//escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});


//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'samuel',
    mensaje: 'Hola mundo'
}, function(res) {
    console.log('Respuesta server:', res);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);

});