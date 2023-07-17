// Q.8 Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.

// Examples :
// Input : abc de
// Output : 3
// There are three consonants b, c and d.

// Input : geeksforgeeks portal
// Output : 12

//Solution
function countConsonants(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  const lowerStr = str.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    const char = lowerStr[i];

    if (/^[a-z]$/.test(char)) {
      if (!vowels.includes(char)) {
        count++;
      }
    }
  }

  return count;
}

//We test the above function 

const example1 = "abc de";
console.log(`Number of consonants in "${example1}":`, countConsonants(example1));

const example2 = "geeksforgeeks portal";
console.log(`Number of consonants in "${example2}":`, countConsonants(example2));
