/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let currentNode = head;
    let prev = null;
    
    while (currentNode) {
        next = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = next;
    }
    return prev;
};
