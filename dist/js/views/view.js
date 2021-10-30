export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        throw new Error("Template has to be implemented.");
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
