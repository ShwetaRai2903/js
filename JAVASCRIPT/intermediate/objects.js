'use strict';
function hello() {
	console.clear();
	//let emp = [{	
	//	name: 'Bills',
	//	empNo: '12345',
	//	fullTime: true,
	//	salary: 10,
	//	shifts: [0,8,8,0,8,4,4],
	//}];

	//let empString = JSON.stringify(emp);
	//console.log(empString);

	// Give bill a raise
	//emp.salary *= 1.05;

	//// Cut bill's hours
	////for (let i=0; i<emp.shifts.length; i++) {
	////	emp.shifts[i] *= .9;
	////}
	//// Calc pay
	//let totalPay = 0;
	//for ( let s of emp.shifts){
	//	totalPay += s * emp.salary;
	//}
	//console.log("Pay bill: ", totalPay);
	
	////console.log(empString);

	//let empString = prompt("Enter the employees");
	//let empObj =JSON.parse(empString);
	////console.log(empString);
	
	//let newEmp = {
	//	name:"Bills",
	//	empNo:"12345",
	//	fullTime:true,
	//	salary:10,
	//	shifts:[8,8,8,8,0,0,0]
	//};
	//empObj.push(newEmp);

	//console.log(empObj);
	//empString = JSON.stringify(empObj);
	//console.log(empString);
	

	// Objects-The spread object
	////let obj = {name: 'Bill', age: 33, Profession: {name:'Carpenter', exp: 22, age: 34}};
	//let obj = {name: 'bill', age:33};
	//let profession = {name: 'Carpenter', exp: 2};
	////let myObj = obj;
	//let myObj = {...obj, ...profession};
	//myObj.age++;
	//myObj.exp++;
	////myObj.Profession.exp++;
	//console.log(obj, myObj);
	
	
	//Destructuring
	let emp = {
		name: 'Bill',
		age: 33,
		job: 'carpenter',
		salary: 10.5,
		//experience:2,
	};
	//let {name, age, job, salary} = emp;
	//console.log(name, age, job, salary);
	emp.experience = 12;
	let {job:profession, experience: timeOnJob} = emp;
	console.log(profession, timeOnJob);
	
}