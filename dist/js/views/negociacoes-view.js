export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor); //GUARDA O ELEM DO DOM AQUI, nao precisa chamar toda hora o template
    }
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
                            <td>${""} </td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
        }).join('')}
            </tbody>
        <table>`;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model); //transforma codigo HTML em elemento do DOM
        //update e template recebem o mesmo parametro pq no final o template que vai passar os dados para elem do dom no final
    }
}
// fazemos lista().map  para q cada item da lista retorne a tr com suas td preenchidas com os dados em js ${}
