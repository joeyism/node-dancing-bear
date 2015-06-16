var bears = require('./lib/bear');
var animation = require('ascii-animation');
var clear = '\033[2J'; 

var dancingBear = function(condition){
    animation.animate(bears, condition);
}

module.exports = dancingBear;
