const ftoc = function(fahren) {
  let celsius = (fahren-32)*(5/9);
  return parseFloat(celsius.toFixed(1));
};

const ctof = function(celsius) {
  let fahren = celsius * (9/5) + 32;
  return parseFloat(fahren.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
