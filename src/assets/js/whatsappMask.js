export function aplicarMascaraCelular(valor) {
    // Remover não-numéricos e limitar a 11 dígitos.
    const limparValor = valor.replace(/\D/g, "").substring(0, 11);

    // Criar array de números.
    const numerosArray = limparValor.split("");

    // Criar número formatado.
    let numeroFormatado = "";

    // Só DDD.
    if (numerosArray.length > 0) {
        numeroFormatado += `(${numerosArray.slice(0, 2).join("")})`;
    }

    // Primeira parte do número.
    if (numerosArray.length > 2) {
        numeroFormatado += ` ${numerosArray.slice(2, 7).join("")}`;
    }

    // Segunda parte do número.
    if (numerosArray.length > 7) {
        numeroFormatado += `-${numerosArray.slice(7, 11).join("")}`;
    }

    return numeroFormatado;
}
