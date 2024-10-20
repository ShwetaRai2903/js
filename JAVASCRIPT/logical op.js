//logical Op

'use strict';
function hello()
{
	//Do and's &&
	console.clear();
	//console.log(true && true);
	//console.log(true && false);
	//console.log(false && true);
	//console.log(false && false);

	//Do or's ||
	//console.log(true || true);
	//console.log(true || false);
	//console.log(false || true);
	//console.log(false || false);

	
//	console.log(true || true || true);
//	console.log(true || false || false);
//	console.log(false || true || true);
//	console.log(false || false || true);

// Mix Up
    //console.log(true && true || true);
	//console.log(true && false || false);
	//console.log(false && true || true);
	//console.log(false && false || true);

	//Not 
	//console.log(!(true && true || true));
	//console.log(!(true && false || false));
	//console.log(!(false && true || true));
	//console.log(!(false && false || true));

	//let trueValue  = true;
	//let falseValue = false;
	//console.log(trueValue && trueValue && trueValue);
	//console.log(trueValue && falseValue && falseValue);
	//console.log(falseValue && trueValue && trueValue);
	//console.log(falseValue && falseValue && trueValue);

	let oper1 = 5;
	let oper2 = 7;
	let oper3 = "Hello";

	console.log(oper1 > oper2 && oper3 === "Hello");
	
}