import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor(){
        this.inputData = document.querySelector("#data"); //input data tem id-data no index.html
        this.inputQuantidade =document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor")
    }
    criaNegociacao(){
        const date = new Date(this.inputData.value.replace(/-/g, ", "));
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade,valor); 
    }
    adiciona(){
        let negociacao = this.criaNegociacao()
        console.log(negociacao)
    }

}