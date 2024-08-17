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




// example array [0,0,1,1,1,2,2,3,3,4].
// Initial State
// 	• Array: [0,0,1,1,1,2,2,3,3,4]
// 	• k: 1 (index where the next unique element should be placed)
// Iteration Steps
// 	1. i = 1:
// 		○ Compare nums[1] (0) with nums[0] (0).
// 		○ They are the same, so nums[1] is not a unique element.
// 		○ k remains 1.
// 	2. i = 2:
// 		○ Compare nums[2] (1) with nums[1] (0).
// 		○ They are different, so nums[2] is a unique element.
// 		○ Place 1 at nums[k] (nums[1]).
// 		○ Increment k to 2.
// 		○ Array becomes: [0,1,1,1,1,2,2,3,3,4].
// 	3. i = 3:
// 		○ Compare nums[3] (1) with nums[2] (1).
// 		○ They are the same, so nums[3] is not a unique element.
// 		○ k remains 2.
// 	4. i = 4:
// 		○ Compare nums[4] (1) with nums[3] (1).
// 		○ They are the same, so nums[4] is not a unique element.
// 		○ k remains 2.
// 	5. i = 5:
// 		○ Compare nums[5] (2) with nums[4] (1).
// 		○ They are different, so nums[5] is a unique element.
// 		○ Place 2 at nums[k] (nums[2]).
// 		○ Increment k to 3.
// 		○ Array becomes: [0,1,2,1,1,2,2,3,3,4].
// 	6. i = 6:
// 		○ Compare nums[6] (2) with nums[5] (2).
// 		○ They are the same, so nums[6] is not a unique element.
// 		○ k remains 3.
// 	7. i = 7:
// 		○ Compare nums[7] (3) with nums[6] (2).
// 		○ They are different, so nums[7] is a unique element.
// 		○ Place 3 at nums[k] (nums[3]).
// 		○ Increment k to 4.
// 		○ Array becomes: [0,1,2,3,1,2,2,3,3,4].
// 	8. i = 8:
// 		○ Compare nums[8] (3) with nums[7] (3).
// 		○ They are the same, so nums[8] is not a unique element.
// 		○ k remains 4.
// 	9. i = 9:
// 		○ Compare nums[9] (4) with nums[8] (3).
// 		○ They are different, so nums[9] is a unique element.
// 		○ Place 4 at nums[k] (nums[4]).
// 		○ Increment k to 5.
// 		○ Array becomes: [0,1,2,3,4,2,2,3,3,4].
// Final State
// 	• Array: [0,1,2,3,4,2,2,3,3,4] (with unique elements in the first k positions)
// 	• k: 5
