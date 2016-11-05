'use strict';

/**
 * The hasVowel method returns true if a string
 * has a vowel and false if it doesn't
 * 
 * @function hasVowel
 * @return {Boolean}
 */
String.prototype.hasVowels = function () {
    return /[AEIOUaeiou]/g.test(this);
};

/**
 * The toUpper method returns the given string with all
 * characters capitalized.
 * 
 * @function toUpper
 * @return {String}
 */
String.prototype.toUpper = function () {
    return this.replace(/[a-z]/g, function (char) {
        return String.fromCharCode(char.charCodeAt() - 32);
    });
};

/**
 * The toLower method returns a given string in lower cases
 * 
 * @function toLower
 * @return {String}
 */
String.prototype.toLower = function () {
    return this.replace(/[A-Z]/g, function (char) {
        return String.fromCharCode(char.charCodeAt() + 32);
    });
};

/**
 * The ucFirst method returns the first character of a string in 
 * uppercase
 * 
 * @function toLower
 * @return {String}
 */
String.prototype.ucFirst = function () {
    return this.substring(0, 1).toUpper() + this.substring(1);
};

/**
 * The isQuestion method returns true if a string is a question
 * or false if it's not
 * 
 * 
 * @function isQuestion
 * @return {Boolean}
 */
String.prototype.isQuestion = function () {
    return /\?$/g.test(this);
};

/**
 * The words method returns the words in a string in an Array
 * 
 * @function words
 * @return {Array}
 */
String.prototype.words = function () {
    return this.split(/\W+/g);
};

/**
 * The wordCount method returns the number of words in a given
 * string
 * 
 * @function wordCount
 * @return {Number}
 */
String.prototype.wordCount = function () {
    return this.words().length;
};

/**
 * The toCurrency method returns a currency representation of a
 * given string 
 * 
 * @function toCurrency
 * @return{String}
 */
String.prototype.toCurrency = function () {
    var exp = new RegExp('(\\d)(?=(\\d{3})+\\.)', 'g');
    return parseFloat(this).toFixed(2).replace(exp, '$1,');
};

/**
 * The fromCurrency method the number representation of a given currency
 * string
 * 
 * @function fromCurrency
 * @return {String}
 */
String.prototype.fromCurrency = function () {
    return this.replace(',', '');
};

/**
 * The inverseCase method returns a string that is an inverse case of 
 * each letter in a given string
 * 
 * @function inverseCase
 * @return {String}
 */
String.prototype.inverseCase = function () {
    var i = 0,
        inversedChar = '';

    while (i <= this.length) {
        var char = this.charAt(i);

        inversedChar += char === char.toUpper() ? char.toLower() : char.toUpper();

        i++;
    }
    return inversedChar;
};


/**
 * The alternatingCase method returns the alternating case of each
 * character in a string.
 * 
 * @function alternatingCase
 * @return {String}
 */
String.prototype.alternatingCase = function () {
    var alternatingChars = '';

    for (var i = 0; i < this.length; i++) {
        alternatingChars += i % 2 === 0 ? this[i].toLower() : this[i].toUpper();
    }

    return alternatingChars;
};

/**
 * The getMiddle method returns the character(s) in the middle
 * of a string
 * 
 * @function getMiddle
 * @return {String}
 */
String.prototype.getMiddle = function () {
    if (this.length % 2 === 0) {
        return this.charAt(this.length / 2 - 1) + this.charAt(this.length / 2);
    } else {
        return this.charAt(Math.floor(this.length / 2));
    }
};

/**
 * The numberWords method returns the number given to it in words
 * 
 * @function numberWords
 * @return {String}
 */
String.prototype.numberWords = function () {
    var str = '';

    var numWords = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };

    for (var char = 0; char < this.length; char++) {
        var word = numWords[this[char]] || '';
        str += (word + ((char + 1) !== this.length ? ' ' : ''));
    }
    return str;
};

/**
 * The isDigit method returns true if the given string
 * is one number (ie. a digit) and false if its not.
 * 
 * @function isDigit
 * @return {Boolean}
 */
String.prototype.isDigit = function () {
    return /\b\d\b/.test(this);
};

/**
 * The doubleCheck method returns true if a string 
 * contains double characters (whitepaces included)
 * and false if it doesn't.
 * 
 * @function doubleCheck
 * @return {Boolean}
 */
String.prototype.doubleCheck = function () {
    return /(.)\1/g.test(this);
};