const randomColor = require('randomcolor'); // import randomcolor library
const chalk = require('chalk'); // import chalk library

const color = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

console.log(
  chalk.hex(color)(
    `################################
################################
################################
#####                      #####
#####       ${color}        #####
#####                      #####
################################
################################
################################`,
  ),
);
