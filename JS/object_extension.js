    const obj = {
        "customer_name": "Rohit",
        "account_num": "0987654321"
    };
    
    Object.defineProperty(obj, 'atm_pin', {
      value: '1234',
      enumerable: false, // Not enumerable
      writable:false
    });

    console.log(Object.keys(obj))

    obj.isPPFAcc = true 

    console.log(Object.keys(obj))

    console.log("ATM PIN:",obj.atm_pin) //1234
    obj.atm_pin = "0987"
    console.log("New ATM PIN:",obj.atm_pin) //??

    