var Cylon = require('cylon');

Cylon.robot({
  connections: {
    arduino_A: { adaptor: 'firmata', port: '/dev/ttyACM0' },
    arduino_B: { adaptor: 'firmata', port: '/dev/ttyACM2' },
    //arduino_C: { adaptor: 'firmata', port: '/dev/ttyACM3'}
  },

  devices: {
  	button1: { driver: 'button', pin: 2, connection: "arduino_A"},
    led1: { driver: 'led', pin: 13, connection: "arduino_A" },
    led2: { driver: 'led', pin: 13, connection: "arduino_B" },
    //led3: { driver: 'led', pin: 13, connection: "arduino_C" }
  },

  work: function(my) {
  	/**
    every((1).second(), function() {
      my.led1.toggle();
      my.led2.toggle();
      my.led3.toggle();
    });
  }**/

  my.button1.on('push', function(){
  	my.led2.toggle();
  	console.log('button pushed');
  });

}

}).start();