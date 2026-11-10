const { createApp } = Vue;

createApp({
  data() {
    return {
      tamanho: 10,
      matriz: criarMatriz(10),
      geracao: 0,
      executando: false,
      editando: true,
      temporizador: null,
    };
  },

  computed: {
    celulasVivas() {
      return contarCelulasVivas(this.matriz);
    },

    estiloGrade() {
      return {
        gridTemplateColumns: `repeat(${this.tamanho}, 1fr)`,
      };
    },

    status() {
      if (this.executando) {
        return "Simulação em execução";
      }

      if (this.editando) {
        return "Modo de edição";
      }

      if (this.celulasVivas === 0) {
        return "Simulação encerrada: nenhuma célula viva";
      }

      return "Simulação pausada";
    },
  },

  methods: {
    alternarCelula(linha, coluna) {
      if (!this.editando || this.executando) {
        return;
      }

      this.matriz[linha][coluna] = this.matriz[linha][coluna] === 1 ? 0 : 1;
    },

    evoluir() {
      if (contarCelulasVivas(this.matriz) === 0) {
        this.pausar();
        return;
      }

      this.matriz = calcularProximaGeracao(this.matriz);
      this.geracao++;

      if (contarCelulasVivas(this.matriz) === 0) {
        this.pausar();
      }
    },

    iniciar() {
      if (this.executando) {
        return;
      }

      if (contarCelulasVivas(this.matriz) === 0) {
        alert(
          "Não é possível iniciar a simulação sem células vivas. " +
            "Clique em Editar geração e selecione pelo menos uma célula.",
        );

        return;
      }

      this.editando = false;
      this.executando = true;

      this.temporizador = setInterval(() => {
        this.evoluir();
      }, 500);
    },

    pausar() {
      if (this.temporizador !== null) {
        clearInterval(this.temporizador);
        this.temporizador = null;
      }

      this.executando = false;
    },

    avancarUmaGeracao() {
      this.pausar();

      if (contarCelulasVivas(this.matriz) === 0) {
        alert(
          "Não é possível avançar uma geração sem células vivas. " +
            "Clique em Editar geração e selecione pelo menos uma célula.",
        );

        return;
      }

      this.editando = false;
      this.evoluir();
    },

    editarGeracao() {
      this.pausar();
      this.editando = true;
    },

    reiniciar() {
      this.pausar();
      this.matriz = criarMatriz(this.tamanho);
      this.geracao = 0;
      this.editando = true;
    },

    alterarTamanho() {
      const novoTamanho = Number(this.tamanho);

      if (
        !Number.isInteger(novoTamanho) ||
        novoTamanho < 5 ||
        novoTamanho > 40
      ) {
        this.tamanho = this.matriz.length;
        return;
      }

      this.tamanho = novoTamanho;
      this.reiniciar();
    },
  },

  beforeUnmount() {
    this.pausar();
  },
}).mount("#app");
