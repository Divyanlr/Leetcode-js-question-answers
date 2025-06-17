/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    nums = [...new Set(nums)].filter((n) => n > 0).sort((a, b) => a - b);
    console.log(nums);

    if (nums.every((num) => num < 0)) return 1;
    if (nums[0] > 1) return 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0) continue;

        if (nums[i + 1] !== undefined && nums[i + 1] - nums[i] > 1) {
            return nums[i] + 1;
        }
    }

    return nums[nums.length - 1] + 1;
};
