const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularBitDeParidade(binario) {
    const numBits1 = binario.split('1').length - 1; // Conta o número de bits "1"
    return numBits1 % 2 === 0 ? 0 : 1; // Define o bit de paridade
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
            const bitDeParidadeCalculado = calcularBitDeParidade(entradaUsuario);

            console.log(`Dados Originais: ${entradaUsuario}`);
            console.log(`Contagem de Bits "1": ${entradaUsuario.split('1').length - 1} bits "1"`);
            console.log(`Paridade: O número de bits "1" é ${entradaUsuario.split('1').length - 1} (paridade ${bitDeParidadeCalculado === 0 ? 'par' : 'ímpar'})`);
            console.log(`Dados Transmitidos: ${entradaUsuario}${bitDeParidadeCalculado}`);
        } else {
            console.log('Entrada inválida. Certifique-se de que o número binário contém apenas 0s e 1s, e tem no máximo 20 caracteres.');
        }

        rl.close();
    });
}

main();
