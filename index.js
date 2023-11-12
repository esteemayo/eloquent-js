let total = 0;
let count = 1;

while (count <= 10) {
  total += count;
  count += 1;
}

console.log(total);
console.log(count);

for (let i = 0; i <= 12; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    console.log(i);
  }
}

let number = 0;

while (number <= 12) {
  number += 2;
  console.log(number);
}

for (let i = 20; i >= 20; i++) {
  if (i % 7 === 0) {
    console.log(i);
    break;
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  console.log(item);
}

function fizzBuzz(value) {
  if (typeof value !== 'number') {
    throw new Error('Input value is not a number');
  }

  if (value % 3 === 0 && value % 5 === 0) {
    console.log('FizzBuzz');
  } else if (value % 3 === 0) {
    console.log('Fizz');
  } else if (value % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(value);
  }
}

fizzBuzz(15);

const hummus = (factor) => {
  const ingredient = (amount, unit, name) => {
    let ingredientAmount = amount * factor;

    if (ingredientAmount > 1) {
      unit += 's';
    }

    console.log(`${ingredientAmount} ${unit} ${name}`);
  };

  ingredient(1, 'can', 'chickpeas');
  ingredient(0.25, 'cup', 'tahini');
  ingredient(0.25, 'cup', 'lemon juice');
  ingredient(1, 'clove', 'garlic');
  ingredient(2, 'tablespoon', 'olive oil');
  ingredient(0.5, 'teaspoon', 'cumin');
};

hummus(30);

// closure ---> this is the ability to treat functions as values

function wrapValue(n) {
  let local = n;
  return () => local;
}

const wrap1 = wrapValue(1);
console.log(wrap1());

const wrap2 = wrapValue(2);
console.log(wrap2());

function getName(name) {
  const userName = name;

  return () => {
    return `Welcome, ${userName}`;
  };
}

const user = getName('John');
console.log(user());

function outer() {
  const outerVar = 'I am outer';

  function inner() {
    return outerVar;
  }

  return inner;
}

const outerExample = outer();
console.log(outerExample());

function multiplier(factor) {
  return (number) => number * factor;
}

const twices = multiplier(2);
console.log(twices(5));

// a function that calls itself is called recursive

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * Math.pow(base, exponent - 1);
  }
}

console.log(power(2, 3));
console.log(power(5, 2));
console.log(power(10, 5));

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history}+5)`) ||
        find(current * 3, `(${history}*3)`)
      );
    }
  }
  return find(1, '1');
}

console.log(findSolution(24));

function printFarmInventory(cows, chickens) {
  let cowString = String(cows);

  while (cowString.length < 3) {
    cowString = '0' + cowString;
  }
  console.log(cowString);

  let chickenString = String(chickens);

  while (chickenString.length < 3) {
    chickenString = '0' + chickenString;
  }
  console.log(chickenString);
}

printFarmInventory(7, 11);

function zeroPad(number, width) {
  let string = String(number);

  while (string.length < width) {
    string = '0' + string;
  }

  return string;
}

function printFarmInventory2(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory2(7, 16, 3);

function minimum(val1, val2) {
  return Math.min(val1, val2);
}

const result = minimum(2, 3);
console.log(result);

function isEven(number) {
  function anotherFunc() {
    if (number < 0) {
      return 0;
    }

    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  anotherFunc();
}

const num = isEven(50);
console.log(num);

const num2 = isEven(75);
console.log(num2);

function countBs(str) {
  return str
    .split('')
    .filter((str) => str === 'B')
    .join('').length;
}

const str = countBs('agBjkBpoBuiBtyBioBjk');
console.log(str);

function countChar(str, val) {
  return [...str].filter((item) => item === val).join('').length;
}

const char = countChar('dghwtyfgbjnwtfhfg', 't');
console.log(char);

const sequence = [1, 2, 3];
console.log(sequence.shift());
console.log(sequence.pop());
console.log(sequence);

const objectA = {
  a: 1,
  b: 2,
};

Object.assign(objectA, { b: 3, c: 4 });

console.log(objectA);

console.log([1, 2, 3, 2, 1].indexOf(2));
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

console.log([0, 1, 2, 3, 4].slice(2, 4));
console.log([0, 1, 2, 3, 4].slice(2));

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(['a', 'b', 'c', 'd', 'e'], 2));

console.log('coconuts'.slice(4, 7));
console.log('coconut'.indexOf('u'));
console.log('one two three'.indexOf('ee'));
console.log(' okay \n '.trim());

const sentence = 'Secretarybirds specialize in stomping';
let words = sentence.split(' ');
console.log(words);

words = words.join(' ');
console.log(words);

console.log('LA'.repeat(3));

const string = 'abc';
console.log(string.length);
console.log(string[1]);
console.log(string.split('')[1]);

const myName = 'john';
console.log(myName[0].toUpperCase().concat(myName.substring(1)));

const maxNumber = (...numbers) => {
  let result = -Infinity;

  for (const number of numbers) {
    if (number > result) result = number;
  }
  return result;
};

console.log(maxNumber(4, 1, 9, -2));

const num3 = [5, 1, 7];
console.log(Math.max(...num3));

let words2 = ['never', 'fully'];
words2 = ['will', ...words2, 'understand'];

console.log(words2);

console.log(Math.random());
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(4.9));
console.log(Math.abs(-4.5));

// destructuring

const { name } = {
  name: 'John',
  age: 23,
};

console.log(name);

// JSON

let journal = {
  squirrel: false,
  event: ['work', 'touched tree', 'pizza', 'running'],
};

journal = JSON.stringify(journal, null, 3);
console.log(journal);

journal = JSON.parse(journal);
console.log(journal);
