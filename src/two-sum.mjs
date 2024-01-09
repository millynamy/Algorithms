/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/
const twoSum = function (nums, target) {
    let mp = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]

        if (mp.has(diff)) {
            return [i, mp.get(diff)]
        }

        mp.set(nums[i], i);
    }
    return [-1, -1];
};


export { twoSum, };