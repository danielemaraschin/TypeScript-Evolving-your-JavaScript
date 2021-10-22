export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor); //GUARDA O ELEM DO DOM AQUI, nao precisa chamar toda hora o template
    }
    template() {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            
            
            </thead>
            <tbody></tbody>
        <table>`;
    }
    update() {
        this.elemento.innerHTML = this.template(); //transforma codigo HTML em elemento do DOM
    }
}
