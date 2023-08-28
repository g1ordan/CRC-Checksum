const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateCRC(input) {
    const divisor = 0b1101; // Exemplo de polinômio CRC: x^3 + x + 1
    let data = parseInt(input, 2); // Converter o dado binário para inteiro

    for (let i = 0; i < 4; i++) { // 4 bits mínimos
        if ((data >> 7) & 1) { // Verificar o bit mais significativo
            data ^= (divisor << (3 - i)); // Aplicar operação XOR com o polinômio deslocado
        }
        data <<= 1; // Deslocar um bit para a esquerda
    }

    return data.toString(2).padStart(4, '0'); // Converter de volta para binário
}

rl.question('Digite os dados de entrada (mínimo 4 bits): ', resposta => {
    const inputValue = resposta;

    if (inputValue.length < 4) {
        console.log('Dados de entrada devem ter pelo menos 4 bits.');
        rl.close();
        return;
    }

    const crcResult = calculateCRC(inputValue);
    console.log(`Dados de entrada: ${inputValue}`);
    console.log(`CRC: ${crcResult}`);

    rl.close();
});
