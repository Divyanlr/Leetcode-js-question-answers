/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1;
    if(!nums.length) return 0;
    if(nums.length === 1) return 1;

    for(let i=1; i<nums.length; i++){
        if(nums[i] !== nums[i-1]){
           nums[k] = nums[i];
            k++;
        }
    }
    console.log(nums.slice(0, k));
    return k; 
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4,9]);
removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
removeDuplicates([1,1,2]);