//'use strict';
//function hello()
//{
//	console.clear();
//	let myArray = [2,4,5,6,8];
	//console.log(myArray);
	//console.log(myArray, myArray.length);
	
	//myArray[2] = 5000;
	//console.log(myArray, myArray.length);
	

	//myArray = ['Hello','World',23];
	//console.log(myArray,myArray.length);
	
	//myArray.push(100);
	//console.log(myArray,myArray.length);
	//console.log(myArray.pop(),myArray,myArray.length);
	//console.log(myArray.pop(),myArray,myArray.length);
	//console.log(myArray.pop(),myArray,myArray.length);
	//console.log(myArray.pop(),myArray,myArray.length);
	//console.log(myArray.pop(),myArray,myArray.length);
	//console.log(myArray.pop(),myArray,myArray.length);
	//console.log(myArray.pop(),myArray,myArray.length);
	
	//myArray.push(100);
	//console.log(myArray.pop(),myArray,myArray.length);
	//console.log(myArray.pop(),myArray,myArray.length);
	//console.log(myArray.pop(),myArray,myArray.length);

//	console.log(myArray.indexOf(5));

//	console.log(myArray.reverse(), myArray);
	
//	myArray = ["ZZZ", "MMM", "SSS", "AAA"];
//	myArray.sort();
//	console.log(myArray);

//	myArray = [100, 30, 1500, 12, 100, 10];
//	myArray.sort();
//	console.log(myArray);

//}

//The Spreade Operater

//'use strict';
//function hello()
//{
//	console.clear();

//	let myArray = [2,4,6,8,10];
//	//let otherArray = myArray;
//	console.log(...myArray);
	
//	let otherArray = [...myArray];
//	otherArray[2] = 200;
//	console.log(myArray, myArray);

//	let oneMorearray = [...myArray, ...otherArray, ...["ABC","DEF"]];
//	console.log(oneMorearray);
	
//	console.log(Math.min(2,4,6,8,1));
//	console.log(Math.min(myArray));
//	console.log(Math.min(...myArray));
	
//}

//Destructing

' use strict';
function hello(){
	console.clear();
	let x;
	let y;
	let a;
	let b;
	let c;
	let d;

	let myArray = [2,4,6,8];
	let otherArray = [];

	[x,y] = myArray;
	console.log(`X = ${x}`, `Y = ${y}`);

	[x,y, a, b, c = 10, d = 12] = myArray;
	console.log(`X = ${x}`, `Y = ${y}`, `a = ${a}`, `b = ${b}`, `c = ${c}`,  `d = ${d}`, );
	
	[x,...otherArray] = myArray;
	console.log(`X = ${x}, otherArray = ${otherArray}`);
	
}