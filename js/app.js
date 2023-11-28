let numeroMagico = -1;

const generarNumero = () => {
  numeroMagico = Math.floor(Math.random() * 100) + 1;
  console.log(numeroMagico);
  alert("¡Se ha generado el número mágico!");
  const primeraPantalla = document.getElementById("genNumero");
  primeraPantalla.style.display = "none";
  const segundaPantalla = document.getElementById("contenedorJuego");
  segundaPantalla.style.display = "block";
};

const enviarNumero = () => {
  const numeroIngresado = parseInt(
    document.getElementById("inputNumero").value
  );
  document.getElementById("inputNumero").value = "";

  if (isNaN(numeroIngresado)) {
    alert("Ingresé un número valido");
  } else {
    if (numeroIngresado == numeroMagico) {
      alert("¡HAZ ADIVINADO EL NÚMERO MÁGICO!");
    }
    if (numeroIngresado > numeroMagico)
      alert("El número ingresado es mayor al número mágico");
    if (numeroIngresado < numeroMagico)
      alert("El número ingresado es menor al número mágico");
  }
};

const btnEnviarNumero = document.getElementById("btnEnviarNumero");
btnEnviarNumero.addEventListener("click", enviarNumero);
