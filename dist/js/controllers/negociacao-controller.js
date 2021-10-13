import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector("#data"); //input data tem id-data no index.html
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    criaNegociacao() {
        const date = new Date(this.inputData.value.replace(/-/g, ", "));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    adiciona() {
        let negociacao = this.criaNegociacao();
        console.log(negociacao);
        this.limparFormulario();
        // document.querySelector(".form").addEventListener('submit', function (event){
        // event.preventDefault();
        // var tr = document.createElement("tr");
        // var td = document.createElement("td");
        // tr.appendChild(td)
        // }) 
    }
    ;
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus(); //dps de limpar todos os campos, coloca o foco no campo Data
    }
}
