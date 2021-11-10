import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{
    private inputData: HTMLInputElement; //coloca que é um elemento do input HTML pq essas propriedades só são definidas no constructor
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes; //pode remover a tipagem pq já está inicializando o atributo
    private negociacaoesView  = new NegociacoesView("#negociacoesView")
    private mensagemView = new MensagemView("#mensagemView")
    private readonly SABADO = 6; //var em letra maiucula no ts
    private DOMINGO = 0;


    constructor(){
        this.inputData = document.querySelector("#data"); //input data tem id-data no index.html
        this.inputQuantidade =document.querySelector("#quantidade");//definindo o que sao as prop da classe negociacaoController
        this.inputValor = document.querySelector("#valor");
        this.atualizaView(); //td vez q o controller é chamado, ele garante que vai renderizar a pagina
    }
    private criaNegociacao() : Negociacao{
        const date = new Date(this.inputData.value.replace(/-/g, ", "));
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade,valor); 
    }
    public adiciona(): void{
        const negociacao = this.criaNegociacao()
        if(!this.workDay(negociacao.data)){
            this.mensagemView.update('Please, fill the form with a workday.');
        }else{
            this.negociacoes.adiciona(negociacao) //cria a negociacao e adiciona ela na lista negociacoes
            this.atualizaView();
            this.limparFormulario();
        }
    }

    private workDay(data: Date){
        return data.getDay()>this.DOMINGO && data.getDay()<this.SABADO
    }
    
    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus(); //dps de limpar todos os campos, coloca o foco no campo Data
    }

    private atualizaView(): void{
        this.negociacaoesView.update(this.negociacoes); 
        this.mensagemView.update('Negotiation has been added successfully')
        
    }
}
