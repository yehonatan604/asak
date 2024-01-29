let num = 10;

while (true) {
    num--;

    if (num == 5) {
        continue; // skip this iteration
    }

    console.log(num);

    if (num === 0) {
        break; // break the loop
    }
}

// לוח הכפל במטריצה דו ממדית

for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += i * j + "\t";
    }
    console.table(row);
}

let arr = [100, 200, 300, 400, 500, 600, 700, 800, 900];

let obj = {
    name: "Yossi",
    age: 30,
    city: "Tel Aviv"
};

obj.name; // "Yossi"
obj['name']; // "Yossi"


for (let item of arr) {
    console.log(item);
}

for (let key in obj) {
    console.log(key + ': ' + obj[key]);
}


// for of = array
// for in = object