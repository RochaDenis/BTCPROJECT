Bitcoin Wallet Generator
Este projeto é um gerador de carteiras Bitcoin utilizando as bibliotecas bip32, bip39 e bitcoinjs-lib.

Descrição
Este projeto cria uma carteira HD (Hierarchical Deterministic) para Bitcoin, gerando um endereço Bitcoin, uma chave privada e uma seed (frase mnemônica).

Pré-requisitos
Certifique-se de ter o Node.js instalado. Você pode baixá-lo aqui.

Instalação
Clone este repositório:

sh
Copiar código
git clone https://github.com/seu-usuario/bitcoin-wallet-generator.git
Navegue até o diretório do projeto:

sh
Copiar código
cd bitcoin-wallet-generator
Instale as dependências:

sh
Copiar código
npm install
Uso
Execute o seguinte comando para gerar uma nova carteira Bitcoin:

sh
Copiar código
node src/createWallet.js
Saída Esperada
Ao executar o comando acima, você verá uma saída semelhante a esta:

yaml
Copiar código
Carteira Gerada
Endereço :  mkiQ2WqxkhpqVX6QHwgWJJRdQ9XNVpmJCN
Chave Privada :  cT3CDxPqzdnd4q5FkELB9y2yMfA58Q1i5MMNu7UFSXab2hkg63DM
Seed :  crush satoshi hat penalty bright grow luggage sun credit galaxy swear wall
