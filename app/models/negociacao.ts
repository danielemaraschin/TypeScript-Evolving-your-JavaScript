export class Negociacao {

    constructor(
        private _data: Date,
        public readonly _quantidade: number,
        public readonly _valor: number
    ) { }

    get data(): Date {
        return this._data;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }

}