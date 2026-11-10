// Ejemplo de envio de datos.
const formulario = document.querySelector('#formulario-contacto');
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    formulario.querySelector('.estado-formulario').textContent = 'Mensaje enviado a Hoyoverse.';
});
