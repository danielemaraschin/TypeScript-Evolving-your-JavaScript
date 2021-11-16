export abstract class View<T>{

    protected elemento: HTMLElement

    constructor(seletor: string, escape: boolean){
        this.elemento = document.querySelector(seletor)
    }

    protected abstract template(model: T) : string
        //throw new Error("Template has to be implemented.");
        //using abstract method it's not need throw new error
    

    public update(model: T): void{
        const template = this.template(model)
        this.elemento.innerHTML = template;
    }
}