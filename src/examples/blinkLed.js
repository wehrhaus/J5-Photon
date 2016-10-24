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

let led = {};

const led_control = (type) => {
    console.log(type);
    led.stop();

    const controls = {
        'on': () => {
            led.on();
        },
        'blink': () => {
            led.strobe(500);
        },
        'off': () => {
            led.off();
            led.stop();
        }
    };

    return (controls[type] || controls['off'])();

};

const handleKeypress = (ch, key) => {
    if (!key) return;
    switch (key.name) {
        case 'up':
            led_control('on');
            break;
        case 'down':
            led_control('off');
            break;
        case 'left':
            led_control('blink');
            break;
        default:
            led_control('off');
    }

};

const board_ready = () => {
    console.log('Device Ready...');

    led = new five.Led('D7');

    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.setRawMode(true);

    process.stdin.on('keypress', handleKeypress);
};

board.on('ready', board_ready);
