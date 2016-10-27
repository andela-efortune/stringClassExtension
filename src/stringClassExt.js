'use strict';

/**
 * The hasVowel method returns true if a string
 * has a vowel and false if it doesn't
 * 
 * @function hasVowel
 * @return {boolean}
 */
String.prototype.hasVowels = function () {
    const matcher = /[AEIOUaeiou]/g;
    return matcher.test(this);
};