/*
1) Promise.all()
 - If any promise fails, .catch()is triggered and all result is discarded
2) Promise.allSettled()
 - wait for all promises to complete
3) Promise.any()
4) Promise.race()
*/


/*
const p1 = Promise.reject("Task 1");
const p2 = Promise.reject("Task 2");
const p3 = Promise.reject("Task 3");

Promise.all([p1, p2, p3]).then((result) => {
	console.log("Resolve Block:", result)
}).catch((error) => {
	console.log("Reject Block:", error)
});

Promise.allSettled([p1,p2,p3]).then((result) =>{
	console.log(result);
}).catch((error) =>{
	console.log(error);
});


Promise.any([p1,p2,p3])
.then((result) =>{
	console.log(result)
}).catch((error) =>{
	console.log(error)
});

*/
const api1 = new Promise(function (response) {
  setTimeout(function () {
    response("api1 wins");
  }, 3000);
});

const api2 = new Promise(function (response) {
  setTimeout(function () {
    response("api2 wins");
  }, 4000);
});

Promise.race([api1, api2])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
