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
    let i = 0;
    let inversedChar = '';

    while(i <= this.length){
        let char = this.charAt(i);
        if(char === char.toUpperCase()){
            inversedChar += char.toLowerCase();
        }else if(char === char.toLowerCase()){
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
String.prototype.alternatingCase = function(){
    
};