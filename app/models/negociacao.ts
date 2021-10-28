export class Negociacao {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    get data(): Date {
        const data = new Date(this.data.getTime());
        return this._data;


    }//como data eh um objeto e nao apenas um valor como 'quantidade'e 'valor', ela tem métodos que acabam podendo
    //modifica-la mesmo que seja readonly entao nao adianta usar o readonly

    get volume(): number {
        return this.quantidade * this.valor;
    }

}