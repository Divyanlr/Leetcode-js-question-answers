/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 
var merge = function (intervals) {
    if (intervals.length === 0) return [];

    let sorted = intervals.sort((a, b) => a[0] - b[0]);

    let result = [sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
        let last = result[result.length - 1]; // get the last merged item
        let current = sorted[i];

        if (current[0] <= last[1]) {
            // Merging
            last[1] = Math.max(last[1], current[1]);
        } else {
            // if No overlap, then just push it
            result.push(current);
        }
    }

    return result;
};