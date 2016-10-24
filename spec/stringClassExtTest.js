/** String Class extention test suite */
describe('String class extention', function () {

  /** Test suite to ensure that hasVowels method returns true
   * if the string is a vowel and false if its not
   */
  describe('hasVowels method', function () {

    it('Should return a boolean if a given string has a vowel', function () {
      expect('aeiou'.hasVowels()).not.toBe(null);
      expect(typeof 'aeiou'.hasVowels()).toBe('boolean');
      expect('aeiou'.hasVowels()).toBe(true);
      expect('rlhz'.hasVowels()).toBe(false);
    });
  });


  /** Test suite to ensure that toUpper method returns
   * capitalized characters of the string
   */
  describe('toUpper method', function () {

    it('Should capitalize all characters in a string', function () {
      expect('fortune'.toUpper()).not.toBe(null);
      expect(typeof 'fortune'.toUpper()).toBe('string');
      expect('fortune'.toUpper()).toEqual('FORTUNE');
    });
  });

});