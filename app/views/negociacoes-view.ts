import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView{

    private elemento : HTMLElement;

    constructor(seletor : string){
        this.elemento = document.querySelector(seletor) //GUARDA O ELEM DO DOM AQUI, nao precisa chamar toda hora o template
    }
    template(model: Negociacoes): string{ //retorna uma string HTML  - metodo template so serve para gerar template
        return`
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
                    return`
                        <tr>
                            <td>${""} </td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
                })}
            </tbody>
        <table>`
    }
    update(model: Negociacoes): void { //por esse metodo pedimos para a View fazer o seu proprio update 
        this.elemento.innerHTML = this.template(model); //transforma codigo HTML em elemento do DOM
    }
}