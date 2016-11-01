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
    return this.replace(/[a-z]/g, (char) => {
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
    return this.replace(/[A-Z]/g, (char) => {
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
    return this.substring(0, 1).toUpper() + this.substring(1).toLower();
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
    const exp = new RegExp('(\\d)(?=(\\d{3})+\\.)', 'g');
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
        if (char === char.toUpperCase()) {
            inversedChar += char.toLowerCase();
        } else if (char === char.toLowerCase()) {
            inversedChar += char.toUpperCase();
        }
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
        if (i % 2 === 0) {
            alternatingChars += this[i].toLowerCase();
        } else {
            alternatingChars += this[i].toUpperCase();
        }
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

        const firstHalf = this.substring(0, this.length / 2);
        const secondHalf = this.substring(this.length / 2);

        return firstHalf.slice(-1) + secondHalf.charAt(0);
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
    var word, str = '',
        char;
    for (char = 0; char < this.length; char++) {
        switch (this[char]) {
            case '1':
                word = 'one';
                break;
            case '2':
                word = 'two';
                break;
            case '3':
                word = 'three';
                break;
            case '4':
                word = 'four';
                break;
            case '5':
                word = 'five';
                break;
            case '6':
                word = 'six';
                break;
            case '7':
                word = 'seven';
                break;
            case '8':
                word = 'eight';
                break;
            case '9':
                word = 'nine';
                break;
            case '0':
                word = 'zero';
                break;
            default:
                word = '';
                break;
        }
        str += (word + ((char + 1) !== this.length ? ' ' : ''));
    }

    return str;
};

/**
 * The isDigit method returns true if the given string
 * is a number and false if its not.
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