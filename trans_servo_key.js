"use strict";
var Cylon = require('cylon'); 

Cylon.robot({
  // change the port below to match whatever your Arduino is actually plugged into
  connections: {
    arduino: { adaptor: 'firmata', port: 'COM11' },  //Change 'COM11' to whatever COM you're using.
	keyboard: { adaptor: 'keyboard' }
  },
  
  devices: {
 	servo1: { driver: 'servo', pin: 3, connection: "arduino" },
	
	keyboard: { driver: 'keyboard', connection: "keyboard" }
  },


  work: function(my) {
    var angle1 = 0 ;
	
	my.servo1.angle(angle1);
	console.log("Initiation Done!");
	console.log("---------------MENU---------------");
	console.log("Press 'a' to move the Pinky Finger");
	console.log("------------END OF MENU-----------");
	
	
			my.keyboard.on("a", function() {
				console.log("Pinky Moving");
			if (angle1 == 0){
				console.log('Inside the if cond1');
				angle1 = 180;
				my.servo1.angle(angle1);			
			} else if (angle1 ==180) {
				console.log('Inside the if cond2');
				angle1 = 0;
				my.servo1.angle(angle1);	
			}
			});					
		
    }
}).start();