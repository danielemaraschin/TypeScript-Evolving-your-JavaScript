export abstract class View<T>{

    protected elemento: HTMLElement
    constructor(seletor: string){
        this.elemento = document.querySelector(seletor)
    }
    abstract template(model: T) : string
        //throw new Error("Template has to be implemented.");
        //using abstract method it's not need throw new error
    
    update(model: T): void{
        const template = this.template(model)
        this.elemento.innerHTML = template;
    }
}