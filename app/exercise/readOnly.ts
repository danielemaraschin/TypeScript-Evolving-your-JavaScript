export class Fatura {
    constructor(
        private readonly criadaEm: Date, 
        private quantidade: number, 
        private valor: number
    ) {}
}