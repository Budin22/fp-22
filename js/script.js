'use strict';

// Вам нужно написать функции indexOf, lastIndexOf, find, findIndex, includes, every и some, которые работают так же, как одноименные методы массивов.
//     Читаете документацию по методу над которым работаете
//     разбираетесь как он работает и что возвращает
//     пишете функцию которая полностью имитирует работу метода

let acc, arr = [2,3,4,5,2,6,7,8,'good',5,15];

function callBack(element, index, array) {
    element = array[index];
    if(element === 11) {
        return true;
    }
}


// indexOf         ////////////////////////////////////////////////////////////////////////

function indexOf(item, arr, c = 0) {
    if (c >= arr.length) {
        return acc = -1;
    }
    if (c < 0) {
        for (let i = arr.length +c; i < arr.length; i++) {
            if (arr[i] === item) {
                acc = i;
                return acc;
            }
        }
    }
    for (let i = c; i < arr.length; i++) {
        if (arr[i] === item) {
            acc = i;
            return acc;
        }
    }
    acc = -1;
    return acc;
}
console.log(indexOf(5, arr, 0));


// lastIndexOf         ////////////////////////////////////////////////////////////////////////

function lastIndexOf(item, arr, c = arr.length) {
    if (c < 0) {
        for (let i = arr.length + c; i >= 0; i--) {
            if (arr[i] === item) {
                acc = i;
                return acc;
            }
        }
    }
    for (let i = c; i >= 0; i--) {
        if (arr[i] === item) {
            acc = i;
            return acc;
        }
    }
    acc = -1;
    return acc;
}
console.log(lastIndexOf(5, arr));

// find         ////////////////////////////////////////////////////////////////////////

function find(array, callBack) {
    for(let index= 0; index < array.length; index++) {
        if(callBack(array[index], index, array)) {
            return array[index];
        }
    }
}
console.log(find(arr, callBack));


// findIndex         ////////////////////////////////////////////////////////////////////////

function findIndex(array, callBack) {
    for(let index= 0; index < array.length; index++) {
        if(callBack(array[index], index, array)) {
            return index;
        }
    }
    return -1;
}
console.log(findIndex(arr, callBack));


// includes         ////////////////////////////////////////////////////////////////////////

function includes(arr, item, index = 0) {
    if (index < 0) {
        for (let i = arr.length +index; i < arr.length; i++) {
            if (arr[i] === item) {
                return arr[i] === item;
            }
        }
    }
    for (let i = index; i < arr.length; i++) {
        if (arr[i] === item) {
            return arr[i] === item;
        }
    }
    return 1 === 0;
}
console.log(includes(arr, 2, -5));


// some         ////////////////////////////////////////////////////////////////////////

function some(array, callBack) {
    if(array.length === 0) {
        return false;
    }
    for(let index= 0; index < array.length; index++) {
        if(callBack(array[index], index, array)) {
            return true;
        }
    }
    return false;
}
console.log(some(arr, callBack));


// every         ////////////////////////////////////////////////////////////////////////

function every(array, callBack) {
    for(let index= 0; index < array.length; index++) {
        if(!callBack(array[index], index, array)) {
            return false;
        }
    }
    return true;
}
console.log(every(arr, callBack));