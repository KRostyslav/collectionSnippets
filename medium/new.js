// Option 1 — Object Literal Notation
let user1 = {
  name: "Taylor",
  points: 5,
  increment: function() {
    user1.points++;
  }
};

// Option 2 — Object.create()
let user2 = Object.create(null);
user2.name = "Cam";
user2.points = 8;
user2.increment = function() {
  user2.points++;
}

// Solution 1 — Generate objects using a function
function createUser(name, points) {
  let newUser = {};
  newUser.name = name;
  newUser.points = points;
  newUser.increment = function() {
    newUser.points++;
  };
  return newUser;
}

let user3 = createUser("Bob", 5);
user3.increment();

// Solution 2 — Use the prototypal nature of JavaScript

function createUser(name, points) {
  let newUser = Object.create(userFunction);
  newUser.name = name;
  newUser.points = points;
  return newUser;
}

let userFunction = {
  increment: function() {this.points++;}
  login: function() {console.log("Please login.")};
}

let user1 = createUser("Bob", 5);
user1.increment();

// Solution 3 — new and this keywords

function User(name, points) {
 this.name = name; 
 this.points = points;
}
User.prototype.increment = function(){
 this.points++;
}
User.prototype.login = function() {
 console.log("Please login.")
}
let user1 = new User("Dylan", 6);
user1.increment();

// Solution 4 — ES6 ‘syntactic sugar’

class User {
  constructor(name, points) {
    this.name = name;
    this.points = points;
  }
  increment () {
    this.points++;
  }
  login () {
    console.log("Please login.")
  }
}
let user1 = new User("John", 12);
user1.increment();