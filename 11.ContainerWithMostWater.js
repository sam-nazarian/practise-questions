/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {


    let maxArea = 0;
    let left=0;
    let right=height.length-1;
    let numsBetween = height.length-2; //nums between left & right

    while(left<right){

        const yAxis = Math.min(height[left], height[right]);
        const xAxis = numsBetween + 1;


        console.log('heightL', height[left],'heightR', height[right],'yAxis', yAxis, 'xAxis', xAxis, 'area', yAxis*xAxis)

        maxArea = Math.max(maxArea, yAxis*xAxis);


        if(height[left] > height[right]) right--; //skipping right
        else left++
        // if(height[left] <= height[right]) left++; //skipping left //PROBLEM WITH IF IS SINCE RIGHT CHANGES, WE'RE COMPARING THAT NEW CHANGED VAL TO LEFT

        numsBetween-=1;
    }

    return maxArea
};

// console.log( maxArea([1,8,6,2,5,4,8,3,7]) )
// console.log( maxArea([1,2,3,4,5,25,24,3,4] ) )
console.log( maxArea([1,2,3,4,5,25,24,3,4] ) ) //expected 24