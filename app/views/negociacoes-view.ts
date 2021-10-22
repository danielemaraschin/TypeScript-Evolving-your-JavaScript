export class NegociacoesView{

    private elemento : HTMLElement;

    constructor(seletor : string){
        this.elemento = document.querySelector(seletor) //GUARDA O ELEM DO DOM AQUI, nao precisa chamar toda hora o template
    }
    template(): string{ //retorna uma string HTML  - metodo template so serve para gerar template
        return`
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            
            
            </thead>
            <tbody></tbody>
        <table>`
    }



}