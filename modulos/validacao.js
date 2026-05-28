export function validarNome(nome) {
   const regexNome = /^([A-ZÀ-Ý][a-zà-ÿ]+)(\s[A-ZÀ-Ý][a-zà-ÿ]+)*$/;
   return regexNome.test(nome);
}

export function validarNumero9Digitos(numero) {
   const regex = /^[0-9]{9}$/;
   return regex.test(numero);
}