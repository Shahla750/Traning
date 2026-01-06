const trainer = {
	name : this,
	tech1() {
		console.log('this:', this);
	},
	tech2 : () => {
		console.log('this:', this);
        console.log('this:', this.name);// this here referencing  the global obj and when we use .name it will give undefind
	}
};
const walk1 = trainer.tech1; // this is not binded to the object, hence the global object
walk1(); // this references to global object
 
const walk2 = trainer.tech2; // this is binded to the current object (to which the method belongs to), and it is because of the arrow method, and hence the current object which is trainer.
walk2(); // this references to trainer object