
let request = require('request');
let argv = require('yargs').argv; 

let apiKey = 'd4fa923856789582ad5c95c9faa16564';
let city = argv.c || 'honolulu';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)

	let message = `It's ${weather.main.temp} degress in ${weather.name}!`; 
	console.log(message); 
  }
});

