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


  /** Test suite to ensure the toUpper method returns
   * capitalized characters of the string
   */
  describe('toUpper method', function () {

    it('Should capitalize all characters in a string', function () {
      expect('fortune'.toUpper()).not.toBe(null);
      expect(typeof 'fortune'.toUpper()).toBe('string');
      expect('fortune'.toUpper()).toEqual('FORTUNE');
    });
  });

  /** Test suite to ensure the isQuestion method returns a
   * boolean if a string is a question(ie. it ends with a question mark)
   */
  describe('isQuestion method', function () {

    it('Should return a boolean if a string is a question or not', function () {
      expect('how are you?'.isQuestion()).not.toBe(null);
      expect(typeof 'how are you?'.isQuestion()).toBe('boolean');
      expect('how are you?'.isQuestion()).toEqual(true);
      expect('how are you'.isQuestion()).toEqual(false);
    });
  });

  /** Test suite to ensure that words method returns an
   * Array of words from a given string
   */
  describe('words method', function () {

    it('Should return an array of words from a given string', function () {
      expect('call me'.words()).not.toBe(null);
      expect(typeof 'call me'.words()).toBe('object');
      expect(Array.isArray('call me'.words())).toBeTruthy();
      expect('call me'.words()).toEqual(['call', 'me']);
    });
  });

  /** Test suite to ensure that wordCount method returns the
   * Number of words in a given string
   */
  describe('wordCount method', function () {

    it('Should return the number of words in a string', function () {
      expect('hello word'.wordCount()).not.toBe(null);
      expect(typeof 'hello word'.wordCount()).toBe('number');
      expect('hello word'.wordCount()).toEqual(2);
    });
  });

  /** Test suite to ensure that toCurrency method returns a
   * currency representation  of a given string
   */
  describe('toCurrency method', function () {

    it('Should return a currency representation of a string', function () {
      expect('100000.83'.toCurrency()).not.toBe(null);
      expect('100000.83'.toCurrency()).toEqual('100,000.83');
    });
  });


  /** Test suite to ensure that fromCurrency method returns a
   * number representation  of a given string
   */
  describe('fromCurrency method', function() {

    it('Should return a number representation of a currency representation string',
      function() {
        expect('100,000.83'.fromCurrency()).not.toBe(null);
        expect(typeof '100,000.83'.fromCurrency()).toBe('string');
        expect('100,000.83'.fromCurrency()).toEqual('100000.83');
      });
  });

  /** Test suite to ensure that inverseCase method returns a
   * a string that is an inverse case of each letter in a given string
   */
  describe('inverseCase method', function() {

    it('Should return an inverse case of each letter in a string', function() {
      expect('FoRtunE'.inverseCase()).not.toBe(null);
      expect(typeof 'FoRtunE'.inverseCase()).toBe('string');
      expect('FoRtunE'.inverseCase()).toEqual('fOrTUNe');
    });
  });

  /** Test suite to ensure that alternatingCase method returns a
   * string that is in alternating cases of each character in a given string
   * and it must start with a lower case
   */
  describe('alternatingCase method', function() {

    it('Should return alternating cases of each character in a string', function() {
      expect('fortune'.alternatingCase()).not.toBe(null);
      expect(typeof 'fortune'.alternatingCase()).toBe('string');
      expect('fortune'.alternatingCase()).toEqual('fOrTuNe');
    });
  });

  /** Test suite to ensure that getMiddle method returns a
   * string that is a character(s) in the middle of the given
   * string
   */
  describe('getMiddle method', function() {

    it('Should return the character(s) in the middle of a string', function() {
      expect('alice'.getMiddle()).not.toBe(null);
      expect(typeof 'alice'.getMiddle()).toBe('string');
      expect('alice'.getMiddle()).toEqual('i');
    });
  });

  /** Test suite to ensure that numberWords method returns
   * numbers in words
   */
  describe('numberWords method', function() {

    it('Should return numbers in words', function() {
      expect('10'.numberWords()).not.toBe(null);
      expect(typeof '10'.numberWords()).toBe('string');
      expect('10'.numberWords()).toEqual('ten');
    });
  });

});