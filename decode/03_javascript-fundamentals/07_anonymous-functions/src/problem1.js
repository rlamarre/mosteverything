// fix all the errors
function c(g, h) { // g = function (6) {return 6 + 1}, h = function (x) {return x * 2}
    var x = g(6); // 7
    var y = h(8); //16
    return [x, y]; //[7,16]
}

function t() {
    return c(function (y) {return y + 1}, function (x) {return x * 2});
}

t();

module.exports = t;
