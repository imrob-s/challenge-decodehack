/**
 * Função para converter o texto removendo acentos e transformando em minúsculas.
 * @param {string} texto - O texto a ser convertido.
 * @returns {string} - O texto convertido.
 */
function converterTexto(texto) {
    var regex = /[^a-z]/g;
  
    if (regex.test(texto)) {
      var textoConvertido = texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return textoConvertido;
    }
    return texto;
  }
  
  /**
   * Função para criptografar o texto substituindo letras por sequências específicas.
   */
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
  
  /**
   * Função para descriptografar o texto substituindo sequências específicas por letras.
   */
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
  
