import { twoSum } from '../src/two-sum.mjs';
import { addTwoNumbers, ListNode } from '../src/add-two-nums.mjs';
import { assert } from 'chai';
import { isPalindrome } from '../src/palindrome.mjs';
import { findEnd } from '../src/maze.mjs';

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
    
    it("Should return correct result", function(){
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
        let result = addTwoNumbers(l1, l2);
        // verify
        // assert.equal(result, expected);
        while(result.next != null && expected.next != null){
           assert.equal(result.val, expected.val);
           result = result.next;
           expected = expected.next;
        }
    });
});

describe('testing if input is palindrome', function() {
    
    it(" should be successfull if given input is palidrome", function(){
        // prepare
        const x = 121;
        const expected = true;
        // act
        const result = isPalindrome(x);
        // verify
        assert.equal(result, expected);
       
    });
});

/*while (list1 !== null && list2 !== null) {
    if (list1.val !== list2.val) {
        return false;
    }
    list1 = list1.next;
    list2 = list2.next;
}
*/

describe('Maze travesal algorithmns tests', function() {
    it("should return false for empty grid", function(){
        // prepare
        const start = [0, 0];
        const end = [2, 2];
        const grid = [];
        const expected = false;
        // act
        const result = findEnd(grid, start, end);
        // verify
        assert.equal(result, expected);
    });
    it("should find the end from start", function(){
        // prepare
        const start = [0, 0];
        const end = [2, 2];
        const grid = [[0, 0, 0],
                      [0, 1, 0],
                      [0, 1, 0]];
        const expected = true;
        // act
        const result = findEnd(grid, start, end);
        // verify
        assert.equal(result, expected);
    });
    it("should return false if no path", function(){
        // prepare
        const start = [0, 0];
        const end = [2, 2];
        const grid = [[0, 1, 0],
                      [0, 1, 0],
                      [0, 1, 0]];
        const expected = false;
        // act
        const result = findEnd(grid, start, end);
        // verify
        assert.equal(result, expected);
    });
});
