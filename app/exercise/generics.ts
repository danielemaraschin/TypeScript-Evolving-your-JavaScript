import { Negociacao } from "../models/negociacao";

//exercicio

class GenericDAO<T, K> {

    adiciona(objeto: T): K {
        /* implementação do método omitida */
    }

    apaga(objeto: T): void {
        /* implementação do método omitida */
    }

    buscaPorId(id: K): T {
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

let dao = new GenericDAO();
let negociacao = new Negociacao(new Date(), 1, 200);

// recebe o ID da negociação gerada

let id = dao.adiciona(negociacao);
let buscaNegociacao = dao.buscaPorId(id);