// the sperade operater
 'use strict'
 function hello(){
	console.clear();

	let myArray = [2,4,6,8,10];
	console.log(...myArray);
	
	let otherArray = myArray;
	otherArray[2] = 200;
	console.log(otherArray , myArray);
	
	let oneMorearray = [...myArray, ...otherArray, ...["ABC","DEF"]];
	console.log(oneMorearray);

	console.log(Math.min(2,4,6,8,1));
	console.log(Math.min(...myArray));
	
 }