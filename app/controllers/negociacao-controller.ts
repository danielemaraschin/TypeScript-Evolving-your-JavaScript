import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController{
    private inputData: HTMLInputElement; //coloca que é um elemento do input HTML pq essas propriedades só são definidas no constructor
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes;

    constructor(){
        this.inputData = document.querySelector("#data"); //input data tem id-data no index.html
        this.inputQuantidade =document.querySelector("#quantidade");//definindo o que sao as prop da classe negociacaoController
        this.inputValor = document.querySelector("#valor")
    }
    criaNegociacao() : Negociacao{
        const date = new Date(this.inputData.value.replace(/-/g, ", "));
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade,valor); 
    }
    adiciona(): void{
        let negociacao = this.criaNegociacao()
        console.log(negociacao)
        this.limparFormulario()
    
        // document.querySelector(".form").addEventListener('submit', function (event){
            // event.preventDefault();
             // var tr = document.createElement("tr");
            // var td = document.createElement("td");

            // tr.appendChild(td)
        // }) 
     };
    
    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus(); //dps de limpar todos os campos, coloca o foco no campo Data
    }

}
