"use strict";

console.log('-------------------------------------------')

function isrinktiRaides(raide, nr) {
    let out = '';

    if(typeof(raide) !== "string" && raide.length > 100){
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    }else if(typeof (nr) !== 'number' && nr === 0){
        return 'Antrasis kintamasis yra netinkamo tipo.';
    }else if(raide.length < nr)
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    else {    
        
        for( let i=nr-1; i<raide.length; i=i+nr ){
            out+=raide[i];
            
        }
        
        return out;
    }
}

console.log( isrinktiRaides( 'jhiugabc', 2 ) );


console.log('-------------------------------------------')

function didziausiasSkaiciusSarase(sarasas) {

    if(Array.isArray(sarasas)!= true){
        return 'Pateikta netinkamo tipo reikšmė.';
    }else if(sarasas.length == 0){
        return 'Pateiktas sąrašas negali būti tuščias.';
    }
    else{
        let a = sarasas[0];

        for(let i=1; i<sarasas.length; i++){
            if(a < sarasas[i])
            a = sarasas[i];
        }
        return a;
    }
}
    console.log( didziausiasSkaiciusSarase(  [ 69, 69, 69, 69, 66 ] ) );

console.log('-------------------------------------------')

function skaitmenuKiekisSkaiciuje(skaicius) {
    let count = 0;
    //let modul;
   // modul = Math.abs(skaicius);
    
    //let newModul = replace.modul('.','');
    //let integer = parseInt(newModul);
    //String( integer);
    if(typeof(skaicius)!=='number' ){
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if(skaicius === Infinity || -skaicius === Infinity ){
        return 'Pateikta netinkamo tipo reikšmė.'
    }
    if(!isFinite(skaicius)){
        return 'Pateikta netinkamo tipo reikšmė.';
    }
          
    
   let skaiciustextu = skaicius.toString();
   skaiciustextu = ''+skaicius;
   count=skaiciustextu.length;
   if(skaicius < 0){
    count--;
    }
    if(skaicius % 1 !== 0 ){
        count--;
    }

    
   return  count;
}
 
console.log(skaitmenuKiekisSkaiciuje(5))
console.log(skaitmenuKiekisSkaiciuje(781))
console.log(skaitmenuKiekisSkaiciuje(37060123456 ))
console.log(skaitmenuKiekisSkaiciuje(true))
console.log(skaitmenuKiekisSkaiciuje('asd'))
console.log(skaitmenuKiekisSkaiciuje(NaN))
console.log(skaitmenuKiekisSkaiciuje(null))
console.log(skaitmenuKiekisSkaiciuje(undefined))
console.log(skaitmenuKiekisSkaiciuje(Infinity))
console.log(skaitmenuKiekisSkaiciuje(-Infinity))
console.log(skaitmenuKiekisSkaiciuje(false))
console.log(skaitmenuKiekisSkaiciuje([1]))
console.log(skaitmenuKiekisSkaiciuje(-1987))
console.log(skaitmenuKiekisSkaiciuje(2.5))
console.log(skaitmenuKiekisSkaiciuje(-2.5))
console.log(skaitmenuKiekisSkaiciuje(1555555555555555555555555555555557777777779999998785))



//taypeof === "number"

console.log('-------------------------------------------')

function daugyba(a, b) {
    let sum = 0;
    sum = a * b;
    return sum;
}
 
console.log(daugyba(4,2))
  

