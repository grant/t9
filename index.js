var TrieSearch = require('trie-search');

// t9
var T9Search = function() {};

/**
 * Sets an array of words to the dictionary.
 * @param {String[]} words An array of words.
 */
T9Search.prototype.setWords = (words) => {
  this.trie = new TrieSearch();
  var wordObject = {};
  words.map((word) => {
    wordObject[word] = word;
  });
  this.trie.addFromObject(wordObject);
};

/**
 * A prefix to the predicted word
 * @param  {String} prefix The string prefix
 * @return {String[]} A list of guessed words
 */
T9Search.prototype.predict = (prefix) => {
  var predictions = this.trie.get(prefix, {
    min: 5
  });
  return predictions.map(prediction => prediction.value);
};

module.exports = T9Search;
