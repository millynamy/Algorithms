import { twoSum } from '../src/two-sum.mjs';
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