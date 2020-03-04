

console.log('-------------------------------------------------');

let sum1=0;
let sum2=0;
let sum3=0;

for (let i = 0; i <= 11; i++) {
    if(i%3==0 && i!=0){
        sum1=sum1+1;
    }
    if(i%5==0 && i!=0){
        sum2=sum2+1;
    }
    if(i%7==0 && i!=0){
        sum3=sum3+1;
    }
}
console.log('dalinasi is 3 -',sum1);
console.log('dalinasi is 5 -',sum2); 
console.log('dalinasi is 7 -',sum3); 


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

    for(let i=n.length-1; i>0; i-- ){
       s +=n[i]; 
    }
    console.log(s);

console.log('-------------------------------------------------');