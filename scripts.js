let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");

function mudarVisual(cor, imagem) {
  body.style.background = `linear-gradient(-70deg, ${cor} 50%, #202020 50%)`;

  // Começa o fade-out
  tenis.style.opacity = 0;

  // Aguarda a transição terminar antes de trocar a imagem e fazer o fade-in
  setTimeout(() => {
    tenis.src = imagem;

    // Depois de trocar a imagem, inicia o fade-in
    tenis.style.opacity = 1;
  }, 500); // 500ms é o mesmo tempo da transição definida no CSS
}
