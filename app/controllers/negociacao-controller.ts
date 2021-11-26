import { Negociacao } from "../src/models/negociacao.js";
import { Negociacoes } from "../src/models/negociacoes.js";
import { MensagemView } from "../src/views/mensagem-view.js";
import { NegociacoesView } from "../src/views/negociacoes-view.js";
import { DiaDaSemana } from "../src/enums/dias-da-semana.js";

export class NegociacaoController{
    private inputData: HTMLInputElement; //coloca que é um elemento do input HTML pq essas propriedades só são definidas no constructor
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes; //pode remover a tipagem pq já está inicializando o atributo
    private negociacaoesView  = new NegociacoesView("#negociacoesView", true)
    private mensagemView = new MensagemView("#mensagemView")

    constructor(){
        this.inputData = document.querySelector("#data") as HTMLInputElement; //input data tem id-data no index.html
        this.inputQuantidade = <HTMLInputElement>document.querySelector("#quantidade") ;//definindo o que sao as prop da classe negociacaoController
        this.inputValor = <HTMLInputElement>document.querySelector("#valor");
        this.atualizaView(); //td vez q o controller é chamado, ele garante que vai renderizar a pagina
    }

    public adiciona(): void{
        
        const negociacao = Negociacao.criaDe( // não precisa dar new para chamar criaDe pq é um método statico
            this.inputData.value, 
            this.inputQuantidade.value, 
            this.inputValor.value
        )
        if(!this.workDay(negociacao.data)){
            this.mensagemView.update('Please, fill the form with a workday.');
        }else{
            this.negociacoes.adiciona(negociacao) //cria a negociacao e adiciona ela na lista negociacoes
            this.atualizaView();
            this.limparFormulario();
        }
    }

    private workDay(data: Date){
        return data.getDay()> DiaDaSemana.DOMINGO && data.getDay()< DiaDaSemana.SABADO
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

