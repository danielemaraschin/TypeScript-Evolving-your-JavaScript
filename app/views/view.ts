export abstract class View<T>{

    protected elemento: HTMLElement
    private escape: boolean = false; //nao precisa colocar boolean pq como estamos atribuindo o valor, o ts já insere o boolean
    //private escape = false; o codigo acima pode ser assim tb que o resultado eh o mesmo 

    constructor(seletor: string, escape: boolean){
        this.elemento = document.querySelector(seletor)
    }

    protected abstract template(model: T) : string
        //throw new Error("Template has to be implemented.");
        //using abstract method it's not need throw new error
    

    public update(model: T): void{
        let template = this.template(model);
        if(this.escapar){ //if scape is true
            template = template.replace(/<script>[\s/S/]*?<\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }
}