module.exports = function getZerosCount(number) {
  var zero = 0;
  for (var i = 5; i <= number; i += 5){
    var value = i;
    while (value % 5 === 0){
      zero += 1;
      value = value / 5;
    }
  }
  return zero;
}
