document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cotizador");
  const input = document.getElementById("valor");
  const resultado = document.getElementById("resultado");
  const error = document.getElementById("error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // limpiar mensajes
    resultado.innerText = "";
    error.innerText = "";

    const valor = parseFloat(input.value);

    // Validaciones
    if (isNaN(valor)) {
      error.innerText = "Ingresá un valor válido.";
      return;
    }

    if (valor < 2 || valor > 30) {
      error.innerText = "El valor debe estar entre 2 y 50 USD.";
      return;
    }

    // Cálculo: (valor + 2.5) * 1500
    const cotizacion = (valor + 2.5) * 1500;

    // Mostrar SOLO el número
    resultado.innerText = "$ " + cotizacion.toLocaleString("es-AR");
  });
});
