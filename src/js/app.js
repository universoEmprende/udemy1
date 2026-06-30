document.addEventListener('DOMContentLoaded', function() {
    navegacionFija();
    crearGaleria();
})

function navegacionFija() {
    const header = document.querySelector('.header');
    const galeriaImagenes = document.querySelector('.galeria-imagenes');

    document.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('fijo');
            galeriaImagenes.classList.add('fijo');
        } else {
            header.classList.remove('fijo');
            galeriaImagenes.classList.remove('fijo');
        }
    });
}

function crearGaleria() {
    const CANTIDAD_IMAGENES = 1;
    const galeria = document.querySelector('.galeria-imagenes');
    
    for (let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/${i}.png`;
        imagen.alt = 'Imagen Galería';

        // Event handler
        imagen.onclick = function() {
            mostrarImagen(i);
        };

        galeria.appendChild(imagen);
    };
}

function mostrarImagen(i) {
    const imagen = document.createElement('IMG');
    imagen.src = `src/img/${i}.png`;
    imagen.alt = 'Imagen Galería';
    
    // Generar Modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;

    // Botón de cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON');
    cerrarModalBtn.textContent = 'X';
    cerrarModalBtn.classList.add('btn-cerrar');
    cerrarModalBtn.onclick = cerrarModal;
    
    modal.appendChild(imagen);
    modal.appendChild(cerrarModalBtn);
    // Agreagar al HTML
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden'); // Evitar scroll
    body.appendChild(modal);
}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out');

    // Esperar a que la animación termine
    setTimeout(() => {
        modal?.remove();

        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden'); // Permitir scroll
    }, 500);
}