// Filtering the Prime Numbers 
// Given a array of Numbers filter out prime numbers.
// Input: [2,3,4,5,6,7,8,9,10]
// Output: [2,3,5,7]


function primeNumber(value){
  if(value <=0 ){
    return false;
  }
  if (value == 1){
    return false;
  }
  if (value == 2 || value == 3){
    return true;
  }
  // Optimization for avoiding loop large Number 
  // Eg: Given number if 100000 => we can find immediately because for a given range of numbers 'N' -> there can be N/2 even numbers, N/3 values divided by 3 (almost -> 50% to 33% improvment of code can be done with this section of code )

  if (value % 2 == 0 || value % 3 == 0){
    return false;
  }

  for(let divisor = 2; divisor <= (value**(1/2)); divisor++ ){
    if((value % divisor) == 0){
      return false;
    }
  }
  return true;
}

function filterPrimeNumber(arr){
  var output = arr.filter(x => primeNumber(x) === true);
  return output;
}

var input = [2,3,4,5,6,7,8,9,10];
console.log(filterPrimeNumber(input))