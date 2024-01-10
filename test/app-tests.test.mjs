import { twoSum } from '../src/two-sum.mjs';
import { addTwoNumbers, ListNode } from '../src/add-two-nums.mjs';
import { assert } from 'chai';

describe('Testing the Two Sum', function() {
    
    it(" return indices of the two numbers such that they add up to target", function(){
        // prepare
        const arr = [2,7,11,15];
        const target = 9;
        const expected = [1, 0];
        // act
        const result = twoSum(arr, target);
        // verify
        assert.equal(result[0], expected[0]);
        assert.equal(result[1], expected[1]);
    });

    it("return indices of the two numbers such that they add up to target", function(){
        // prepare
        const arr = [3,2,4];
        const target = 6;
        const expected = [2, 1];
        // act
        const result = twoSum(arr, target);
        // verify
        assert.equal(result[0], expected[0]);
        assert.equal(result[1], expected[1]);
    });
});

describe('Testing the add two numbers', function() {
    
    it("Should add two linked lists", function(){
        // prepare
        let l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);

        let l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);

        let expected = new ListNode(7);
        expected.next = new ListNode(0);
        expected.next.next = new ListNode(8);
        // act
        const result = addTwoNumbers(l1, l2);
        // verify
        assert.equal(result, expected);
    });
});