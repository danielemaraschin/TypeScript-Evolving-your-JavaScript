import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { DiaDaSemana } from "../enums/dias-da-semana.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes; //pode remover a tipagem pq já está inicializando o atributo
        this.negociacaoesView = new NegociacoesView("#negociacoesView", true);
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data"); //input data tem id-data no index.html
        this.inputQuantidade = document.querySelector("#quantidade"); //definindo o que sao as prop da classe negociacaoController
        this.inputValor = document.querySelector("#valor");
        this.atualizaView(); //td vez q o controller é chamado, ele garante que vai renderizar a pagina
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(// não precisa dar new para chamar criaDe pq é um método statico
        this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.workDay(negociacao.data)) {
            this.mensagemView.update('Please, fill the form with a workday.');
        }
        else {
            this.negociacoes.adiciona(negociacao); //cria a negociacao e adiciona ela na lista negociacoes
            this.atualizaView();
            this.limparFormulario();
        }
    }
    workDay(data) {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }
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
