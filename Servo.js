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

		while(1){
			console.log('Inside the While Loop');
			if (angle == 0){
				console.log('Inside the if cond1');
				angle = 180;
				my.servo.angle(angle);			
			} else if (angle ==180) {
				console.log('Inside the if cond2');
				angle = 0;
				my.servo.angle(angle);	
			}		
		}
    }
}).start();
