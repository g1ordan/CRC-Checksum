const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularBitDeParidade(binario) {
    return binario.split('1').length % 2;
}

function validarEntrada(entrada) {
    for (const char of entrada) {
        if (char !== '0' && char !== '1') {
            return false;
        }
    }
    return true;
}

function main() {
    rl.question('Digite um número binário (composto por 0s e 1s): ', (entradaUsuario) => {
        if (entradaUsuario.length <= 20 && validarEntrada(entradaUsuario)) {
            const bitDeParidadeRecebido = Number(entradaUsuario.charAt(entradaUsuario.length - 1));
            const binarioEntrada = entradaUsuario.slice(0, -1);

            const bitDeParidadeCalculado = calcularBitDeParidade(binarioEntrada);

            const ehValido = bitDeParidadeCalculado === bitDeParidadeRecebido;
            const bitDeParidadeEsperado = ehValido ? bitDeParidadeRecebido : bitDeParidadeCalculado === 0 ? 1 : 0;

            console.log(`Binário informado: ${binarioEntrada}${bitDeParidadeRecebido}`);
            console.log(`Bit de Paridade recebido: ${bitDeParidadeRecebido}`);
            console.log(`Bit de Paridade calculado: ${bitDeParidadeCalculado}`);
            console.log(`Bit de Paridade esperado: ${bitDeParidadeEsperado}`);
            console.log(`A paridade é válida: ${ehValido}`);
        } else {
            console.log('Entrada inválida. Certifique-se de que o número binário contém apenas 0s e 1s, e tem no máximo 20 caracteres.');
        }

        rl.close();
    });
}

main();
