var T9Search = require('.');
var words = ['cat', 'bot', 'catapult', 'foo'];
var t9 = new T9Search();
t9.setWords(words);

var prediction = t9.predict('22');
console.log(prediction); // ['cat', 'catapult']
