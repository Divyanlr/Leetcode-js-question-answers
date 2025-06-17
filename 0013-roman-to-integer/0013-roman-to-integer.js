var romanToInt = function (s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let currentSymbol = s[i];
        let currentValue = romanMap[currentSymbol];
        let nextValue = romanMap[s[i + 1]];
        if (nextValue && currentValue < nextValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    } return result;
};
