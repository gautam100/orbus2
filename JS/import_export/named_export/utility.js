export const fact = (num) => {
  let res = 1
  for (let i = 1; i <= num; i++) {
    res = res * i
  }
  return res
}

export const chkPrimeNum = (num) => {
    let isPrime = true
    for(let i=2; i<num; i++){
        if(num%i === 0){
            isPrime = false
            break;
        }
    }
    return isPrime 
}
