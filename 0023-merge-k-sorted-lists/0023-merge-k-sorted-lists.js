/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function (lists) {
    let values = [];

    //Collecting all node values from all lists
    for (let list of lists) {
        while (list !== null) {
            values.push(list.val);
            list = list.next;
        }
    }

    //Sorting the values
    values.sort((a, b) => a - b);

    //Building new sorted linked list
    let dummy = new ListNode(0);
    let current = dummy;

    for (let val of values) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
};