function Animal () {
  this.family = "animal";
  console.log(this);
}

Animal();
var salamander = new Animal(); // create a new instance of 

salamander.property = "slimy";

var kangaroo = new Animal();
kangaroo.property = "jumpy";

console.log('salamander', salamander);
console.log('kangaroo', kangaroo);

function Doge() {
	this.species = "Doge";
}

Doge.prototype = new Animal();

var doge = new Doge();
console.log('doge', doge);

function Angus () {
	this.name = "Angus";
}

Angus.prototype = new Doge();
