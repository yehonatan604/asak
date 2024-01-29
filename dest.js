// object destructuring

const addTenAndCalc = (num1, num2) => {
    n1 = num1 + 10;
    n2 = num2 + 10;

    return {
        num1: n1,
        num2: n2,
        sum: n1 + n2
    };
}

const { sum, num1, num2 } = addTenAndCalc(1, 2);
console.log(sum);

// array destructuring

const addTenAndCalc2 = (num1, num2) => {
    n1 = num1 + 10;
    n2 = num2 + 10;

    return [n1, n2, n1 + n2];
}

const [numB, numA, total] = addTenAndCalc2(1, 2);
console.log(total);
