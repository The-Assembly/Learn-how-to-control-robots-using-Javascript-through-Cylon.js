/*
Don't forget to :

Install cylon-keyboard by entering
'npm install cylon-keyboard' in your command prompt

Then connnect your servos(S#) to the pins mentioned below
S1 => pin 3 on the arduino    	(Attached to the Pinky Finger)
S2 => pin 5 on the arduino		(Attached to the Ring Finger)
S3 => pin 6 on the arduino		(Attached to the Middle Finger)
S4 => pin 9 on the arduino		(Attached to the Index Finger)
S5 => pin 10 on the arduino		(Attached to the Thumb Finger)

*/

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
	servo2: { driver: 'servo', pin: 5, connection: "arduino" },
	servo3: { driver: 'servo', pin: 6, connection: "arduino" },
	servo4: { driver: 'servo', pin: 9, connection: "arduino" },
	servo5: { driver: 'servo', pin: 10, connection: "arduino" },
	
	keyboard: { driver: 'keyboard', connection: "keyboard" }
  },


  work: function(my) {
    var angle1 = 0 ;
	var angle2 = 0 ;
	var angle3 = 0 ;
	var angle4 = 0 ;
	var angle5 = 0 ;
	var angleALL = 0 ;
	
	my.servo1.angle(angle1);
	my.servo2.angle(angle2);
	my.servo3.angle(angle3);
	my.servo4.angle(angle4);
	my.servo5.angle(angle5);	
	console.log("Initiation Done!");
	console.log("---------------MENU---------------");
	console.log("Press a to move the Pinky Finger.");
	console.log("Press s to move the Ring Finger.");
	console.log("Press d to move the Middle Finger.");
	console.log("Press f to move the Pointer Finger.");
	console.log("Press g to move the Thumb Finger.");
	console.log("Press q to flex All Fingers.");
	console.log("Press z to relax All Fingers.");
	console.log("------------END OF MENU----------");
	
	
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
			
			my.keyboard.on("s", function() {
				console.log("Ring Moving");
			if (angle2 == 0){
				console.log('Inside the if cond1');
				angle2 = 180;
				my.servo2.angle(angle2);			
			} else if (angle2 ==180) {
				console.log('Inside the if cond2');
				angle2 = 0;
				my.servo2.angle(angle2);	
			}
			});
			
			my.keyboard.on("d", function() {
				console.log("Middle Moving");
			if (angle3 == 0){
				console.log('Inside the if cond1');
				angle3 = 180;
				my.servo3.angle(angle3);			
			} else if (angle3 ==180) {
				console.log('Inside the if cond2');
				angle3 = 0;
				my.servo3.angle(angle3);	
			}
			});
			
			my.keyboard.on("f", function() {
				console.log("Index Moving");
			if (angle4 == 0){
				console.log('Inside the if cond1');
				angle4 = 180;
				my.servo4.angle(angle4);			
			} else if (angle4 ==180) {
				console.log('Inside the if cond2');
				angle4 = 0;
				my.servo4.angle(angle4);	
			}
			});
			
			my.keyboard.on("g", function() {
				console.log("Thumb Moving");
			if (angle5 == 0){
				console.log('Inside the if cond1');
				angle5 = 180;
				my.servo5.angle(angle5);			
			} else if (angle5 ==180) {
				console.log('Inside the if cond2');
				angle5 = 0;
				my.servo5.angle(angle5);	
			}
			});
			
			my.keyboard.on("q", function() {	//FLEX ALL FINGERS
				console.log("All flex");
				angleALL = 180;
				my.servo1.angle(angleALL);
				my.servo2.angle(angleALL);
				my.servo3.angle(angleALL);
				my.servo4.angle(angleALL);
				my.servo5.angle(angleALL);
			});
			
			my.keyboard.on("z", function() {	//RELAX ALL FINGERS
				console.log("All relax");
				angleALL = 0;
				my.servo1.angle(angleALL);
				my.servo2.angle(angleALL);
				my.servo3.angle(angleALL);
				my.servo4.angle(angleALL);
				my.servo5.angle(angleALL);
			});
					
		
    }
}).start();