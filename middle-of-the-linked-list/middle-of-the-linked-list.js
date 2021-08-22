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
var middleNode = function(head) {
    let length = 0;
    const map = [];
    let currNode = head;
    
    while (currNode) {
        map.push(currNode);
        length++;
        currNode = currNode.next;
    }
    return map[Math.floor(length/2)];
};