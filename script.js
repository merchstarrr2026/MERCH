// FUNCIÓN PARA CAMBIAR LAS FOTOS
function cambiar(boton, direccion) {
  // Buscar el carrusel correspondiente
  const carrusel = boton.closest(".carrusel");

  // Obtener las fotos de ese carrusel
  const fotos = carrusel.querySelectorAll(".foto");

  // Obtener la posición actual
  let actual = Number(carrusel.dataset.actual || 0);

  // Ocultar la foto actual
  fotos[actual].classList.remove("activa");

  // Avanzar o retroceder
  actual += direccion;

  // Si llega a la última, volver a la primera
  if (actual >= fotos.length) {
    actual = 0;
  }

  // Si retrocede desde la primera, ir a la última
  if (actual < 0) {
    actual = fotos.length - 1;
  }

  // Mostrar la nueva foto
  fotos[actual].classList.add("activa");

  // Guardar la posición de este carrusel
  carrusel.dataset.actual = actual;
}
