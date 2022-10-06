var current_user = ["ahmed","shan","jabbar","asif","raiz"]
var new_user = ["ahmed","asif","nawaz","asim","adnan"]

var single_user = current_user.filter((data)=>new_user.includes(data));

console.log(single_user,"These user name is already used")

var current_user1 = ["ahmed","shan","jabbar","asif","raiz"]
var new_user1 = ["kamran","zohaib","nawaz","asim","adnan"]

var single_user1 = current_user1.filter((data)=>new_user1.includes(data));

console.log(single_user1,"The name is aviable")

// For case sensitive
var current_user = ["ahmed","AHMED","shan","jabbar","asif","raiz"]
var new_user = ["AHMED","asif","nawaz","asim","adnan"]

var single_user = current_user.filter((data)=>new_user.includes(data));

console.log(single_user,"These user name is already used")