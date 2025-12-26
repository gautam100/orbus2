function myPromise(){
return new Promise(function(resolve,reject){

	let flag = Math.random()>0.5
	if(flag){
		resolve("Promise is successful")
	}else{
		reject("Promise is unsuccessful!")
	}

})

}

myPromise().then(function(data){
	console.log(data)
}).catch(function(error){
	console.log(error)
})