var guests = ["Zahid","Asim","Shehzad","Dawood","Bilal","Arif"];
var message = "Join me at a dinner tonight"
console.log(guests[0],message);
console.log(guests[1],message);
console.log(guests[2],message);
console.log(guests[3],message);
console.log(guests[4],message);
console.log(guests[5],message);

console.log(guests[2],"can not come to dinner")

guests[2] = "Nadeem"

console.log(guests[0],message);
console.log(guests[1],message);
console.log(guests[2],message);
console.log(guests[3],message);
console.log(guests[4],message);
console.log(guests[5],message);

console.log(guests[0],"I would like to inform you we have big dinner table");
console.log(guests[1],"I would like to inform you we have big dinner table");
console.log(guests[2],"I would like to inform you we have big dinner table");
console.log(guests[3],"I would like to inform you we have big dinner table");
console.log(guests[4],"I would like to inform you we have big dinner table");
console.log(guests[5],"I would like to inform you we have big dinner table");

guests.unshift("Ahmed");

guests.splice(4,0,"Atif");

guests.push("Qasim");

console.log(guests);

var new_message = "It's pleasure to invite you at a dinner";

console.log(guests[0],new_message);
console.log(guests[1],new_message);
console.log(guests[2],new_message);
console.log(guests[3],new_message);
console.log(guests[4],new_message);
console.log(guests[5],new_message);
console.log(guests[6],new_message);
console.log(guests[7],new_message);
console.log(guests[8],new_message);
