const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calculateChecksum(data) {
    return data.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) & 0xff;
}


rl.question('Digite os dados de entrada (pelo menos 4 bytes): ', inputData => {
    if (inputData.length < 4) {
        console.log('Erro: Dados de entrada devem ter pelo menos 4 bytes.');
    } else {
        const checksumResult = calculateChecksum(inputData);

        console.log(`Dados de entrada: ${inputData}`);
        console.log(`Checksum: ${checksumResult.toString(16).toUpperCase()}`);
    }

    rl.close();
});
