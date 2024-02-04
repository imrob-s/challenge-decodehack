var botaoIniciar = document.querySelector("#btn-iniciar");
var botaoCopiar = document.querySelector("#btn-copiar");
var botaoCriptografar = document.querySelector("#btn-criptografar");
var qualquerBotao = document.querySelector(".btn");
var botaoDescriptografar = document.querySelector("#btn-descriptografar");
var imgTextoMonitor = document.querySelector(".img__texto_monitor");
var textArea = document.getElementById("textArea");
var titulo = document.querySelector(".titulo");
var subtitulo = document.querySelector(".subtitulo");
var header = document.querySelector(".container__header");
var menuExibido = false;

textArea.addEventListener("focus", function (event) {
  if (!menuExibido) {
    mostrarMenu();
    menuExibido = true;
  }
  textArea.placeholder = "Digite aqui seu texto...";
  botaoCopiar.classList.remove("esconder");
});

botaoIniciar.addEventListener("click", function (event) {
  mostrarMenu();
  menuExibido = true;
});

function mostrarMenu() {
  inputText();
  header.style.alignItems = "center";

  titulo.style.fontSize = "2.5rem";
  titulo.textContent = "Escolha uma opção:";

  // Trocar o texto do h2
  subtitulo.textContent = "É permitido somente letras minúscula e sem acento";
  subtitulo.style.fontSize = "1rem";

  botaoIniciar.remove();

  // Criar dois novos botões
  var btn_criptografar = document.createElement("a");
  btn_criptografar.href = "javascript:criptografar()";
  btn_criptografar.className = "btn";
  btn_criptografar.id = "btn-criptografar";
  btn_criptografar.textContent = "Criptografar";
  header.appendChild(btn_criptografar);

  var btn_descriptografar = document.createElement("a");
  btn_descriptografar.href = "javascript:descriptografar()";
  btn_descriptografar.className = "btn";
  btn_descriptografar.id = "btn-descriptografar";
  btn_descriptografar.textContent = "Descriptografar";
  header.appendChild(btn_descriptografar);

  var btn_reiniciar = document.createElement("a");
  btn_reiniciar.href = "";
  btn_reiniciar.className = "btn";
  btn_reiniciar.id = "btn-reiniciar";
  btn_reiniciar.textContent = "Reiniciar";
  header.appendChild(btn_reiniciar);

  header.appendChild(subtitulo);
}

function inputText() {
  imgTextoMonitor.style.backgroundImage = "none";
  textArea.placeholder = "Digite aqui seu texto...";
}

function copiarTexto() {
  var copyText = document.getElementById("textArea");

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);

  setTimeout(function () {
    window.getSelection().removeAllRanges();
  }, 150);

  alert("Texto copiado para a area de transferencia");
}
