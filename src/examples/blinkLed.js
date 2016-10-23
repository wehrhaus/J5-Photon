const appRoot = require('app-root-path');
require(appRoot + '/src/utils/particleEnv');

const five = require('johnny-five');
const Particle = require('particle-io');

let led = {};

const board = new five.Board({
    io: new Particle({
        token: process.env.PARTICLE_ACCESS_TOKEN,
        deviceId: process.env.PARTICLE_DEVICE_ID
    })
});

const led_blink = () => {
    led.off();
    led.strobe(500);
};

const led_on = () => {
    led.on();
};

const led_off = () => {
    led.stop();
    led.off();
};

const board_ready = () => {
    console.log('Device Ready...');

    led = new five.Led('D7');

    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.setRawMode(true);

    process.stdin.on('keypress', function(ch, key) {
        if (!key) return;
        switch (key.name) {
            case 'up':
                console.log('up');
                led_on();
                break;
            case 'down':
                console.log('down');
                led_off();
                break;
            case 'left':
                console.log('left');
                led_blink();
                break;
            default:
                console.log('default');
                led_off();
        }

    });
};

board.on('ready', board_ready);
