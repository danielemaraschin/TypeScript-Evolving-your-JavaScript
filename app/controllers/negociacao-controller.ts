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
        adiciona(){
            const date = new Date(this.inputData.value.replace(/-/g, ", "));
            const negociacao = new Negociacao(
                date,
                this.inputQuantidade.value,
                this.inputValor.value
            ); 
            
            console.log(negociacao)
        }
}