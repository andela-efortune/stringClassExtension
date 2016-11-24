[![Build Status](https://travis-ci.org/andela-efortune/stringClassExtension.svg?branch=develop)](https://travis-ci.org/andela-efortune/stringClassExtension)
[![Coverage Status](https://coveralls.io/repos/github/andela-efortune/stringClassExtension/badge.svg?branch=develop)](https://coveralls.io/github/andela-efortune/stringClassExtension?branch=develop)

# Checkpoint Two: String Class Extension 
This is a JavaScript String Class Extension that uses a Prototype Oriented Programming, methods, procedures and instance attributes to support more string manipulation features, and these features/methods are outlined below. 

### [DEMO](https://andela-efortune.github.io/stringClassExtension/)

##Features/Methods 
***hasVowel()* method**

* It returns true if a given string contains a vowel (aeiouAEIOU).
* It uses regular expression to achieve this. 

***toUpper()* method**

* It converts the alphabets in a string to uppercase.
* It uses regular expression to achieve this. 
* It doesn't make use of the *toUpperCase()* default method.

***toLower()* method**

* It converts the alphabets in a string to lowercase.
* It uses regular expression to achieve this. 
* It doesn't make use of the *toLowerCase()* default method.

***ucFirst()* method**

* It converts the first character in a string to uppercase.
* It makes use of the *toUpper()* method above. 
* It avoids the *toUpperCase()* default method.


***isQuestion()* method**

* It returns true if the given string is a question (i.e. ending with a ?).
* It uses regular expression to achieve this.

***words()* method**

* It returns a list of the words in the string, as an Array.
* It uses regular expression to achieve this.

***wordCount()* method**

* It returns the number of words in a string.
* It uses the *words()* method above.

***toCurrency()* method**

* It returns the currency representation of a string (e.g `11000` should return `11,000.00`).
* It uses regular expression to achieve this.

***fromCurrency()* method**

* It returns a number representation of a currency string (e.g `11,000.00` should return `11000`).

***inverseCase()* method**

* It returns each alphabet in a string as an inverse of its current case (e.g `FoRtUne` should return `fOrTuNE`).
* It uses the *toUpper()* and *toLower()* methods above.
* It doesn't make use of the *toUpperCase()* and *toLowerCase()* default methods. 

***alternatingCase()* method**

* It return each alphabet in a string in an alternating case (e.g `FOrtune` returns `fOrTuNe`).
* It starts with a lowercase
* It uses the *toUpper()* and *toLower()* methods above.  
* It doesn't make use of the *toUpperCase()* and *toLowerCase()* default methods.

***getMiddle()* method**

* It returns the character(s) in middle of the string (e.g `Fortune` returns `t` and `tune` returns `un`).

***numberWords()* method**

* It returns numbers in words (e.g `1` returns `one` and `123` returns `one two three`).

***isDigit()* method**

* It returns true if the string is a digit (i.e one number).
* It uses regular expression to achieve this. 

***doubleCheck()* method**

* It returns true if a string contains double characters (including whitespace character).
* It uses regular expression to achieve this.


##Testing
It uses the Jasmine test framework for its testing and in other to run the test locally, type `karma start` or `npm test` on the terminal dir of the project.

##Licence
 
**ISC** 

Copyright (c) 2016 Fortune Ikechukwu Ekeruo