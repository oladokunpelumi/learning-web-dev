// function q1() {
//     var b = 5;
//     if(b>1) {
//         b = 3;
//     }
//     alert(b);
// }

// var b = 0;
// function q2() {
//     b = 5;
// }
// function q2b() {
//     alert(b);
// }

// function q3() {
//     window.b ="hello";
// }

// function q3b() {
//     alert(b);
// }

// var b = 1;
// function q4() {
//     var b = "test";
//     alert(b);
// }

// var b = 2;
// if (true) {
//     var b =5;
//     alert(b);
// }
// alert(b);

// function q2();
// function q2b();
 
// function moveCommand(direction) {
//      var code;
//    switch (direction) {
//         case "forward":
//             break;
//             code ="you have encountered a monster"
//         case "back":
//             code ="you are home"
//             break;
//         case "right":
//             code ="you found a boy"
//             break;
//         case "left":
//             break;
//             code ="you run into a lion"
//             break;
//         default:
//                 code = "please enter a valid direction"
//             break;
//     }
//     return code;
//  }

//  let k = "goat";
// const b = true;
// let c = 156;
// k = "test2";

// let person = {
//     firstName :"John",
//     lastName : "Doe",
//     age : 20,
//     eyeColor : "blue"
// };

// let {firstName,lastName} = person
// const{age,eyeColor} = person

// let e = 'test';
// let b = true;
// const c = 265;

// let okObj = {e,b,c};

// let firstName = "Pelumi";
// let city = 'Abuja';
// let message = `Hello ${firstName} have i met you before? I think we met in ${city} last summer no???`

// function isValidAge(age) {
//     return age;
// };
// function realAge(age =10) {
//     return age;
// }

// let sym = Symbol("This is my first Symbol");

// let username = "pelumi";
// let location = "abuja";
// function whereAmI(username,location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost";
//     }
// };

// const place = (username,location) =>username && location? "I am not lost" : "I am totally lost";

// const array = [
// {   username: "John",
//     team: "red",
//     score:5,
//     items:["ball","book","pen"]
// },
// {
//     username: "becky",
//     team: "blue",
//     score:10,
//     items:["tape","backpack","pen"]
// },
// {
//     username: "susy",
//     team: "red",
//     score:55,
//     items:["ball","eraser","pen"]
// },
// {
//     username: "tyson",
//     team: "green",
//     score:1,
//     items:["book","pen"]
// },
// ];

// 1
// const double = [];
// array.forEach(user => {
//     let {username} = user;
//     username = username + "!"
//     double.push(username);
// });

// 2
// const mapArray =array.map(user => {
//     let {username} = user
//     return `${username}!`
// });

// 3
// const filterArray = array.filter( user=>{
//     return user.team === "red";
// })
// 4
// const totalScore = array.reduce((acc,user) =>{
//     return acc + user.score
// },0);

// 5
// const arrayNum = [1,2,4,5,8,9];
// const newArray = arrayNum.map((num,i) =>{
//     return num * 2
// });

// let myFunction = (x,y) => x+y;
// const addTo = (x) => (y) => x + y;
// let addToTen = addTo(10);
// addToTen(3);

// const sum = (a,b) => a + b;
// const curriedSum = (a) => (b) => a + b;
// curriedSum(30)(2) 

// const sum = (a,b) => a + b;
// const curriedSum = (a) => (b) => a + b;
// const addd5 = curriedSum(5)
// addd5(12);

// const compose = (f,g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const addd5 = (num) => num + 5;
// compose(add1,addd5)(10);

// [2] ===[2]

// const obj1 = {a:5};
// const obj2 = obj1;
// const obj3 = obj2;
// const obj4 = {a:5}
// obj1.a = 4;

// class Animal{
//     constructor(name,type,color){
//         this.name = name;
//         this.color = color;
//         this.type = type;
//     }
// }
// class Mammal extends Animal{
//      constructor(name,type,color){
//          super(name,type,color);
//      };
//     sound(){
//         console.log(`Mooo I\'m ${this.name} and I\'m a ${color} ${type}`);
//     }
// };
// const cow = new Mammal("Shelly","cow","red");

// const dragons = ["Tim","Johnathan","Sandy","Sarah"]
// dragons.filter(name => name.includes("John"));

// const power = (a) => a**100;

// const startLine = '     ';
// let pig = '🐷';
// let cat = '🐱'
// let spacedPig = pig.padStart(8);
// let spacedCat = cat.padStart(8);

// let trimmed = pig.trim().padEnd(9,"=");

// let obj = {
//     my:"name",
//     is:"rudolf",
//     the:"raindeer"
// }
// Object.entries(obj).flat().join(" ");

const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const newArray = array.flat(2);

const greeting = [["Hello",'young','grasshopper!'],['you','are'],['learning','fast']]
const newGreeting = greeting.flat()
const stringGreeting = newGreeting.join('');