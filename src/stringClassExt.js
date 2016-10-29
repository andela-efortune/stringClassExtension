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
 * and false if it's not
 * 
 * 
 * @function isQuestion
 * @return {Boolean}
 */
String.prototype.isQuestion = function () {
    return /\?$/g.test(this);
};