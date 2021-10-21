import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";
const controller = new NegociacaoController();
//quando submete apertando no botao, quer chamar o metodo adiciona da controller
//o form tem uma classe chamada "form"
const form = document.querySelector(".form");
//form é um event
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
const negociacoesView = new NegociacoesView;
