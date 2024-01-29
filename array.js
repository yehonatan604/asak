// create an array of countries
let countries = ["USA", "Canada", "Germany", "Japan", "Australia"];

let countries2 = [...countries]; // Shallow copy
// countries2 = countries; // Deep copy

countries2[0] = 'Israel';

console.log(...countries);
console.log(...countries2);


// push vs unshift
countries.push('France'); // end of array
countries.unshift('Italy'); // start of array

console.log(...countries);

// pop vs shift
countries.pop(); // end of array
countries.shift(); // start of array

console.log(...countries);

// splice vs slice
countries.splice(1, 2, 'Jamaica'); // start, how many
console.log(...countries);

countries2 = countries.slice(1, 5); // start, end

console.log(...countries2);


console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');

//foreach

countries.forEach((item, index) => {
    console.log(index, item.toUpperCase());
});

//filter

let countries3 = countries.filter((item, index) => {
    return item.length !== 3;
});

console.log(...countries3);

//map

let nums = [10, 2, 350, 4, 5];

let numsPower2 = nums.map((item, index) => {
    return item * item;
});

console.log(...numsPower2);

//reduce

let avg = nums.reduce((acc, item) => {
    return acc + item;
}, 0) / nums.length;

console.log(avg);

//join
console.log(nums.join('-'));

//concat

let numsNew = nums.concat(numsPower2);
console.log(...numsNew);
