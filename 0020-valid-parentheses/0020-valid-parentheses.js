/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (bracketMap[char]) {
            // If it's a closing bracket
            if (stack.length === 0 || stack[stack.length - 1] !== bracketMap[char]) {
                return false;
            }
            stack.pop();
        } else {
            // If it's an opening bracket
            stack.push(char);
        }
    }
    
    return stack.length === 0;
};

// Test cases
console.log(isValid("()[]{}")); // true
console.log(isValid("(()[)]{}")); // false
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true




// Valid Example: "()[]{}"
// 	1. Initial Setup:
// 		○ bracketMap = { ')': '(', ']': '[', '}': '{' }
// 		○ stack = []
// 	2. Iteration Details:
// 		○ Character: (
// 			§ bracketMap['('] is undefined (not a closing bracket).
// 			§ Push '(' onto stack.
// 			§ stack = ['(']
// 		○ Character: )
// 			§ bracketMap[')'] is '('.
// 			§ Top of stack is '(', which matches '('.
// 			§ Pop '(' from stack.
// 			§ stack = []
// 		○ Character: [
// 			§ bracketMap['['] is undefined (not a closing bracket).
// 			§ Push '[' onto stack.
// 			§ stack = ['[']
// 		○ Character: ]
// 			§ bracketMap[']'] is '['.
// 			§ Top of stack is '[', which matches '['.
// 			§ Pop '[' from stack.
// 			§ stack = []
// 		○ Character: {
// 			§ bracketMap['{'] is undefined (not a closing bracket).
// 			§ Push '{' onto stack.
// 			§ stack = ['{']
// 		○ Character: }
// 			§ bracketMap['}'] is '{'.
// 			§ Top of stack is '{', which matches '{'.
// 			§ Pop '{' from stack.
// 			§ stack = []
// 	3. Final Check:
// 		○ stack.length is 0, so return true.

// --------------------------------------------------

// Invalid Example: "(()[)]{}"
// 	1. Initial Setup:
// 		○ bracketMap = { ')': '(', ']': '[', '}': '{' }
// 		○ stack = []
// 	2. Iteration Details:
// 		○ Character: (
// 			§ bracketMap['('] is undefined (not a closing bracket).
// 			§ Push '(' onto stack.
// 			§ stack = ['(']
// 		○ Character: (
// 			§ bracketMap['('] is undefined (not a closing bracket).
// 			§ Push '(' onto stack.
// 			§ stack = ['(', '(']
// 		○ Character: )
// 			§ bracketMap[')'] is '('.
// 			§ Top of stack is '(', which matches '('.
// 			§ Pop '(' from stack.
// 			§ stack = ['(']
// 		○ Character: [
// 			§ bracketMap['['] is undefined (not a closing bracket).
// 			§ Push '[' onto stack.
// 			§ stack = ['(', '[']
// 		○ Character: ]
// 			§ bracketMap[']'] is '['.
// 			§ Top of stack is '[', which matches '['.
// 			§ Pop '[' from stack.
// 			§ stack = ['(']
// 		○ Character: )
// 			§ bracketMap[')'] is '('.
// 			§ Top of stack is '(', which matches '('.
// 			§ Pop '(' from stack.
// 			§ stack = []
// 		○ Character: {
// 			§ bracketMap['{'] is undefined (not a closing bracket).
// 			§ Push '{' onto stack.
// 			§ stack = ['{']
// 		○ Character: }
// 			§ bracketMap['}'] is '{'.
// 			§ Top of stack is '{', which matches '{'.
// 			§ Pop '{' from stack.
// 			§ stack = []
// 	3. Final Check:
// 		○ stack.length is 0, so return true.


