function converterTexto(texto) {
  var regex = /[^a-z]/g;

  if (regex.test(texto)) {
    var textoConvertido = texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
  return textoConvertido;
}

function criptografar() {
  var textoOriginal = textArea.value;
  var textoConvertido = converterTexto(textoOriginal);
  var textoCriptografado = textoConvertido
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  textArea.value = textoCriptografado;
}

function descriptografar() {
  var textoOriginal = textArea.value;
  var textoConvertido = converterTexto(textoOriginal);
  var textoDescriptografado = textoConvertido
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  textArea.value = textoDescriptografado;
}
