const trainer = {
	name : this,
	tech1() {
		console.log('this:', this);
	},
	tech2 : () => {
		console.log('this:', this.name);
	}
};
 
const walk1 = trainer.tech1; // this is not binded to the object, hence the global object
walk1();
 
const walk2 = trainer.tech2; // this is binded to the object because of arrow method and hence the current object which is trainer.
walk2();