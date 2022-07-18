const enviar = document.getElementById('boton');
const usuario = document.getElementById('nombre');
const password = document.getElementById('password');

inicio_v()
function inicio_v() {
    document.addEventListener('DOMContentLoader', inicio);
}

function inicio(){
    enviar.disable = true;
    console.log('Cargando...');

usuario.addEventListener('blur', validacion);
password.addEventListener('blur', validacion);

}
