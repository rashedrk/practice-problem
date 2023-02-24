// practice problem map(), filter(),find()
// 1. 
const odd = [1,3,5,7,9];
const evenLoop = [];
for (let i = 0; i < odd.length; i++) {
    element = odd[i] + 1;
    evenLoop.push(element);
};
console.log(evenLoop);
const evenMap = odd.map(num => num + 1);
console.log(evenMap);

// 2.
const numbers = [33,50,79,78,90,101,30];
const divisibleByTen = numbers.filter(num => num % 10 === 0);
console.log(divisibleByTen);

// 3.
const divisibleByTenFind = numbers.find(num => num % 10 ===0);
console.log(divisibleByTenFind);

// practice problem reduce()
// 1.
const numsReduce = [1, 9, 17 ,22];
let sum = 0;
for (let i = 0; i < numsReduce.length; i++) {
    sum += numsReduce[i];
};
console.log(sum);
const sum2 = numsReduce.reduce( (previousValue, currentValue) => previousValue + currentValue, 0);
console.log(sum2);

// 1. challenging 
const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
];
const totalAge = people.reduce((previousValue, currentValue) => previousValue + currentValue.age, 0);
console.log(totalAge);


// access object values (challenging)
const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  };
const {email, address} = user;
const city = user.address.city;
const lat = user.address.geo.lat;
const companyName = user.company.name;
console.log(email, address, city, lat, companyName);
