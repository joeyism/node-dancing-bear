var bears = require('./lib/bear');
var sleep = require('sleep');
var clear = '\033[2J'; 

var dancingBear = function(elapsed){
    while(elapsed){
        bears.forEach(function(bear){
            console.log(clear);
            console.log(bear);
            sleep.usleep(200000);
        });
    }
}

module.exports = dancingBear;
