export class View {
    //private escape = false; o codigo acima pode ser assim tb que o resultado eh o mesmo 
    constructor(seletor, escape) {
        this.escape = false; //nao precisa colocar boolean pq como estamos atribuindo o valor, o ts já insere o boolean
        this.elemento = document.querySelector(seletor);
    }
    //throw new Error("Template has to be implemented.");
    //using abstract method it's not need throw new error
    update(model) {
        let template = this.template(model);
        if (this.escape) { //if scape is true
            template = template.replace(/<script>[\s/S/]*?<\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }
}
