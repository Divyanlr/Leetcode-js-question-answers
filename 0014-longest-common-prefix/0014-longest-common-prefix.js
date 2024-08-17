/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    strs.sort();

    let first_str = strs[0];
    let last_str = strs[strs.length - 1];
    let i = 0;

    while(i<first_str.length && i<last_str.length && first_str[i] === last_str[i]){
        i++;
    }

    return first_str.substring(0, i);
};

longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog","racecar","car"]);