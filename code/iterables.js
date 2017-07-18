//PositivEddie's additions
console.log('1.');
console.log('Javascript is super duper awesome'[4]);
//////////////////////////
console.log('2.');
for(i=0; i<'Javascript is super duper awesome'.length;i++) {
  console.log('Javascript is super duper awesome'[i]);
}
//////////////////////////
console.log('3.');
i = 0;
while( i < 'Javascript is super duper awesome'.length) {
  console.log('Javascript is super duper awesome'[i]);
  i++;
}
//////////////////////////
console.log('4.');
var myProfileObject = {};
myProfileObject['school'] = 'School of Hard Knocks';
myProfileObject['location'] = 'Bay Area';
myProfileObject['name'] = 'Edward';
console.log('I used the assignment operator... is that a notation?');
//////////////////////////
console.log('5.');

function addObject(name,hobby,place_of_birth) {
  var newObject = {};
  newObject['name'] = name;
  newObject.hobby = hobby;
  newObject.place_of_birth = place_of_birth;
  newObject.printName = function() {
    console.log("my name is " + newObject.name + " and I'm from " + newObject.place_of_birth);
  }
  return newObject;
}
var objectA = addObject('Edward Gardner','javascript','Hayward, CA');
console.log(objectA.printName());
///////////////////////////
console.log('6. ');
//Almost got started on this...

console.log('Let\'s start Hacking!');
