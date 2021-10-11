export class Negociacao {

    private _data;
    private _quantidade;
    private _valor;
   
    constructor(data,quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get _data(){
        return this.data;
    }

    get _quantidade(){
        return this.quantidade;
    }

    get _valor(){
        return this.valor;
    }

    get volume(){
        return this.quantidade * this.valor;
    }

}