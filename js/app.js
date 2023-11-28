let numeroMagico = -1;

const generarNumero = () => {
  numeroMagico = Math.floor(Math.random() * 100) + 1;
  console.log(numeroMagico);
  alert("¡Se ha generado el número mágico!");
  const primeraPantalla = document.getElementById("genNumero");
  primeraPantalla.style.display = "none";
};
