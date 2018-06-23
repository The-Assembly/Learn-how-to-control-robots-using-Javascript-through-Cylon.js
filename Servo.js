var Cylon = require('cylon');

Cylon.robot({
  // change the port below to match whatever your Arduino is actually plugged into
  connections: {
    arduino: { adaptor: 'firmata', port: 'COM11' }
  },

  devices: {
 	servo: { driver: 'servo', pin: 3 }
  },

  work: function(my) {
    var angle = 0 ;
    my.servo.angle(angle);
    every910.second(),function() {
	    angle = angle + 180;
	    if(angle > 180){
		    angle = 0
	    }
	    my.servo.angle(angle);	
	});		
    }
}).start();
