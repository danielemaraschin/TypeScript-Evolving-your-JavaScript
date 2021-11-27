import { NegociacaoController } from "./src/controllers/negociacao-controller.js";
import { NegociacoesView } from "./src/views/negociacoes-view.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possível inicializar a app. Verifique se o form existe.');
}
const negociacoesView = new NegociacoesView("#negociacoesView");
