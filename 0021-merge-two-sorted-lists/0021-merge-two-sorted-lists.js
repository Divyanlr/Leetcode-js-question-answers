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
