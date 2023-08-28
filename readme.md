# Redes 

OBS: Em todas as partes executei usando o node, portanto se faz necessário o download do mesmo, basta acessar o site: https://nodejs.org/en (utilizar a versão LTS).
Após, execute no terminal utilizando o seguinte padrão: node (nome do arquivo).js

Bom, escolhi a 'Opção A', pois tanto essa como a outra eram abordagens que eu desconhecia, no fim acabei optanto pela primeira.
Utilizei o NodeJs porque estamos vendo na cadeira de Des. Web II.

# Parte1: 
Fiz com que o algoritmo verificasse a paridade dos números binários a fim de garantir a integridade de dados. Ao inserir um número binário composto por 0s e 1s, o programa calcula o bit de paridade com base no número de bits "1" presentes na sequência. Se o número de bits "1" for par, o bit de paridade é definido como 0; se for ímpar, o bit de paridade é definido como 1.

# Parte2:
Aqui o algoritmo tem o objetivo de calcular o CRC (Cyclic Redundancy Check) e detectar erros em transmissões de dados binários. Como exemplo, utilizei o polinômio CRC (x^3 + x + 1).
Ele converte uma sequência de dados binários em um valor inteiro e, em seguida, aplica o polinômio CRC utilizando operações XOR com deslocamentos. O cálculo é executado com um mínimo de 4 bits e o resultado é apresentado em formato binário.

# Parte3:
Na terceira e última parte o algoritmo calcula o checksum de dados binários. Ele soma os valores ASCII de cada caractere e exibe o resultado em formato hexadecimal.