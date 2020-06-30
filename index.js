function sayHello() {
    console.log("Hello");
}

sayHello();

var sayBye = function() {
    console.log("BYE");
}

sayBye();
 
// function checkDriverAge() {
//     var age=prompt("what is your age?");
// if (Number(age)<18) {
//     alert("Sorry you are too young to drive. Powering off!");
// } else if (Number(age)===18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride");
// } else if (Number(age)>18) {
//     alert("Powering On. Enjoy the ride!");
// }
// }

// checkDriverAge();

// var checkDriverAge2 = function (age) {
//     var age=console.log("what is your age?");
// if (Number(age)<18) {
//     alert("Sorry you are too young to drive. Powering off!");
// } else if (Number(age)===18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride");
// } else if (Number(age)>18) {
//     alert("Powering On. Enjoy the ride!");
// }
// } checkDriverAge2(92);


function multiply(a,b) {
    return a * b;
}

multiply(5,10);

var array = ["Banana", "Apples", "Oranges", "Blueberries"];

var user = {
    name: "Pelumi",
    sex: "Male",
    hobby: "Basketball",
    skills: ["Programming" ,"Graphics Designer"],
    laugh: function () {
        console.log("HAHAHAHAHAHAH")
        
    }
};

var list = [
    {
        username: "sameez",
        password: "osib",
    },
    {
        username: "opeyemi",
        password: "boluwatife"
    }
];

var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];
// var todosLength = todos.length;
//  for (let i = 0; i < todosLength; i++) {
//      console.log (todos[i]);
// }

function logTodos(todo,i) {
    console.log(todo,i);
    
}

todos.forEach(logTodos);

// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne--;
// };

// var counterTwo = 10;
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 10);



