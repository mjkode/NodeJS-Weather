var chalk = require('chalk');
request = require('request');
const argv = require('yargs').argv;

let apiKey = 'c25869b627a377820d17d1951f65d259';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${chalk.green.bold(weather.main.temp)} degrees in ${chalk.bold.blue(weather.name)}!`;
    console.log(message);
  }
});

