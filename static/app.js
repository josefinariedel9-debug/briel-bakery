let tamanoSeleccionado = "";

function seleccionarTamaño(elemento, tamano, event) {
  // Evita que la tarjeta gire al hacer clic en las opciones de tamaño
  if (event) {
    event.stopPropagation();
  }

  // Busca los botones de la tarjeta actual
  let contenedorOpciones = elemento.parentElement;
  let botones = contenedorOpciones.querySelectorAll('.size-btn');
  
  // Quita la clase 'active' de todos los botones
  botones.forEach(btn => btn.classList.remove('active'));

  // Agrega la clase 'active' al botón que tocaste
  elemento.classList.add('active');
  
  // Guarda el tamaño elegido
  tamanoSeleccionado = tamano;
}

function enviarWhatsApp(producto, event) {
  if (event) event.stopPropagation();

  // ⚠️ REEMPLAZA POR TU NÚMERO DE WHATSAPP REAL (Sin +, ni espacios, ni guiones)
  // Ejemplo Argentina: 5491112345678
  const telefono = "5491123901423";

  let mensaje = "Hola BRIÈL! Quisiera consultar por la " + producto;

  if (tamanoSeleccionado !== "") {
    mensaje += " en tamaño " + tamanoSeleccionado;
  }

  // Codifica correctamente el mensaje para WhatsApp sin errores
  const url = "https://api.whatsapp.com/send?phone=" + 5491123901423 + "&text=" + encodeURIComponent(mensaje);
  
  window.open(url, '_blank');
}