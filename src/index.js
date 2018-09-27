module.exports = function getZerosCount(number) {
    let sum = 0;
    let value = 0;
    for (let i = 5; i <= number; i+=5) {
      value = i;
      while(value % 5 === 0) {
          sum++;
          value /= 5; 
      }
  }
  return sum;
}
