import { Negociacao } from "./negociacao.js";

// esse modelo de negociacoes, vai encapsular a lista de negociacoes

export class Negociacoes {
    private negociacoes: Negociacao[] = [] //so a instancia de negociacoes que pode alterar o array negociacoes
    //tipo ARRAY que vai receber dentro Negociacao

    public adiciona(negociacao: Negociacao) { //o parametro negociacao vai ser do tipo : Negociacao
        this.negociacoes.push(negociacao);//recebe essa negociacao e faz um push na lista de negociacoes
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}









// document.querySelector('form').addEventListener('submit', (event) => {
    // var tr = document.createElement("tr");
// 
    // const negociacoes = new Negociacoes()
    // negociacoes.lista().forEach(n => {
        // var td = document.createElement("td");
        // td.textContent = n.value
    // }
// )}
        