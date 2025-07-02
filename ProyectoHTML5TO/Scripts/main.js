document.addEventListener('DOMContentLoaded', function() {
    const boton = document.querySelector('.boton-redireccion');

    // Este se activa cuando se hace click en el botón
    boton.addEventListener('click', function(event) {
        event.preventDefault(); 
        // Me lleva a la otra pagina
        window.location.href = 'pagina2.html'; 
    });
});
