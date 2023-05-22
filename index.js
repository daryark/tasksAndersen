//task 1
// const VALID_STATUSES = new Set(["SUCCESS", "FINAL", "DONE"]);

// const people = [
// 	{ name: "Dasha", status: "SUCCESS" },
// 	{ name: "Sasha", status: "REJECT" },
// 	{ name: "Vasyl", status: "DONE" },
// ];

// const peopleWithValidStatus = people
// 	.filter((person) => VALID_STATUSES.has(person.status))
// 	.map((person) => person.name);

// console.log(peopleWithValidStatus);

//task 2
// Promise.reject("a")
// 	.catch((p) => p + "b")
// 	.catch((p) => p + "c")
// 	.then((p) => p + "d")
// 	.finally((p) => p + "e")
// 	.then((p) => console.log(p));

//task 3

// class GODListener {
// 	constructor() {
// 		this.counter = 90;
// 	}

// 	handleClick() {
// 		console.log(this);
// 		this.counter += 1;
// 		console.log(this.counter);
// 		return this.counter;
// 	}

// 	count() {
// 		console.log(this.counter);
// 		this.counter += 1;
// 		return this.counter;
// 	}
// }

// const element = document.getElementById("testBtn");
// const listener = new GODListener();

// element.addEventListener("click", listener.handleClick.bind(listener));

//task 4
// function foo() {}

// foo.x = 10;

// console.log(foo.x);

//task 5
// const map1 = new Map();
// // makes an object of key:values and remember the order of entering values

// map1.set("a1", "1d");
// map1.set("2b", "s2");
// map1.set("3c", "f3");

// console.log(map1.get("a"));
// // Expected output: 1

// map1.set("a1", 97);

// console.log(map1.get("a"));
// // Expected output: 97

// console.log(map1.size);
// // Expected output: 3

// map1.delete("2b");

// console.log(map1.size);
// // Expected output: 2

// map1.set("b1", "78hj");

// console.log(map1);
// //Expected output: {'a1' => 97, '3c' => 'f3'}

// const c = [...map1.values()].map((v) => parseInt(v, 10));
// console.log(c);
// //Expected output: [1, NaN, 78] (1 from '1', NaN from 'f3', 78 from '78hj)

//task 6
// let x = 10;

// function bar(funcArg) {
// 	x = 30;
// 	funcArg();
// }

// function foo() {
// 	console.log(x);
// }

// foo.x = 20;
// bar.x = 40;

// bar(foo);

//task 7

// var a = "hello";

// function b() {
// 	if (false) {
// 		var a = "world";
// 	}
// 	var b = "man";
// 	console.log(b);
// 	console.log(a);
// }

// b();

//task 8

// console.log(0 || (1 && 2) || 3);

//task 9
// var a = {};

// (function b(a) {
// 	a.a = 7; //change original object by link
// 	console.log(a.a);
// 	a = null; //simple data type, so it changes only inner 'a' and doesn't affect outer one
// 	// console.log(a);
// })(a);

// console.log(a); //expected output: {a: 7}

// const numbers = [-1, -2, 4, -5, 6, 8];
// const result = numbers.filter((n) => n > 0).map((n) => n * 2);
// console.log(result);

// let a = 10;
// a.b = 10;
// console.log(a.b);
//  var num = 2;
//  function(num)

// function A(arr) {
// 	var a = 0;
// 	var b = 0;
// 	for (let i = 0; i < arr.length - 1; i++) {
// 		b = b + arr[i];
// 		if (b < 0) {
// 			b = 0;
// 		}
// 		if (a < b) {
// 			a = b;
// 		}
// 		return a;
// 	}
// }

// var arr = [1, -2, 3, 4, -5, 8];
// var result = A(arr);
// console.log(result);
// var x = 0;
// if (x > -5) {
// 	x++;
// }
// if (x > 0 && x++ > 1) {
// 	x += 7;
// }
// x += 10;

// if (x > 10 || x++ > 9) {
// 	x += 8;
// }

// if (x++ > 0) {
// 	x += 2;
// }

// console.log(x);

// function A(number) {
// 	var a = 0;
// 	var b = 1;
// 	while (b <= number) {
// 		a += b;
// 		b++;
// 	}
// 	return a;
// }

// console.log(A(12));

// function A(array) {
// 	var a = array[0];
// 	var b = array[0];

// 	for (var i = 0; i < array.length; i++) {
// 		if (array[i] > a) {
// 			b = a;
// 			a = array[i];
// 		} else if (array[i] > b && array[i] != a) {
// 			b = array[i];
// 		}
// 	}

// 	return b;
// }

// console.log(A([5, 10, 3, 8, 6]));

// function A(a, b) {
// 	while (b != 0) {
// 		var temp = b;
// 		b = a % b;
// 		a = temp;
// 	}
// 	return a;
// }
// console.log(A(24, 36));

// function A(n) {
// 	var numbers = [];

// 	for (var i = 2; i <= n; i++) {
// 		let a = true;

// 		for (var j = 2; j <= Math.sqrt(i); j++) {
// 			if (i % j == 0) {
// 				a = false;
// 				break;
// 			}

// 			if (a) {
// 				numbers.push(i);
// 			}
// 		}
// 	}
// 	return numbers;
// }

// console.log(A(10));

// const numbers = [6, 4, -1, 1, 2, -2, 5];

// function A(numbers) {
// 	numbers.sort();

// 	var a = 0;
// 	for (var i = 0; i < numbers.length; i++) {
// 		if (numbers[i] > 0) {
// 			a = i;
// 			break;
// 		}
// 	}

// 	for (var i = a; i < numbers.length; i++) {
// 		if (numbers[i] - numbers[i - 1] > 1) {
// 			return numbers[i - 1] + 1;
// 		}
// 	}

// 	return numbers[numbers.length - 1] + 1;
// }

// console.log(A(numbers));
