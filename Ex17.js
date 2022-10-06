var guests = ["Zahid","Asim","Shehzad","Dawood","Bilal","Arif"];
var message = "Join me at a dinner tonight";

console.log(guests[0],message);
console.log(guests[1],message);
console.log(guests[2],message);
console.log(guests[3],message);
console.log(guests[4],message);
console.log(guests[5],message);

console.log(guests[2],"can not come to dinner");

guests[2] = "Nadeem";

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

console.log("I want to tell you that table is shrinked i can only invite Two people");

message1 = "Sorry i could not invite you to dinner";

guests.pop();
console.log("Qasim",message1);
console.log(guests);
guests.pop();
console.log("Arif",message1);
console.log(guests);
guests.pop();
console.log("Bilal",message1);
console.log(guests);
guests.pop();
console.log("Dawood",message1);
console.log(guests);
guests.pop();
console.log("Atif",message1);
console.log(guests);
guests.pop();
console.log("Nadeem",message1);
console.log(guests);
guests.pop();
console.log("Asim",message1);
console.log(guests);

console.log(guests[0],"You are still invited");
console.log(guests[1],"You are still invited");

guests.pop();
guests.pop();

console.log(guests);