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
    return this.split(/\W+/g).length;
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
    return Number(this.replace(',', '')).toString();
};