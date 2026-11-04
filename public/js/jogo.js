function criarMatriz(tamanho) {
  return Array.from({ length: tamanho }, () => Array(tamanho).fill(0));
}

function contarVizinhas(matriz, linha, coluna) {
  let quantidade = 0;

  const totalLinhas = matriz.length;
  const totalColunas = matriz[0].length;

  for (
    let deslocamentoLinha = -1;
    deslocamentoLinha <= 1;
    deslocamentoLinha++
  ) {
    for (
      let deslocamentoColuna = -1;
      deslocamentoColuna <= 1;
      deslocamentoColuna++
    ) {
      if (deslocamentoLinha === 0 && deslocamentoColuna === 0) {
        continue;
      }

      const vizinhaLinha = linha + deslocamentoLinha;
      const vizinhaColuna = coluna + deslocamentoColuna;

      const dentroDaGrade =
        vizinhaLinha >= 0 &&
        vizinhaLinha < totalLinhas &&
        vizinhaColuna >= 0 &&
        vizinhaColuna < totalColunas;

      if (dentroDaGrade) {
        quantidade += matriz[vizinhaLinha][vizinhaColuna];
      }
    }
  }

  return quantidade;
}

function calcularProximaGeracao(matrizAtual) {
  const tamanho = matrizAtual.length;
  const proximaMatriz = criarMatriz(tamanho);

  for (let linha = 0; linha < tamanho; linha++) {
    for (let coluna = 0; coluna < tamanho; coluna++) {
      const viva = matrizAtual[linha][coluna] === 1;

      const vizinhas = contarVizinhas(matrizAtual, linha, coluna);

      if (viva) {
        proximaMatriz[linha][coluna] = vizinhas === 2 || vizinhas === 3 ? 1 : 0;
      } else {
        proximaMatriz[linha][coluna] = vizinhas === 3 ? 1 : 0;
      }
    }
  }

  return proximaMatriz;
}

function contarCelulasVivas(matriz) {
  let quantidade = 0;

  for (const linha of matriz) {
    for (const celula of linha) {
      quantidade += celula;
    }
  }

  return quantidade;
}
