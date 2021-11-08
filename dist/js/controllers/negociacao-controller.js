import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes; //pode remover a tipagem pq já está inicializando o atributo
        this.negociacaoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data"); //input data tem id-data no index.html
        this.inputQuantidade = document.querySelector("#quantidade"); //definindo o que sao as prop da classe negociacaoController
        this.inputValor = document.querySelector("#valor");
        this.atualizaView(); //td vez q o controller é chamado, ele garante que vai renderizar a pagina
    }
    criaNegociacao() {
        const date = new Date(this.inputData.value.replace(/-/g, ", "));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6) {
            this.negociacoes.adiciona(negociacao); //cria a negociacao e adiciona ela na lista negociacoes
            this.negociacaoesView.update(this.negociacoes);
            this.atualizaView();
            this.limparFormulario();
        }
    }
    ;
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus(); //dps de limpar todos os campos, coloca o foco no campo Data
    }
    atualizaView() {
        this.negociacaoesView.update(this.negociacoes);
        this.mensagemView.update('Negotiation has been added successfully');
    }
}
