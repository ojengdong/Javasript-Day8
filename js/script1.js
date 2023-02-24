w// filter, map, reduce ***제일중요***
// map
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.filter((number) => {
//     return number > 3;
// })
// print(result);
// print(numbers);

// const 프로그래밍언어 = ['javascript', 'java', 'C#', 'C++'];
// const result2 = 프로그래밍언어.map(언어 => 언어.length);
// print(result2);

// const users = [
//     {name : 'Smith', age: 22},
//     {name : 'Bill', age: 32},
//     {name : 'Andy', age: 41},
//     {name : 'Tom', age: 38}
// ];
// const result3 = users.map(user => user.age);
// print(result3);

function print(arr) {
    const p = document.createElement('p');
    p.innerHTML = arr;
    document.body.appendChild(p);
}

// const guys = [
//     {name: 'Smith', 주급:10000000},
//     {name: 'Bill', 주급: 500000},
//     {name: 'Andy', 주급:300000}
// ];

// // const result2 = guys.filter((guy) => {
// //     return guy .주급 > 400000;
// // })
// const result2 = guys.filter(guy => guy.주급 > 400000);
// console.log(result2);

// reduce 
const numbers = [11, 22, 33, 44, 55];
const result = numbers.reduce((n1, n2) => {
    console.log(n1, n2);
    return n1 + n2;
})
print(result);

const arr = [
    [0, 1],
    [2, 3],
    [4, 5]
];
// [0,1,2,3,4,5]
const result2 = arr.reduce((a, b) => {
    return a.concat(b);
})
console.log(result2);
print(result2);