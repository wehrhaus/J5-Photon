# J5-Photon
Particle.io Photon module running Johnny-Five.

## SETUP
* Follow the Particle.io Photon [Getting Started](https://docs.particle.io/guide/getting-started/start/photon/) instructions.
* Open the Particle.io [Editor](https://build.particle.io/build) to get your **Device ID** (*Devices*) and **Access Token** (*Settings*)
  * See the [Particle.io Photon Reference](https://docs.particle.io/reference/firmware/photon/) for details on ways to do this via the command line.
* Run `npm install` and follow the preinstall configuration instructions.
* Run `particle cloud login`
* Run `npm run voodoo_install`
* Run `npm run voodoo_flash`

Everything is now ready to go. To test run `node src/examples/blinkLed`

## References
* [Johnny-Five API](http://johnny-five.io/api/)
* [ParticleIO Photon Plugin for Johnny-Five](https://github.com/rwaldron/particle-io)
* [VoodooSpark Firmware](https://github.com/voodootikigod/voodoospark)

## DEV NOTES
### Adding color to sh files
Color can be adding to any output text via `$(tput setaf #)` where `#` is a **VALUE** from the table below. To reset color use `$(tput sgr0)`.

***Example:*** `echo $(tput setaf 1)ERROR$(tput sgr0)`. Will output **ERROR** in red.
```
** Basic tput setaf color table:
Color       #define       Value       RGB
black     COLOR_BLACK       0     0, 0, 0
red       COLOR_RED         1     max,0,0
green     COLOR_GREEN       2     0,max,0
yellow    COLOR_YELLOW      3     max,max,0
blue      COLOR_BLUE        4     0,0,max
magenta   COLOR_MAGENTA     5     max,0,max
cyan      COLOR_CYAN        6     0,max,max
white     COLOR_WHITE       7     max,max,max

```
