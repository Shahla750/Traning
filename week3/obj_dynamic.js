const trainer = {
	name : 'Nithin',
	tech () { 
		console.log('MERN Stack');
		return 'improving fast and better';
	}
};

trainer['name'] = 'saba' // existing name will be modified
trainer['location'] = 'mysuru' // new key-value paid is added

delete trainer.tech
delete trainer['tech']

trainer.address = {doorNum: 185, area: 'CHH'}
//OR we can add a new property using [ ]
trainer['address'] = {doorNum: 185, area: 'CHH'}

//The benefit of adding a new property using [] is that the property name too can be given by the user:
const propertyName = 'address'
trainer[propertyName] = {doorNum: 185, area: 'CHH'}

//To Delete a Property from an Object:
//delete trainer.address;
delete trainer['address'];