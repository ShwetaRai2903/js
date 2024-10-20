'use strict'
function hello()
{
	console.clear();
	let date1 = new Date('2024-09-23');
	let date2 = new Date(2024, 9, 30);

	console.log(date1, typeof(date1));
	console.log(date2, typeof(date2));
	
	console.log(date1.toLocaleString());
	console.log(date2.toLocaleString());
	
	console.log(date1.getMonth());
	console.log(date2.getMonth());

	console.log(date1.getFullYear());
	console.log(date2.getFullYear());
	
	
}