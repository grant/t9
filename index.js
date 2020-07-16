var product = require('cartesian-product');
var TrieSearch = require('trie-search');

// t9
var T9Search = function() {};
var numbers = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p','q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}

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
 * @param  {String} prefix The number. '228'
 * @return {String[]} A list of guessed words
 */
T9Search.prototype.predict = (prefix) => {
  // 1. Convert numbers to arrays of values
  var letters = prefix.split('').map(c => {
    return numbers[c];
  })
  var combos = product(letters);
  var predictions = combos.map(combo => combo.join(''))
    .map(prefix => this.trie.get(prefix, { min: 5 }))
    .filter(a => a.length)[0];
  return predictions.map(prediction => prediction.value);
};

module.exports = T9Search;
