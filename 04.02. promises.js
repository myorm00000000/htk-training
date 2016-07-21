var a = true;
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (a) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});

promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});

var promise2 = new Promise(function(resolve, reject) {
  resolve(1);
});

promise2.then(function(val) {
  console.log(val); // 1
  return val + 2;
}).then(function(val) {
  console.log(val); // 3
});
