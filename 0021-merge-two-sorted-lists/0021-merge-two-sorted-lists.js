/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
var mergeTwoLists = function(list1, list2) {
    // Handle edge case for both lists being empty
    if (list1 === null && list2 === null) return null;

    let dummy = new ListNode(); // Create a dummy node to simplify the process
    let current = dummy; // Pointer to build the new list

    let l1 = list1;
    let l2 = list2;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Attach the remaining elements
    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }

    return dummy.next; // Return the merged list, skipping the dummy node
};





// Iteration Steps for Merging True Case
// 	• List 1: 1 → 3 → 5
// 	• List 2: 2 → 4 → 6
// Initialization:
// 	• dummy is a ListNode with val = 0 and next = null.
// 	• current points to dummy.
// 	• l1 points to the head of List 1 (1 → 3 → 5).
// 	• l2 points to the head of List 2 (2 → 4 → 6).
// Iteration 1:
// 	• Compare l1.val (1) and l2.val (2).
// 	• Since 1 ≤ 2:
// 		○ Set current.next to l1 (1 → 3 → 5).
// 		○ Move l1 to the next node (3 → 5).
// 		○ Move current to current.next (1 → 3 → 5).
// 	• Merged list: 1 → (next: 3 → 5).
// Iteration 2:
// 	• Compare l1.val (3) and l2.val (2).
// 	• Since 3 > 2:
// 		○ Set current.next to l2 (2 → 4 → 6).
// 		○ Move l2 to the next node (4 → 6).
// 		○ Move current to current.next (2 → 4 → 6).
// 	• Merged list: 1 → 2 → (next: 4 → 6).
// Iteration 3:
// 	• Compare l1.val (3) and l2.val (4).
// 	• Since 3 ≤ 4:
// 		○ Set current.next to l1 (3 → 5).
// 		○ Move l1 to the next node (5).
// 		○ Move current to current.next (3 → 5).
// 	• Merged list: 1 → 2 → 3 → (next: 5).
// Iteration 4:
// 	• Compare l1.val (5) and l2.val (4).
// 	• Since 5 > 4:
// 		○ Set current.next to l2 (4 → 6).
// 		○ Move l2 to the next node (6).
// 		○ Move current to current.next (4 → 6).
// 	• Merged list: 1 → 2 → 3 → 4 → (next: 6).
// Iteration 5:
// 	• Compare l1.val (5) and l2.val (6).
// 	• Since 5 ≤ 6:
// 		○ Set current.next to l1 (5).
// 		○ Move l1 to the next node (null).
// 		○ Move current to current.next (5).
// 	• Merged list: 1 → 2 → 3 → 4 → 5 → (next: 6).
// Remaining Nodes:
// 	• Since l1 is null, attach the remaining nodes from l2 (6).
// 	• Final merged list: 1 → 2 → 3 → 4 → 5 → 6.
// ---------------------------------------------------------------------------------------
// Iteration Steps for Merging False Case
// Case 1: List 1 is Empty, List 2 is Not Empty
// 	• List 1: null
// 	• List 2: 2 → 4 → 6
// Initialization:
// 	• dummy is a ListNode with val = 0 and next = null.
// 	• current points to dummy.
// 	• l1 is null.
// 	• l2 points to the head of List 2 (2 → 4 → 6).
// Process:
// 	• Since l1 is null, we directly attach the remaining nodes from l2 to the merged list.
// 	• Final merged list: 2 → 4 → 6.
// Case 2: List 2 is Empty, List 1 is Not Empty
// 	• List 1: 1 → 3 → 5
// 	• List 2: null
// Initialization:
// 	• dummy is a ListNode with val = 0 and next = null.
// 	• current points to dummy.
// 	• l1 points to the head of List 1 (1 → 3 → 5).
// 	• l2 is null.
// Process:
// 	• Since l2 is null, we directly attach the remaining nodes from l1 to the merged list.
// 	• Final merged list: 1 → 3 → 5.
// Case 3: Both Lists are Empty
// 	• List 1: null
// 	• List 2: null
// Process:
// 	• Since both lists are null, the function should return null (not an empty string or array).







