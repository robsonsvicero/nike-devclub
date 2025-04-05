let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");

function mudarVisual(cor, imagem) {
  body.style.background = `linear-gradient(-70deg, ${cor} 50%, #202020 50%)`;
  tenis.src = imagem;
}
console.log(mudarVisual);

