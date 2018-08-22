function doSomething() {
  var myVar = 1;
  if (true) {
    var myVar = 2;
    console.log(myVar);
  }
  console.log(myVar);
}

doSomething();