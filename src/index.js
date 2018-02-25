module.exports = function getZerosCount(number, base) {
  var result = 0;
  var mas = [];
  var isPrime;
  var count = 0;
  (base == 2) ? isPrime = true : false;
	
  for (var i = 2; i < base; i++) {
    if (base % i == 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
      count++;
    }
  }

  if (isPrime) {
    for (let i = base; i <= number; i*=base) {
      result +=  Math.floor(number/i);   
    }
  } else {
    var b = base;
    var baseMap = {};
    for (let i = 2; i <= base/2; i++) {
      while (b%i == 0) {
        mas.push(i);
        b = b/i;
        baseMap[i] = mas.length;
      }
      mas = [];
      if (b === 1) {
        break;
      } 
    }

    var res = 0;
    var arr = [];
    for (const key in baseMap) {
      for (let i = key; i <= number; i*=key) {
        res +=  Math.floor(number/i);   
      }
      arr.push(Math.floor(res/baseMap[key]));
      res = 0;
    } 

    result = Math.min.apply(null, arr);  
  }

  return result;

  // while(number > 0){
	// 	mas.push(number%base);
  //   number = Math.floor(number/base);
	// }
  // console.log(mas.reverse());
  
  // var numInBase = parseInt(mas.reverse().join(''));
  // console.log(numInBase);
};