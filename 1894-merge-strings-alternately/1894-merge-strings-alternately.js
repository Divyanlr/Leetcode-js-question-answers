/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let wd1 = word1.split("");
  let wd2 = word2.split("");
  let temp = [];
  let maxLength = Math.max(wd1.length, wd2.length);

  for (let i = 0; i <= maxLength; i++) {
    if (i < wd1.length) temp.push(wd1[i]);
    if (i < wd2.length) temp.push(wd2[i]);
  }
  return temp.join("");
}

let word1 = "abc";
let word2 = "pqr";
console.log(mergeAlternately(word1, word2));
