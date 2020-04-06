exports.rectange= (x, y)=>{
    return x * y
}

exports.triangle = (b,h) => b * h * 1/2

// closure
exports.add = function () {
    var counter = 0;
    return function () {counter += 1; return counter}
  }();
