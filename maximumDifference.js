var maximumDifference = function(nums) {
    let lowest = nums[0]
    let diff = 0
    for(let i = 1; i < nums.length; i++){
        if(lowest > nums[i]){
            lowest = nums[i]
        }
        else {
            diff = Math.max(diff, nums[i] - lowest)
        }
        
    }
     if(diff === 0){
         return -1
     }
     
     return diff
 };

 console.log(maximumDifference([7,1,5,4]))