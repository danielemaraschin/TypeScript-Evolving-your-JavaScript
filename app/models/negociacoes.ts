import { Negociacao } from "../models/negociacao.js";

// esse modelo de negociacoes, vai encapsular a lista de negociacoes

export class  Negociacoes {
    private negociacoes: Array<Negociacao> = [] //so a instancia de negociacoes que pode alterar o array negociacoes
}