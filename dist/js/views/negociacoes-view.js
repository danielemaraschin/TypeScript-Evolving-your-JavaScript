import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        return `
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
            return `
                        <tr>
                            <td>${this.formatarData(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
        }).join('')}
            </tbody>
        <table>`;
    }
    formatarData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
//o código update foi apagado pq ele está sendo herdado da classe pai, mas vou deixar o codigo aqui caso precise consultar dps
// update(model: Negociacoes): void { //por esse metodo pedimos para a View fazer o seu proprio update --
//     this.elemento.innerHTML = this.template(model); //transforma codigo HTML em elemento do DOM
//         //update e template recebem o mesmo parametro pq no final o template que vai passar os dados para elem do dom no final
//}
//}
// fazemos lista().map  para q cada item da lista retorne a tr com suas td preenchidas com os dados em js ${}
//mas para essa string nao ser um array, precisamos add o metodo .join() , sem nenhuma separação entre os itens do array (que deixarão de ser array)
