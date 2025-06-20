/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let m = s.length;
    let n = p.length;

    let compareChar = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(false));
    compareChar[0][0] = true;

    console.log("compareChar ---", compareChar);

    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === "*") {
            compareChar[0][j] = compareChar[0][j - 1];
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === "*") {
                compareChar[i][j] = compareChar[i][j - 1] || compareChar[i - 1][j];
            } else if (p[j - 1] === "?" || p[j - 1] === s[i - 1]) {
                compareChar[i][j] = compareChar[i - 1][j - 1];
            }
        }
    }

    return compareChar[m][n];
};
