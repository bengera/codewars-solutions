/*Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
    let newstr = str.replace(/[aeiou]/gi, ''); 
    return newstr;
  }
