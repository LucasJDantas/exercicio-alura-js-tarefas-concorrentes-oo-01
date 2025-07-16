import { Personagem } from "./personagem.js";
import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";

export class ArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMago
    static tipo = 'ArqueiroMago'
    static descricao = 'Detentor de lancas e flechas mágicas!'

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome)
        this.ladoArqueiro = new Arqueiro(nome, destreza)
        this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia)
    }

    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`        
    }
}

//Quando for criar uma instância dentro do constructor, é preciso repetir os elementos exportados de Personagem
//Vide o exemplo do this.ladoArqueiro e do this.ladoMago - as informações precisam ser preenchidas, mesmo que repetidas
//Caso não preencha, dará erro e no console as informações estarão preenchidas nos lugares errados
//Os elementos seguem uma ordem