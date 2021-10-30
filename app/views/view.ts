export  class View{

    public elemento: HTMLElement
    constructor(seletor: string){
        this.elemento = document.querySelector(seletor)
    }
    template(model: string){
        throw new Error("Template has to be implemented.")
    }
    update(model: string): void{
        this.elemento.innerHTML = this.template(model)
    }
}