# Simulador de Placa de Petri

Trabalho de Programação WEB desenvolvido com Node.js, Express e Vue.

## Funcionalidades

- Grade de células vivas e mortas.
- Configuração inicial por clique.
- Evolução automática.
- Pausar e continuar.
- Avançar uma geração por vez.
- Editar a geração atual.
- Reiniciar com grade vazia.
- Contador de gerações.
- Contagem de células vivas.
- Tamanho da grade configurável.
- Bordas sem conexão entre os lados opostos.

## Requisitos

- Node.js e npm instalados.

## Como executar

Na pasta do projeto, instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm start
```

Abra no navegador:

```text
http://localhost:3000
```

## Estrutura

- `server.js`: servidor Express.
- `public/index.html`: interface.
- `public/js/jogo.js`: regras de evolução.
- `public/js/app.js`: controle da interface com Vue.
- `public/css/style.css`: estilos.

## Como usar

1. Clique nas células para montar a configuração inicial.
2. Use "Avançar 1 geração" para testar passo a passo.
3. Use "Iniciar / Continuar" para evolução automática.
4. Use "Pausar" para interromper sem apagar a grade.
5. Use "Editar geração" para alterar o estado atual.
6. Use "Reiniciar" para limpar a grade e zerar a geração.

Alterar o tamanho também limpa a grade e zera o contador.
