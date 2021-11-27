import { NegociacaoController } from "../src/controllers/negociacao-controller.js";
import { NegociacoesView } from "../src/views/negociacoes-view.js";

const controller = new NegociacaoController();
//quando submete apertando no botao, quer chamar o metodo adiciona da controller
//o form tem uma classe chamada "form"

const form = document.querySelector(".form")

if(form){ //if só será executado se tiver algum valor dentro
    form.addEventListener('submit', event =>{ //form é o event aqui
        event.preventDefault();
        controller.adiciona();
    });
}else{
    throw Error('Não foi possível inicializar a app. Verifique se o form existe.')
}
const negociacoesView = new NegociacoesView("#negociacoesView")
