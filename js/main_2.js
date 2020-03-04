const t1 = 'vardenis';
const t2 = 'pavardenis';

const t12 = t1 + ' ' + t2;
console.log(t1)
console.log(t2)
console.log(t12)

console.log('as esu: ' + t12 + '.')

console.log('-------------------------------------------------');

const pazymiai = [10, 5, 2, 8];
console.log(pazymiai);
console.log('Finalinis rezultatas', )

console.log('Pirmas narys: ', pazymiai[0])
console.log('Antras narys: ', pazymiai[1])
console.log('Trecias narys: ', pazymiai[2])
console.log('ketvirtas narys: ', pazymiai[3])

const altern = pazymiai[0] - pazymiai[1] + pazymiai[2] - pazymiai[3];
console.log('Finalinis rezultatas:', altern)

const suma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3];

const vidurkis = suma / pazymiai.length;// masyvo ilgis .length
console.log('Pazymiu vidurkis: ' + vidurkis)

console.log('-------------------------------------------------');


let sakinys = 'Zodzio "vardenis" ilgis yra 8 simboliai.';
console.log(sakinys)
const zodis = 'ne zvirblis';
sakinys = 'zodzio '+ zodis + ' ilgis yra ' + zodis.length + ' simboliai.'; 
console.log(sakinys)

console.log('-------------------------------------------------');

const abc = ['a', 'b','c','d','e','f'];
//const.log(abc);

const abcText = abc[5] + ',' + abc[4] + ',' + abc[3] + ',' + abc[2] + ',' + abc[1] + ',' + abc[0];
console.log(abcText)

console.log('-------------------------------------------------');

// <, >, >=, >=, ==, !=, ===, !==

const s1 = 4;
const s2 = 7;

if(s1 > s2) {
    console.log(true);
}else {
    console.log(false);
}

// text kontevertuoti i skaiciu ->