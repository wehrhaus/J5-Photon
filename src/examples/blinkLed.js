const appRoot = require('app-root-path');
require(appRoot + '/src/utils/particleEnv');

const five = require('johnny-five');
const Particle = require('particle-io');

const board = new five.Board({
    io: new Particle({
        token: process.env.PARTICLE_ACCESS_TOKEN,
        deviceId: process.env.PARTICLE_DEVICE_ID
    })
});

const led_blink = () => {
    const led = new five.Led('D7');
    led.strobe(500);
};

board.on('ready', led_blink);
