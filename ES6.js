const trainer = { 
	name : 'Nithin',
	tech1() {  // ES6 Syntax to define a Method
		console.log("AIML JavaFS Trainer")
	},
	tech2() { 
		console.log("C++ MERN Trainer")
	}
}
function func(param1, param2, param3) {
	trainer.tech1(); // Call to the method tech1()
	trainer['name'] = 'Nithin Belamkar' // name of the trainer object modified. Note how we HARD-CODED the field of trainer. This is same as trainer.name = 'Nithin Belamkar'
	trainer[param1]();
	console.log(trainer.name);
	trainer[param2.value] = param3; // Doesn't change/modify trainer.name
	console.log(trainer.name);
	trainer[param2] = param3; // 
	console.log(trainer.name); // 'Nithin Neelakanta Rao'
	console.log(param2.value); // undefined
	console.log(param2); // Prints 'name' which is the value of the variable 'param2'
}
 
func('tech2', 'name', 'Nithin Neelakanta Rao');
 
// const trainer = {
// 	name : 'Nithin',
// 	tech() { 
// 		console.log(this);
// 		return 5;
// 	}
// };
 
// const var1 = trainer.tech; // var1 is a reference to trainer.tech method which is a member of trainer object.
// console.log(var1); // Prints: [Function: tech]
// const var2 = trainer.tech(); // Calling the method and storing the return value of the method in var2
// console.log(var2 + "   " + typeof(var2)); // Prints:  5  number
// var1();  //PRINTS HUGE AMOUNT OF INFO, when the program is run using CLI node.  WHATS THAT???
// num = var1();  