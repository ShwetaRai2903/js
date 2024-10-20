//relational Op

'use strict';
function hello() {
	console.clear();
	console.log("Is 2 < 3?", 2<3 );
	let oper1 = 5;
	let oper2 =7;
	let oper3 = "5";
	console.log("Is oper1 < oper2?", oper1 < oper2);
	console.log("Is oper1 <= oper2?", oper1 <= oper2);
	console.log("Is oper1 > oper3?", oper1 > oper3);
	console.log("Is oper1 >= oper3?", oper1 >= oper3);
	console.log("Is oper1 == oper3", oper1 == oper3);
	console.log("Is oper1 != oper3", oper1 != oper3);
	console.log("Is oper1 === oper3", oper1 === oper3);
	console.log("Is oper1 !== oper3", oper1 !== oper3);
}