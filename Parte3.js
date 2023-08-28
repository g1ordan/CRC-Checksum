const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular o checksum
function calculateChecksum(data) {
    let checksum = 0;

    for (let i = 0; i < data.length; i++) {
        checksum += data.charCodeAt(i);
    }

    return checksum & 0xff;
}

// Pergunta ao usuário e calcula o checksum
rl.question('Digite os dados de entrada (pelo menos 4 bits): ', resposta => {
    const inputData = resposta;

    if (inputData.length < 4) {
        console.log('Erro: Dados de entrada devem ter pelo menos 4 bits.');
        rl.close();
        return;
    }

    const checksumResult = calculateChecksum(inputData);


    console.log(`Dados de entrada: ${inputData}`);
    console.log(`Checksum: ${checksumResult.toString(16).toUpperCase()}`);

    rl.close();
});
