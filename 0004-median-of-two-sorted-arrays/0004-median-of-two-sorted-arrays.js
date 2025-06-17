/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let mergeArray = [...nums1, ...nums2];
  mergeArray.sort((a, b) => a - b);
  const mid = Math.floor(mergeArray.length / 2);

  return mergeArray.length % 2 === 0
    ? (mergeArray[mid - 1] + mergeArray[mid]) / 2
    : mergeArray[mid];
};