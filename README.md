# Bitcoin Wallet Generator

Este projeto é um gerador de carteiras Bitcoin utilizando as bibliotecas `bip32`, `bip39` e `bitcoinjs-lib`.

## Descrição

Este projeto cria uma carteira HD (Hierarchical Deterministic) para Bitcoin, gerando um endereço Bitcoin, uma chave privada e uma seed (frase mnemônica). A carteira gerada pode ser utilizada para transações e armazenamento seguro de Bitcoin.

## Pré-requisitos

Certifique-se de ter o Node.js instalado. Você pode baixá-lo [aqui](https://nodejs.org/).

## Instalação

1. Clone este repositório:

   ```sh
   git clone https://github.com/seu-usuario/bitcoin-wallet-generator.git

2. Navegue até o diretório do projeto:
cd bitcoin-wallet-generator


3. Instale as dependências:
npm install


## Uso
Para gerar uma nova carteira Bitcoin, execute o seguinte comando:

node src/createWallet.js


## Saída Esperada
Ao executar o comando acima, você verá uma saída semelhante a esta:

Carteira Gerada
Endereço :  mkiQ2WqxkhpqVX6QHwgWJJRdQ9XNVpmJCN
Chave Privada :  cT3CDxPqzdnd4q5FkELB9y2yMfA58Q1i5MMNu7UFSXab2hkg63DM
Seed :  crush satoshi hat penalty bright grow luggage sun credit galaxy swear wall

## Explicação do Código
Importando as dependências: Utilizamos bip32 para geração de chaves HD, bip39 para criação e conversão de mnemonics, e bitcoinjs-lib para manipulação de endereços Bitcoin. tiny-secp256k1 é usado para operações criptográficas.

Inicializando bip32 com tiny-secp256k1: Configura a biblioteca bip32 para usar tiny-secp256k1, que é uma implementação de secp256k1 em JavaScript.

Definir rede: Aqui, configuramos a rede para testnet. Altere para mainnet se estiver gerando carteiras para a rede principal do Bitcoin.

Derivação de carteira HD: Define o caminho de derivação para a carteira HD.

Criando um mnemônico e seed: O mnemônico é uma frase de palavras gerada aleatoriamente, e a seed é a versão binária dessa frase.

Criando a raiz da carteira HD: Gera a raiz da carteira a partir da seed.

Criando uma conta e gerando o endereço Bitcoin: Deriva a chave pública e privada da conta e cria um endereço Bitcoin associado.

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
