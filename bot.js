require('dotenv').load();
var cron = require('cron')
var TwitterBot = require("node-twitterbot").TwitterBot;

var t = new TwitterBot({
  consumer_key:          process.env.DBCG_TWIT_CONSUMER_KEY,
  consumer_secret:       process.env.DBCG_TWIT_CONSUMER_SECRET,
  access_token:          process.env.DBCG_TWIT_ACCESS_TOKEN,
  access_token_secret:   process.env.DBCG_TWIT_ACCESS_TOKEN_SECRET
});

var cronJob1 = cron.job("00 59 14 * * 1-5", function(){
  	t.tweet("GONNNNNGGGG - Morning stand up after 1 minute!");
}); 
var cronJob2 = cron.job("00 00 15 * * 1-5", function(){
  	t.tweet("GONNNNNGGGG - Morning stand up!");
}); 
var cronJob3 = cron.job("00 30 18 * * 1-5", function(){
  	t.tweet("GONNNNNGGGG - Lunch Time!");
}); 

var cronJob4 = cron.job("00 59 19 * * 1-5", function(){
  	t.tweet("GONNNNNGGGG - After lunch stand up after 1 minute!");
}); 
var cronJob5 = cron.job("00 00 20 * * 1-5", function(){
  	t.tweet("GONNNNNGGGG - After lunch stand up!");
}); 
var cronJob6 = cron.job("00 00 02 * * 1-5", function(){
  	t.tweet("GONNNNNGGGG - End of core hours!");
}); 

var cronJob7 = cron.job("00 00 02 * * SAT", function(){
  	t.tweet("GONNNNNGGGG - End of core hours!");
}); 

cronJob1.start();
cronJob2.start();
cronJob3.start();
cronJob4.start();
cronJob5.start();
cronJob6.start();
cronJob7.start();
