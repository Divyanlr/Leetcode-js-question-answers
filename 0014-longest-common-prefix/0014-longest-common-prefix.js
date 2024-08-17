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


// Let's walk through the process with the input ["flower", "flow", "flight"];
// Step 1: Initial Input
// conststrs = ["flower", "flow", "flight"];

// Step 2: Handle Edge Case
// if(strs.length=== 0) return"";  ----->> Iteration: The array is not empty, so we move to the next step.

// Step 3: Sort the Array
// strs.sort();   ----->>  ["flight", "flow", "flower"]

// Step 4: Compare the First and Last Strings
// letfirstStr = strs[0];        ----->> First String: "flight" & Last String: "flower"

// Step 5: Find the Common Prefix
// while(i < firstStr.length&& i < lastStr.length&& firstStr[i] === lastStr[i]) {
//     i++;
// }
// 	• Iteration 1:
// 		○ Compare firstStr[0] ('f') with lastStr[0] ('f')
// 		○ They are equal, so increment i to 1.
// 	• Iteration 2:
// 		○ Compare firstStr[1] ('l') with lastStr[1] ('l')
// 		○ They are equal, so increment i to 2.
// 	• Iteration 3:
// 		○ Compare firstStr[2] ('i') with lastStr[2] ('o')
// 		○ They are different, so the loop exits.

// Step 6: Return the Common Prefix
// returnfirstStr.substring(0, i);  ----->>  "fl"
// 	• Final Output: "fl"


// --------------------------------------------------------------------------------


// Let's walk through the same process with the input ['car', 'fan', 'fower'].
// Step 1: Initial Input
// conststrs = ['car', 'fan', 'fower'];

// Step 2: Handle Edge Case
// if(strs.length=== 0) return"";  ----->>  The array is not empty, so we move to the next step.

// Step 3: Sort the Array
// strs.sort();     ----->>  ['car', 'fan', 'fower']

// Step 4: Compare the First and Last Strings
// letfirstStr = strs[0];    First String: "car"   &   Last String: "fower"

// Step 5: Find the Common Prefix
// while(i < firstStr.length&& i < lastStr.length&& firstStr[i] === lastStr[i]) {
//     i++;
// }
// 	• Iteration 1:
// 		○ Compare firstStr[0] ('c') with lastStr[0] ('f')
// 		○ They are different, so the loop exits immediately.

// Step 6: Return the Common Prefix
// returnfirstStr.substring(0, i);   ----->> Final Output: "" (an empty string)

// Result:
// 	• There is no common prefix among ['car', 'fan', 'fower'], so the result is an empty string "".
