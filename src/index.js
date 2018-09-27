module.exports = function getZerosCount(number) {
    let sum = 0;
    let value = 5;
//     for (let i = 5; i <= number; i+=5) {
//       value = i;
//       while(value % 5 === 0) {
//           sum++;
//           value /= 5; 
//       }
//   }
    let counterPow = 1;
    while(value < number) {
         value *= counterPow;
         counterPow++;
    }
    value = 5;
    for (let i = 1; i < counterPow; i++) {
        sum += Math.floor(number / Math.pow(value, i));
    }
  return sum;
}
