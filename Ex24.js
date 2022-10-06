var boy ="Good boy";
console.log("Is boy== Good boy ? I Predict True");
console.log(boy == "Good boy");

var ability ="He is good at cooking";
console.log("Is ability==He is good at cooking? I pridect False ");
console.log(ability=="He is good at coding");

var bill_gate = "Rich";
console.log("Is bill_gate !=Rich? I pridect False");
console.log(bill_gate!="Rich");

var asim = "Good composer";
console.log("Is asim!=Bad composer? I pridect True");
console.log(asim != "Bad composer");

var fruite = "apple";
console.log("Is fruite==APPLE? I pridect False");
console.log(fruite=="APPLE");

var fruite1 = "orange";
console.log("Is fruite1==orange? I pridect True");
console.log(fruite1=="orange");

var num1 = 25;
console.log("Is num1 ==20? I pridect False");
console.log(num1==20);

var num2 = 56;
console.log("Is num2==56? I pridect True");
console.log(num2 == 56);

var num3 = 5;
console.log("Is num3==56? I pridect True");
console.log(num3 != 56);

var num4 = 23;
console.log("Is num4!=23? I pridect False");
console.log(num4 != 23);

var num5 = 8;
console.log("Is num5>=5? I pridect True");
console.log(num5 > 5);

var num6 = 4;
console.log("Is num6>=6? I pridect False");
console.log(num6 > 6);

var num7 = 4;
console.log("Is num7<5? I pridect True");
console.log(num7 < 5);

var num8 = 6;
console.log("Is num8<3? I pridect False");
console.log(num2 < 3);

var num9 = 45;
console.log("Is num9>=46? I pridect False");
console.log(num9 >= 46);

var num10 = 23;
console.log("Is num10>=22? I pridect True");
console.log(num10 >= 22);

var num11 = 10;
console.log("Is num11<=10? I pridect True");
console.log(num11 <= 10);

var num12 = 13;
console.log("Is num12<=10? I pridect False");



var a = 4;
var b = 3;
var c = a>b && b<a ;
console.log("Is c=true? i pridect True");
console.log(c);

var d=8;
var e=10;
var f = d>e && d<e;
console.log("Is f=True? i pridect False");
console.log(f);

var g=13;
var h= 45;
var p=  g <h|| h< g;
console.log("Is p= True? I pridect True");
console.log(p);

var s = h < g || g>h;
console.log("Is s = True? i predict False")
console.log(s);

// To check whether an item is in array or not
var ages = [23,24,35,67,56,43,55,32]
console.log(ages.includes(55));

// To check whether an item is not in array
console.log(ages.includes(20));