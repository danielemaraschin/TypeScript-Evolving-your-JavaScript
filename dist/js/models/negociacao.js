export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    //como data eh um objeto e nao apenas um valor como 'quantidade'e 'valor', ela tem métodos que acabam podendo
    //modifica-la mesmo que seja readonly entao nao adianta usar o readonly
    get volume() {
        return this.quantidade * this.valor;
    }
}
