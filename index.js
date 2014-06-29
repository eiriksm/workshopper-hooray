var util = require('util');
var figlet = require('figlet');
require('colors');

// A list of first words to be used in the greeting
var word1 = [
  'very',
  'super',
  'shiny',
  'such',
  'much',
  'extra',
  'mega'
];

// ...and some second words.
var word2 = [
  'awesome',
  'impressive',
  'node',
  'profit',
  'win',
  'wow'
];

module.exports = function(text, cb) {
  var callback = function(err, data) {
    // Defaults to writing the message to the console. In green.
    console.log(data.green);
    // Just a blank line.
    console.log("\n");
    // And the line that used to be the "hooray" message.
    console.log('You\'ve finished all the challenges! Hooray!\n');
    if (cb) {
      cb(err, data);
    }
  };
  // Support callback as only parameter.
  if (typeof(text) === 'function') {
    cb = text;
    text = undefined;
  }
  if (!text) {
    text = util.format('%s \n %s',
                         word1[Math.floor(Math.random() * word1.length)],
                         word2[Math.floor(Math.random() * word2.length)]);
  }

  figlet.text(text, {
    font: 'ANSI Shadow',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  }, callback);
};
