/* String Class extention test suite */
describe('String class extention', function() {

  /* Test suite to ensure that hasVowels method returns true
   * if the string is a vowel and false if its otherwise
   */
  describe('hasVowels method', function() {

    it('Should return a boolean if a given string has a vowel', function() {
      expect('aeiou'.hasVowels()).not.toBe(null);
      expect(typeof 'aeiou'.hasVowels()).toBe('boolean');
      expect('aeiou'.hasVowels()).toBe(true);
      expect('rlhz'.hasVowels()).toBe(false);
    });
  });

});