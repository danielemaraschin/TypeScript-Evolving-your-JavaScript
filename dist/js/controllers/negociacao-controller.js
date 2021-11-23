import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { DiaDaSemana } from "../enums/dias-da-semana.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.negociacaoesView = new NegociacoesView("#negociacoesView", true);
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.atualizaView();
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.workDay(negociacao.data)) {
            this.mensagemView.update('Please, fill the form with a workday.');
        }
        else {
            this.negociacoes.adiciona(negociacao);
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
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacaoesView.update(this.negociacoes);
        this.mensagemView.update('Negotiation has been added successfully');
    }
}
