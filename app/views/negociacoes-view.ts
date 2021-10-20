export class NegociacoesView{
    template(): string{ //retorna uma string HTML // primeiro retornsa a template string
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