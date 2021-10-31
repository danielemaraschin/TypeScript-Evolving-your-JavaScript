class GenericDAO<T, K> {

    adiciona(objeto: T, K): number {
        /* implementação do método omitida */
    }

    apaga(objeto: T): void {
        /* implementação do método omitida */
    }

    buscaPorId(id: K): Negociacao {
        /* implementação do método omitida */
    }

    atualiza(objeto: T): void {
        /* implementação do método omitida */
    }

    listaTodos(): T[] {
        /* implementação do método omitida */
    }
}

// exemplo de uso

let dao = new GenericDao();
let negociacao = new Negociacao(new Date(), 1, 200);

// recebe o ID da negociação gerada

let id = dao.adiciona(negociacao);
let negociacaoBuscada = dao.buscaPorId(id);