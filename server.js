var Flint = require('node-flint');

// define flint setup
var config = {
  // url to access this app's webservice
  baseUrl: 'https://linkbot-mchack.c9users.io',
  // port that local server listens on
  localPort: process.env.PORT,
  // spark account email
  sparkEmail: 'chack@sbcglobal.net',
  clientID : 'C92d6666138445300a8b0c62f71fd99c4fba0f02b22ef7f6df46f250c5cceedab',
  clientSecret: 'e4974399f40138c1b5c7325eb6c384cd2e5d014ac6f19af58f95aae2b803d3dc',
  username: 'chack@sbcglobal.net',
  password: '',
  redirectURL: 'https://example.com'
  // spark api token
  //sparkToken: 'YjJkNWQzMWQtMjdmZC00OTNmLWJiNzEtN2FiMGE0MGM3MTVkNTU3NzVmODktMjNl'
};

// init flint framework

var flint = new Flint(config);

// echo test
flint.hears('/echo', function(bot, trigger) {
  bot.say(trigger.args.join(' '));
});

// add a person or people to room by email
flint.hears('/add', function(bot, trigger) {
  var email = trigger.args;
  if(email) bot.add(email);
});

// remove a person or people from room by email
flint.hears('/remove', function(bot, trigger) {
  var email = trigger.args;
  if(email) bot.remove(email);
});

// anytime someone says beer
flint.hears(/(^| )beer( |.|$)/i, function(bot, trigger) {
  bot.say('Enjoy a beer, %s!', trigger.person.displayName);
});

// help - list available commands
flint.hears('/help', function(bot, trigger) {
  bot.say('/help\n/describe\n/links\n');
});

// help - list available commands
flint.hears('/links', function(bot, trigger) {
  bot.say('https://www.google.com');
});

// describe - what do I do
flint.hears('/describe', function(bot, trigger) {
  bot.say('I am here to save and retrieve persistent content in the form of links.\n' + 
          'Content will always be accessible and you can use this to share whatever');
});