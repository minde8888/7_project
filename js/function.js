

console.log('-------------------------------------------')

function isrinktiRaides(raide, nr) {
    let out;

    if(typeof(raide) !== "string" && raide.length > 100){
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    }else if(typeof (nr) !== 'number' && nr === 0){
        return 'Antrasis kintamasis yra netinkamo tipo.';
    }else if(raide.length < nr)
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    else {    
            
        for( i=nr; i<raide.length; i+nr ){
            out= out+raide[i];
            return raide[i];
        }
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
    let result;
    if(isNaN(skaicius) && typeof (skaicius) !== 'number'){
        return 'Pateikta netinkamo tipo reikšmė.'
    }
    else{
        result = (skaicius + '').length
        /*for(let i=0; i=skaicius.length; i++)
        result=result + 1;
        //a + '' .length*/
    }
    return result;
}
 
console.log(skaitmenuKiekisSkaiciuje(37060123456))

//taypeof === "number"

console.log('-------------------------------------------')

function daugyba(a, b) {
    let sum = 0;
    sum = a * b;
    return sum;
}
 
console.log(daugyba(4,2))
  

