workshopper-hooray
==================
[![Build Status](https://travis-ci.org/eiriksm/workshopper-hooray.svg?branch=master)](https://travis-ci.org/eiriksm/workshopper-hooray)
[![Coverage Status](http://img.shields.io/coveralls/eiriksm/workshopper-hooray.svg)](https://coveralls.io/r/eiriksm/workshopper-hooray?branch=master)
[![Code Climate](http://img.shields.io/codeclimate/github/eiriksm/workshopper-hooray.svg)](https://codeclimate.com/github/eiriksm/workshopper-hooray)
[![Dependency Status](https://david-dm.org/eiriksm/workshopper-hooray.svg?theme=shields.io)](https://david-dm.org/eiriksm/workshopper-hooray)

A more excessive and celebratory hooray message for workshopper modules.

It shows some random big letters of celebrations with an ascii art style.

## Installation
`npm install --save workshopper-hooray`

`workshopper-hooray` requires `workshopper` >=1.2.0

## Usage
This module is to be used as a celebratory message for completing all challenges
in a workshoppper-workshop.

Example usage:

```js
var workshopper = require('workshopper');
var path = require('path');
var hooray = require('workshopper-hooray');

function fpath (f) {
  return path.join(__dirname, f)
}

workshopper({
  name : 'example',
  title : 'Example workshop',
  subtitle : 'Learn how do a lot of awesome stuff',
  appDir : __dirname,
  menuItems   : [],
  exerciseDir : fpath('./exercises/'),
  helpFile    : fpath('help.txt'),
  onComplete: hooray
})
```
