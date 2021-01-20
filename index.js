const randomColor = require('randomcolor'); // import the script
const chalk = require('chalk'); // import chalk
const log = console.log;

if (process.argv.length > 4) {
  const color = randomColor({
    luminosity: process.argv[3],
    hue: process.argv[2],
  });
}
if (process.argv.length === 4) {
  const color = randomColor({
    luminosity: process.argv[3],
    hue: process.argv[2],
  }); // Returns a hex code for a color represented with parameters of luminosity and hue
  console.log(color); // Logs the colors' hex code to console
}

if (process.argv.length === 3) {
  const color = randomColor({
    hue: process.argv[2],
  }); // Returns a hex code for a color represented with parameter of  hue
  console.log(color); // Logs the colors' hex code to console
}

if (process.argv.length === 2) {
  const color = randomColor(); // Returns a hex code for a random color
  console.log(color); // Logs the colors' hex code to console
}

console.log(chalk.hex(color)('################################'));
console.log(chalk.hex(color)('################################'));
console.log(chalk.hex(color)('################################'));
console.log(chalk.hex(color)('################################'));
console.log(chalk.hex(color)('#####                      #####'));
console.log(chalk.hex(color)('#####       ' + color + '        #####'));
console.log(chalk.hex(color)('#####                      #####'));
console.log(chalk.hex(color)('################################'));
console.log(chalk.hex(color)('################################'));
console.log(chalk.hex(color)('################################'));

//console.log(chalk.blue('Hello world!'));
