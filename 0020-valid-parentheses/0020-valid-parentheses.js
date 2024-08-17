/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
    const stack = [];

    for(let i=0;  i<s.length; i++){
        const char = s[i];
        
        if(openingBrackets.includes(char)){
            stack.push(char);
        }else if(closingBrackets.includes(char)){
            if (stack.length === 0) {
                  return false;
            }
            const openingBracket = stack.pop();
            if (openingBrackets.indexOf(openingBracket) !== closingBrackets.indexOf(char)) {
                return false;
            }
        }
    }
     return stack.length === 0;
};

isValid("()");
isValid("()[]{}");
isValid("(]");