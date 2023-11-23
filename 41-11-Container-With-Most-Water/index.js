const maxArea = function(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxima = 0;

    while(left < right){
        let width = (right - left);
        let maxArea = Math.min(heights[left], heights[right]) * width;

        maxima = Math.max(maxima, maxArea);

        if(heights[left] <= heights[right]){
            left++;
        }else {
            right --;
        }
    }
    return maxima;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
