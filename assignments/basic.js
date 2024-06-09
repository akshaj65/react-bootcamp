function addTwoNums(a,b){
    return a+b;
    }
console.log(addTwoNums(2,3));

function str_len(str){
    return str.length;
}
console.log(str_len("hi"));

function firstOfArr(arr) {
    return arr[0];
}
console.log(firstOfArr([1,2,3,4]));

function squareNum(num) {
    return num*num;
}
console.log(squareNum(5));

function str_uppercase(str) {
    return str.toUpperCase();
}
console.log(str_uppercase("hekki"));

function swap_firstLastArr(arr) {
    let last= arr.pop();
    let first=arr.shift();
    arr.unshift(last); //insert at first pos
    arr.push(first); //insert last
    return arr;
}
console.log(swap_firstLastArr([1,2,3,4,5,6]));

function isEven(num) {
    return num%2==0;
}
console.log(isEven(3));

function remove_firstLastChar(str) {
    return str.slice(1,str.length-1);
}
console.log(remove_firstLastChar("world"));

function sumOfArr(arr) {
    return arr.reduce((a,b)=>a+b,0);
}
console.log(sumOfArr([1,2,3,4]));

function abs_num(num) {
    return Math.abs(num);
}
console.log(abs_num(-1));

function remove_vowelStr(str) {
    let vowels =['a','e','i','o','u','A','E','I','O','U'];
    let out="";
    for (let index = 0; index < str.length; index++) {
        let char=str.charAt(index);
        if(vowels.includes(char)) continue;
        out+=char;
    }
    return out;
}
console.log(remove_vowelStr("kisan jam"));

function reverse_arr(arr){
    return arr.reverse();
}
console.log(reverse_arr([1,2,3,4,5]));