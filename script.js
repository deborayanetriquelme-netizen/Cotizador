document.getElementById("cotizador").addEventListener("submit", function (e) {
  e.preventDefault();

  const valor = Number(document.getElementById("valor").value);

  const MIN = 2;
  const MAX = 30;

  const errorEl = document.getElementById("error");
  const resultadoEl = document.getElementById("resultado");

  errorEl.innerText = "";
  resultadoEl.innerText = "";

  if (isNaN(valor)) {
    errorEl.innerText = "Ingresá un número válido.";
    return;
  }

  if (valor < MIN || valor > MAX) {
    errorEl.innerText = `El valor debe estar entre ${MIN} y ${MAX}.`;
    return;
  }

  const cotizacion = (valor + 2.5) * 1500;

  resultadoEl.innerText = cotizacion.toLocaleString("es-AR");
