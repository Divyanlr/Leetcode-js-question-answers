/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    // Remove duplicates + filter out non-positive + sort
    nums = [...new Set(nums)].filter((n) => n > 0).sort((a, b) => a - b);

    // If array is empty or starts > 1, return 1
    if (nums.length === 0 || nums[0] > 1) return 1;

    // Scan for the first gap in sequence
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] - nums[i] > 1) {
            return nums[i] + 1;
        }
    }

    // No gaps found, return next number after last array number
    return nums[nums.length - 1] + 1;
};