'use strict'
function hello()
{
	let cont = false;
do {

	
	console.clear();
	let type = prompt('What type of line: H: Horizontal, V: Vertical, D: Diagonal');
	//let len = prompt('How long do you want your line?');
	let lenString = prompt('How long do you want your line?');
	const len = Number.parseInt(lenString);
	let lineString = '';
	switch(type.toUpperCase())
	{
		case 'H':
			console.log('Horizontal line:');
			for (let i=0; i<len; i++)
			{
				lineString += '*';
			}
			console.log(lineString);
			break;
		case 'V':
			console.log('Vertical line:');
			for (let i=0; i<len; i++)
			{
				lineString += '*\n';
			}
			console.log(lineString);
			break;
		case 'D':
			console.log('Diagonal line');
			for (let i=0; i<len; i++)
			{
				for (let j=i; j<i*2; j++)
				{
					lineString += ' ';
				}
				lineString += '*\n';
			}
			console.log(lineString);
			
			break;
		default:
			console.error("You did not pick a valid line type.");

	}
	cont = confirm("Draw another line?");
}
	//let cont = confirm("Draw another line?");

	while(cont);
}