console.log('--------------------------------dienos');

const dienos = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let counter = 0;
let  menuo = 0;
let  diena= 0;
for(let m=0; m<12; m++){
    for(let d=0; d<=dienos[m]; d++){
        counter++;
        menuo = m+1;
        diena =d+1;
        console.log('('+counter+')' + menuo + ': ' + diena);
    }
}

console.log('--------------------------------LAIKAS');


for(let h=0; h<12; h++){
    for(let m=0; m<60; m++){
        for(let s=0; s<60; s++){
            console.log(h + ':' + m + ':' + s);
        }
    }
}

console.log('-------------------------------------------------');

let sum1=0;
let sum2=0;
let sum3=0;

for (let i = 0; i <= 11; i++) {
    if(i%3==0){
        sum1=sum1+1;
    }
    if(i%5==0){
        sum2=sum2+1;
    }
    if(i%7==0){
        sum3=sum3+1;
    }
}
console.log('dalinasi is 3 -',sum1);
console.log('dalinasi is 5 -',sum2); 
console.log('dalinasi is 7 -',sum3); 

console.log('-------------------------------------------------');

const from = 0;
const till = 11;
const divider = 3;
let cou = 0;

for(let i = from; i<=till; i++){
   // console.log(i+'->'+(i % divider))
    if(i % divider === 0){
        cou++;
    }
}
console.log('Skaičių intervale tarp '+from+' ir '+till+', besidalinančių be liekanos iš '+divider+' yra  '+cou+' vienetai.'
   )

console.log('-------------------------------------------------');

let sum = 0;
for (let i = -70; i <= 30; i++) {
    sum +=i;
}
console.log('=',sum);

console.log('-------------------------------------------------');

let n = 'abcdef';
let    s = '';
     
let count = 0;

    /*for(let i=n.length-1; i>=0; i-- ){
       s +=n[i]; 
    }
    console.log(s);*/

   /* for(let i=0; i<=n.length; i++ ){
        s +=n[n.length-i-1]; 
     }
     console.log(s);*/

     for(let i=0; i<n.length; i++ ){
        s = n[i] + s; 
     }
     console.log(s);

console.log('-------------------------------------------------');