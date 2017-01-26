//Required packages
//Set environment variables
require('dotenv').config();
//Work with Twitter API
var Twit = require('twit');
//Twitter API config settings
var tweet = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

//English alphabet to choose from
var alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

var letter1 = alphabet[getRandomInt(0, alphabet.length)];
var letter2 = alphabet[getRandomInt(0, alphabet.length)];
var letter3 = alphabet[getRandomInt(0, alphabet.length)];
var letter4 = alphabet[getRandomInt(0, alphabet.length)];

tweet.post('statuses/update', { status: `${letter1}${letter2}${letter3}${letter4}` }, function(err, data, response) {
  console.log(data);
});
