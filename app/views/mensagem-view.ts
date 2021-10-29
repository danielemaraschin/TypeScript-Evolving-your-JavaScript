export class MensagemView{
    private element: HTMLElement
    constructor (seletor: string){
        this.element = document.querySelector(seletor);
    }

    template(model: string): string{

    }

    update(model: string): void {
        const template = this.template
    }
}