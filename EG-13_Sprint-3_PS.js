/**
 * 01. Contains Duplicate
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
};


/**
 * 02. Move Zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0;

    for (let num of nums) {
        if (num !== 0) {
            nums[index] = num;
            index++;
        }
    }

    while (index < nums.length) {
        nums[index] = 0;
        index++;
    }
};


/**
 * 03. Valid Anagram
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
};


/**
 * 04. Ransom Note
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let count = {};

    for (let char of magazine) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of ransomNote) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }

    return true;
};


/**
 * 05. Majority Element
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};


/**
 * 06. 3Sum
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {

            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;

            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};


/**
 * 07. Subarray Sum Equals K
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map();
    map.set(0, 1);

    let sum = 0;
    let result = 0;

    for (let num of nums) {
        sum += num;

        if (map.has(sum - k)) {
            result += map.get(sum - k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return result;
};


/**
 * 08. Top K Frequent Elements
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let frequency = {};

    for (let num of nums) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    let buckets = [];

    for (let num in frequency) {
        let freq = frequency[num];

        if (!buckets[freq]) {
            buckets[freq] = [];
        }

        buckets[freq].push(Number(num));
    }

    let result = [];

    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {

        if (buckets[i]) {
            result.push(...buckets[i]);
        }
    }

    return result;
};


/**
 * 09. Longest Consecutive Sequence
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    let set = new Set(nums);
    let longest = 0;

    for (let num of set) {

        if (!set.has(num - 1)) {

            let current = num;
            let length = 1;

            while (set.has(current + 1)) {
                current++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
};


/**
 * 10. Sort Colors
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {

        if (nums[mid] === 0) {

            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;

        } else if (nums[mid] === 1) {

            mid++;

        } else {

            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};