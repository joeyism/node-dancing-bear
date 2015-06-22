var bears = require('./lib/bear');
var animation = require('ascii-animation');
var clear = '\033[2J'; 

var dancingBear = function(condition, callback){
    animation.animate(bears, condition, callback).bold();
}

module.exports = dancingBear;
