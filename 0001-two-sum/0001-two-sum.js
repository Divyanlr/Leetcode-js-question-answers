var twoSum = function (nums, target) {
 results = [];
 for(var i=0; i<nums.length; i++){
     const complement = target - nums[i];
     if(results.includes(complement)){
          return [results.indexOf(complement), i];
     }
    results.push(nums[i]);
 }
};
twoSum([9,3,1,7,5], 4);