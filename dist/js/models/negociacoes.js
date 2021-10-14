// esse modelo de negociacoes, vai encapsular a lista de negociacoes
export class Negociacoes {
    constructor() {
        this.negociacoes = []; //so a instancia de negociacoes que pode alterar o array negociacoes
    }
    //tipo ARRAY que vvai receber dentro Negociacao
    adiciona(negociacao) {
        this.negociacoes.push(negociacao); //recebe essa negociacao e faz um push na lista de negociacoes
    }
    lista() {
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
