export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    //throw new Error("Template has to be implemented.");
    //using abstract method it's not need throw new error
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
