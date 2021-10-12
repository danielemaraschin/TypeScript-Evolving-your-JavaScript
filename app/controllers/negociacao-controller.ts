export class NegociacaoController{
    private inputData;
    private inputQuantidade;
    private inputValor;

    constructor(){
        this.inputData = document.querySelector("#data"); //input data tem id-data no index.html
        this.inputQuantidade =document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor")

    }
}