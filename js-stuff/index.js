//TESTING JAVASCRIPT THINGS

function printName(name) {
	console.log(name)
}

const printNameArrow = (name) => {
	console.log(name)
}

const printNameArrow2 = name => console.log(name)

const multiply = number => number * 2;

printName("Kim")
printNameArrow("Kimmy")
printNameArrow2("Kimberly")
console.log(multiply(6));

////////////////////////////////
class Human {
	constructor() {
		this.gender = 'Male'
	}

	printGender() {
		console.log(this.gender)
	}
}

class Person extends Human{
	constructor() {
		super();
		this.name = "Kimberly"
		this.gender = "Female"
	}

	printName() {
		console.log(this.name)
	}
}

const person = new Person();
person.printName();
person.printGender();

//////////////////////////////

//Spread: used to split up array elements or object params
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6];
console.log(newNumbers);

const person2 = {
	name: 'John'
}

const newPerson = {
	...person2, //can be used to copy an object immutably
	age: 28
}

console.log(newPerson);

//Rest: used to merge a list of function arguments into an array
const filter = (...args) => args.filter( el => el === 1);
console.log(filter(1, 2, 3));

//////////////////////////////////

//Destructuring: easily extract array elements or object
//properties and store them in variables

//Array
[a, b] = ['Hey', 'Kim'];
console.log(a)
console.log(b)

//Object
let {name} = {name:'Kimmy', age:22};
console.log(name)
//console.log(age) -> undefined

const nums = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3)

///////////////////////////////

const numbersArray = [1, 2, 3];

const doubleArray = numbersArray.map((num) => {
	return num*2;
});

console.log(numbersArray)
console.log(doubleArray)

//////////////////////////////

const arr = [1, 2, 3, 4, 5, 6];
const obj1 = [
		{name: 'kim', age: 22},
		{name: 'john', age: 30},
		{name: 'kate', age: 27},
		{name: 'mike', age: 30}
	]
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange', 'pineapple']
const foods = ['pizza', 'bread', 'potato', 'cheese', 'rice']
const arr2 = [1, 4, 5, 6, 6, 7, 8, 9, 2, 4, 3, 2, 5, 5, 9, 0, 4]
let days = ['monday', 'wednesday', 'friday']

//Array.prototype.map()
//creates a new array with the results of calling a
//provided function on every element in the calling array
const map1 = arr.map((x) => {
	return x*2 //return element for new array
});
console.log('Map', map1)

const map2 = Array.prototype.map.call('Kimmy', (x) => {
	return x.charCodeAt(0);
})
console.log('Map', map2);

//Array.prototype.find()
//returns the value of the first element in the array that satifies
//provided testing function other wise returns undefined
const find1 = arr.find((x) => {
	return x > 3;
})
console.log('Find', find1);

function isThirty(age) {
	return age.age === 30;
}

const find2 = obj1.find(isThirty);
console.log('Find', find2);

//Array.prototype.findIndex()
//returns the index of the first element in array that satisfies
//the provided testing function otherwise returns -1
const findIndex1 = arr.findIndex((x) => {
	return x === 5
})
console.log('findIndex', findIndex1)

function isKimmy(name) {
	return name.name === 'kimmy';
}
const findIndex2 = obj1.findIndex(isKimmy);
console.log('findIndex', findIndex2)
const findIndex3 = obj1.findIndex(isThirty);
console.log('findIndex', findIndex3)

//Array.prototype.filter()
//creates a new array with all the elements that pass
//the test implementation by provided function
const filter1 = obj1.filter((x) => {
	return x.name.length > 3;
})
console.log('Filter', filter1)

function filterFruits(str) {
	return fruits.filter((x) => {
		return x.toLowerCase().indexOf(str.toLowerCase()) > -1;
	})
}

const filter2 = filterFruits('ap');
console.log('Filter', filter2)
const filter3 = filterFruits('fruit')
console.log('Filter', filter3)

//Array.prototype.reduce()
//executes a reducer function on each member of the array resulting
//in a single output value
const reducer = (acc, cur, idx, src) => {
	return acc + cur;
}

const reducer1 = arr.reduce(reducer);
console.log('Reducer', reducer1)
const reducer2 = arr.reduce(reducer, 10);
console.log('Reducer', reducer2)

function groupBy(array, prop) {
	return array.reduce((acc, obj) => {
		let key = obj[prop];
		if(!acc[key]) acc[key] = [];
		acc[key].push(obj)
		return acc;
	}, {});
}
const group = groupBy(obj1, 'age');
console.log('Reducer', group)

const removeDups = arr2.sort().reduce((acc, cur) => {
	const length = acc.length;
	if(length === 0 || acc[length-1] !== cur) {
		acc.push(cur)
	}
	return acc;
}, [])
console.log('Reducer', removeDups)


//run promises from array of function which will return
//promises in a chained manner
function runPromises(arr, input) {
	return arr.reduce(
		(promiseChain, currFunc) => promiseChain.then(currFunc),
			Promise.resolve(input)
	)
}

function p1(a) {
	return new Promise((resolve, reject) => {
		resolve(a*5)
	})
}
function p2(a) {
	return new Promise((resolve, reject) => {
		resolve(a*4)
	})
}
function f3(a) { //will be wrapped in a resolved promise by .then()
	return (a*3)
}
function p4(a) {
	return new Promise((resolve, reject) => {
		resolve(a*2)
	})
}

const promiseArray = [p1, p2, f3, p4];
//runPromises(promiseArray, 10).then(console.log)

//Array.prototype.concat()
//used to merge two or more arrays and returns the new array
const concat1 = fruits.concat(foods);
console.log('Concat', concat1)

const concat2 = fruits.concat('cherry', ['melon', 'watermelon'])
console.log('Concat', concat2)

const concat3 = fruits.concat(arr, foods)
console.log('Concat', concat3)

//Array.prototype.slice()
//returns a shallow copy of a portion of an array into a new
//array object selected from begin to end index exclusive
const slice1 = fruits.slice(2)
console.log('Slice', slice1)

const slice2 = fruits.slice(2, 4);
console.log('Slice', slice2)

//Array.prototype.splice()
//method changes the contents of an array by removing
//exisiting elements and/or adding new elements
const splice1 = days.splice(1, 0, 'tuesday');
console.log('Splice', splice1)
console.log('Splice original array', days)

const splice2 = days.splice(3, 1, 'thursday')
console.log('Splice', splice2)
console.log('Splice original array', days)

const splice3 = days.splice(2);
console.log('Splice', splice3)
console.log('Splice original array', days)

//Array.prototype.forEach()
//executes a provided function once for reach array element
const forEach1 = arr.forEach((x) => {
	console.log('forEach1', x)
})

const copy = []
foods.forEach((x) => {
	copy.push(x)
})
console.log('forEach2', copy)

//Array.of()
//creates a new Array instance with a varibale number of
//arguments, regardless of number or type
const of1 = Array.of(7)
console.log('Of', of1)

const of2 = Array.of(7, 8, 2, 1, 1)
console.log('Of', of2)

//not using of
const of3 = Array(7)
console.log('Of', of3)

const of4 = Array(1, 2, 3)
console.log('Of', of4)

//Array.from()
//method creates a new, shallow-copied Array instance from an
//array-like or iterable object
const from1 = Array.from('kimmy')
console.log('From', from1)

const from2 = Array.from([1, 2, 3], (x) => {
	return x+x;
})
console.log('From', from2)

const m = new Map([[1, 'a'], [2, 'b'], [3, 'c']])
const mVals = Array.from(m.values())
console.log('From', mVals)
const mKeys = Array.from(m.keys())
console.log('From', mKeys)

//Array.prototype.join()
//creates and returns a new string by concatenating all of the
//elements in an array or array-like objects, separated by commas
//or a specified separator string
const join1 = arr.join()
console.log('Join', join1)

const join2 = arr.join('')
console.log('Join', join2)

const join3 = arr.join('/')
console.log('Join', join3)

//Array.prototype.shift()
//removes the first element from an array and returns
//that removed element and changes length of array
const arr3 = [4, 3, 2, 6, 7, 8]
const shift1 = arr3.shift()
console.log('Shift', shift1);
console.log('Shifted array', arr3)

//Array.prototype.unshift()
//adds one or more elements to the beginning of an array
//and returns the new length
const unshift1 = arr3.unshift(7, 9)
console.log('Unshift', unshift1) //length
console.log('Unshifted array', arr3)

//Function.prototype.call()
//calls a function with a given 'this' value and
//arguments provided indiviudally
function Product(name, price) {
	this.name = name;
	this.price = price;
}
function Food(name, price) {
	Product.call(this, name, price);
	this.category = 'food';
}

const newFood = new Food('egg', 3)
console.log('Call', newFood)


//Function.prototype.apply()
//calls a function with a given 'this' value, and arguments
//provided as an array or array like object
const max = Math.max.apply(null, arr)
console.log('Apply', max)

const min = Math.min.apply(null, arr)
console.log('Apply', min)

//adds an array to another array and affects targeted array
const arr4 = [7, 7, 7]
const arr5 = [8, 8, 8]
arr4.push.apply(arr4, arr5)
console.log('Apply', arr4)

//Function.prototype.bind()
//creates a new function that has its 'this' keyword set to
//the provided value, with a given sequence of arguments
//preceding any provided when the function is called

let module = {
	x: 42,
	getX: function() {
		return this.x;
	}
}

let unboundedGetX = module.getX;
console.log('Bind', unboundedGetX());

let boundedGetX = unboundedGetX.bind(module);
console.log('Bind', boundedGetX());

//Object.assign()
//used to copy the values of all enumerable own properties from one
//or more source ibjects to a target object and return target object
const obj2 = {
	a: 1,
	b: 2,
	c: 3
}

const obj3 = Object.assign({c: 4, d: 5}, obj2)
console.log('Assign', obj2)
console.log('Assign', obj3)

//copy one obj to another
const obj4 = Object.assign({}, obj3)
console.log('Assign', obj4)

//merge objects
const obj5 = Object.assign(obj2, obj3, obj4)
console.log(obj5)
console.log(obj2) //target object changed

//Object.keys()
//returns an array of an objects property names
const keys1 = Object.keys(obj2)
console.log('Keys', keys1)

//Object.entries()
//returns an array of a given object's own enumerable property
//key, value pairs - an array of [key, value]
const entries1 = Object.entries(obj2);
console.log('Entries', entries1)

//Object.values()
//returns an array of a given object's own enumerable property values
//in the same order as that provided by a for...in loop
const values1 = Object.values(obj2);
console.log('Values', values1)











