console.log('script work!');

const Pi = 3.14;

console.log(Pi);

let petsArray = ['Gans', 'Dik', 'Fiona', 'Robin'];

console.log(  petsArray[1] );
console.log(  petsArray.length  );

let summ = 2 + 2 * 2;


let string = 'Иван' + ' ' + 'Иваныч';

console.log(string);

console.log( 9 - '5d');


console.log( 5 > 2 );

let age = 16;

if (age >= 18) {
  console.log('Можно продать алкоголь');
} else {
  console.log('Платим штраф и закрываем магазин...');
}


let name = ' ';
console.log(name.length);

if (name) {
  console.log('Здравствуйте, ' + name);
} else {
  console.log('Здравствуйте, товарищ!');
}

let a = 0;
console.log(a); // 0
a++;
console.log(a); // 1

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//                         4
for (let i = 0; i < petsArray.length; i++) {
  console.log('Hello, ' + petsArray[i]);

  if (petsArray[i].length > 4) {
    console.log('Long name');
  } else  {
    console.log('Short name');
  }
}


function printSumm(a, b) {
  console.log(a + b);
}

printSumm(4, 7);
printSumm(7, 7);
printSumm(1, 2);
