//strings
'use strict';
function hello(){
	console.clear();
	//console.log("Hello World".length);
	
	//let helloW = "Hello World";
	//console.log(helloW.length);
	
	//let part1 = 'Hello';
	//let part2 = 'World';

	//let hello2 = `our message is: ${part1} ${part2}.`
	//console.log(hello2);
	
	//let hello3 = "Our message is: " + part1 + " " + part2 + ".";
	//console.log(hello3);
	
	let helloWorld = "Hello World";
	//console.log(helloWorld.startsWith('Hello', 1));
	
	//console.log(helloWorld.padStart(30, '%'));
	//console.log(helloWorld.padEnd(30, '%'));
	
	//console.log(helloWorld.repeat(10));
	
	//console.log(helloWorld.slice(2, 5));
	
	//console.log(helloWorld.toUpperCase());
	//console.log(helloWorld.toLocaleLowerCase());

	
	let spaceString = "    Hello World     ";
	console.log("|" + spaceString + "|");
    console.log("|" + spaceString.trimStart() + "|");
	console.log("|" + spaceString.trimEnd() + "|");
	console.log("|" + spaceString.trim() + "|");
	

}