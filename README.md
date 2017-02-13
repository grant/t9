# T9 Predictive Search • [t9](npmjs.com/t9)

T9, which stands for Text on 9 keys, is a predictive text technology for mobile phones (specifically those that contain a 3x4 numeric keypad), originally developed by Tegic Communications, now part of Nuance Communications.

![image](https://cloud.githubusercontent.com/assets/744973/22902804/2e864798-f1eb-11e6-9470-14bbab9f40c9.png)

## Install

```sh
yarn add t9
```

## Usage

```js
var T9Search = require('t9');
var words = ['cat', 'bot', 'catapult', 'foo'];
var t9 = new T9Search();
t9.setWords(words);

var prediction = t9.predict('c');
console.log(prediction); // ['cat', 'catapult']
```

## Tip

Include the english dictionary:
```js
var words = require('an-array-of-english-words');
```
