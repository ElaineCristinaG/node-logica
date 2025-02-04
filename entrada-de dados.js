const Categoria = {
    ABAIXO: 'abaixo do peso ideal',
    IDEAL:'no seu peso ideal',
    LEV_ACIMA: 'levemente acima do peso',
    OBES_I: 'obesidade grau I',
    OBES_II: 'obesidade grau II (severa)',
    OBES_III: 'obesidade grau III (morbida)',
}
class Imc{
    constructor(peso,alt,imc){
        this.peso = 0;
        this.alt = 0;
        this.imc = 0;
        this.max = 0;
        this.min = 0;
    }

    calculate(peso,alt){
        this.imc = (peso / alt**2);
        return this.imc
    }

    categoria(imc){
    
        if(this.imc < 18.5)return Categoria.ABAIXO;
        if(this.imc < 25)return Categoria.IDEAL;
        if( this.imc < 30)return Categoria.LEV_ACIMA;
        if(this.imc < 35)return Categoria.OBES_I;
        if(this.imc < 40)return Categoria.OBES_II;
        if(this.imc >= 40)return Categoria.OBES_III;
        }
    
    idealMax(alt){
        this.max = 24.99 * (alt**2)
       return  this.max
    }
    idealmin(alt){
        this.min = 18.6 * (alt**2)
       return  this.min;
    }
}

const prompt = require('prompt-sync')();

const nome = prompt('Digite seu nome: ');
console.log(`Olá, ${nome}!`); 

const peso = prompt('Peso(kg): ')
const alt = prompt('Altura(m): ')

const imc = new Imc();
const result = imc.calculate(peso,alt)
console.log(`Seu IMC é ${result.toFixed(2)}`);

const conc = imc.categoria(result);
console.log(`Você está ${conc}`);

const max = imc.idealMax(alt);
console.log(`Seu peso Max é: ${max.toFixed(2)}`);

const min = imc.idealmin(alt);
console.log(`Seu peso Min é: ${min.toFixed(2)}`);

const meta = peso - max;
console.log(`Você precisa perder ${meta.toFixed(2)}kg para atingir seu peso máximo.`);
