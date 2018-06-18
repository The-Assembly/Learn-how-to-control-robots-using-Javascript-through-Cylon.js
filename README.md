**Aim:** Controlling Servo Motors connected to Arduino using CylonJS

**Commands to execute**

npm install cylon

npm install cylon cylon-keyboard

CylonJS is a JavaScript library that allows you to abstract sensors and actuators and many other low-level hardware functions, mainly targeted towards robotics.

**What is NodeJS**

Node.js is a lean, fast, cross-platform JavaScript runtime environment that is useful for both servers and desktop applications.

It can do the following things:

- js can generate dynamic page content
- js can create, open, read, write, delete, and close files on the server
- js can collect form data
- js can add, delete, modify data in your database

**What is CylonJS?**

It&#39;s a JavaScript library that allows you to abstract sensors and actuators and many other low-level hardware functions, mainly targeted towards robotics.

**Software Required**

- Arduino IDE
- CylonJS Framework
- CylonJS Keyboard Driver
- Visual Stduio Code

**Terminal Commands**

// Installing CylonJS library with I2C drivers
$ npm install cylon
$ npm install cylon-firmata cylon-gpio cylon-i2c
// To use Cylon.js with the keyboard
$npm install cylon cylon-keyboard

**Servo Motor**

The servo circuitry is built right inside the motor unit and has a positionable shaft, which usually is fitted with a gear. The motor is controlled with an electric signal which determines the amount of movement of the shaft.

**Uploading CylonJS to Arduino**

- Select File &gt; Examples &gt; Firmata &gt; StandardFirmata
- Now compile and upload this to Arduino

![serv_connections](https://user-images.githubusercontent.com/32713072/41531406-48227190-7304-11e8-9f69-a150eaefafe2.jpg)


**Code:**

**Defining Devices**

_connections: {
        arduino: { adaptor: &#39;firmata&#39;, port: &#39;COM3&#39; },
    keyboard: { adaptor: &#39;keyboard&#39; }
  },

devices: {
   servo1: { driver: &#39;servo&#39;, pin: 3, connection: &quot;arduino&quot; },
    keyboard: { driver: &#39;keyboard&#39;, connection: &quot;keyboard&quot; }
},_

**Rotating servo on keyboard Commands**

_work: function(my) {
        var angle1 = 0 ;    my.servo1.angle(angle1);
    my.keyboard.on(&quot;a&quot;, function() {

          if (angle1 == 0){
                angle1 = 180;
                my.servo1.angle(angle1);
          }  if (angle1 ==180) {
                angle1 = 0;
                my.servo1.angle(angle1);
              }
 });
}_

**Github**

[https://github.com/The-Assembly/Cylonjs-Hand](https://github.com/The-Assembly/Cylonjs-Hand)
