const fruits = ['Banana', 'Apple', 'Orange'];
const pArray = document.querySelectorAll('p');

// index : 옵션화
// 1.P태그 배열을 사용하는법
pArray.forEach((p,index) => {
    p.innerHTML = fruits[index];
})

// 2.과일배열만 사용하는법(백틱사용)
fruits.forEach((d, index) => {
    document.querySelector(`#p${index}`).innerHTML = d;
})

const pElement = document.querySelector('#p0');
const p = document.querySelectorAll('p');
// 기본방법
document.querySelector('#p0').innerHTML = fruits[0];
document.querySelector('#p1').innerHTML = fruits[1];
document.querySelector('#p2').innerHTML = fruits[2];

// const fruits = ['Banana', 'Apple', 'Orange', 'Grape', 'Mango', 'Melon'];

fruits.forEach((dd) => {
    const p = document.createElement('p');
    p.innerHTML = dd;
    document.body.appendChild(p);
})

// const numbers = [1, 2, 3, 4, 5];
// print(numbers);

// // push
// numbers.push(6);
// print(numbers);
// numbers.push(7, 8, 9);
// print(numbers);

// // pop
// numbers.pop();
// print(numbers);

// // concat
// const numbersNew = [10, 11, 12];
// const merged = numbers.concat(numbersNew);
// print(merged);

// // revers
// const rev = numbers.reverse();
// print(rev);

// // join
// const arr = ['hello', 'my', 'name'];
// const a = arr.join(':');
// print(arr);
// console.log(typeof arr);
// console.log(typeof a);
// print(arr.join('|'));

// // 아주중요!! split, splice, slice
// // split
// // split : 원본유지
// // 조건을 만족시키고 배열에 담아서 준다.
// const str = '042-123-4567';
// const strEx = str.split('-');//조건을 수행하고 
// print (strEx[0]);
// print(str);

// // splice
// // splice : 원본을 훼손시킨다.
// const animalArray = ['rabbit', 'cow', 'pig', 'cat', 'dog'];
// // const result1 = animalArray.splice(2);
// // print(result1);
// print(animalArray);
// // const result2 = animalArray.splice(2, 2); //중요한 용법
// // print(result2);
// // print(animalArray);
// const result3 = animalArray.splice(2, 0, 'frog'); // 원본에 추가
// print(animalArray);   // 이 경우 result3는 빈 배열임

// // slice
// // slice : 원본유지
// // .slice(0) : 처음부터 끝까지
// const result4 = animalArray.slice(3);
// print(result4);
// print(animalArray);
// print(result4.splice(0, 1));
// print(result4);
// print(animalArray);

// function print(arr) {
//     // p태그를 하나 만든다.
//     // p태그에 파마리터로 받은 값을 넣는다.
//     // body에 붙인다.
//     const pTag = document.createElement('p');
//     pTag.innerHTML = arr;
//     document.body.appendChild(pTag);
// }
