/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let width = right - left;
  
        let currentHeight = Math.min(height[left], height[right]);

        let currentWater = width * currentHeight;
        
        maxWater = Math.max(maxWater, currentWater);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};