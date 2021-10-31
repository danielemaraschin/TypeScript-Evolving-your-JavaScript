class GenericDAO {

    adiciona(objeto: Negociacao): number {
        /* implementação do método omitida */
    }

    apaga(objeto: Negociacao): void {
        /* implementação do método omitida */
    }

    buscaPorId(id: number): Negociacao {
        /* implementação do método omitida */
    }

    atualiza(objeto: Negociacao): void {
        /* implementação do método omitida */
    }

    listaTodos(): Negociacao[] {
        /* implementação do método omitida */
    }
}

// exemplo de uso

let dao = new GenericDao();
let negociacao = new Negociacao(new Date(), 1, 200);

// recebe o ID da negociação gerada

let id = dao.adiciona(negociacao);
let negociacaoBuscada = dao.buscaPorId(id);