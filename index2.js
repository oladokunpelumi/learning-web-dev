var database = [
    {
        username: "sameez",
        password: "osib",
    },
    {
        username: "opeyemi",
        password: "boluwatife"
    },
    {
        username: "phillip",
        password: "hustle"
    }
];

var newsFeed = [
    {
        username: "david",
        timeline: "Phew. What a day!",
    },
    {
        username: "suzan",
        password: "Its my birthday!! 19:19"
    }
];

function isUserValid(username,password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username ===  username &&
            database[i].password === password) {
                return true;
        }
    }
    return false;
}

function signIn(user,pass) {
    if (isUserValid(user,pass)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password");
    }
    
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt,passwordPrompt);



const newLocal = Symbol("This is my first Symbol");
