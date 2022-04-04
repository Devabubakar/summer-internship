//approach: two pointers
//it mentions array of nums

//since the arrray is not sorted, 
//we could encounter duplicates along the way, 
//after sorting the array, we can skip similar element, since they'll be next to each other

//left pointer and right pointer
//left pointer will start left and right pointer will start right
//but, since we want sum of 3 elements === 0, 
//we need to think of how we manipulate the third pointer, 

//optimal approach: 
//we will traverse the whole array with i
//we can then make the left be ahead of i by +1 always
//we can have the right pointer be at far right always
//so then to find the sum, we can use formula similar to X + Y + Z === 0
//X -> i, Y -> left, Z -> right
// Y + Z === 0 - X
//so, we would already be in i(X) the whole time, so goal is to find Y(left) and Z(right)
//we will use the binary search logic to move left and right
//if left + right > -i --> move right by -1 
//if left + right < -i --> move left by +1

//outer loop will only run till arr.length - 2 , since, we want to account for left and right pointer
//it will not make sense for i to go over arr.length - 2 and not have left and i point at the same index
//it will not make sense for i to get to arr.length - 1, where, left will over shoot the array length(Since i is already at last index, left would be i+1)

//we will have to make sure to check for duplicates. 

//TC: O(N*logN + N^2) -> O(N^2)
var threeSum = function(nums) {
    
    nums = nums.sort((a,b)=> a-b); //sort
    
    let arr = [];
    
    for(let i = 0; i < nums.length-2; i++){
        
        //skip duplicates even before assigning left and right
        //we dont want our X to be the same which causes for duplicate values
        if(i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while(left < right){
            if(nums[left] + nums[right] === -(nums[i])){
                arr.push([nums[i], nums[left], nums[right]]);
                
                //skip all the duplicates that left and right have stumbled on
                while(left < right && nums[left] === nums[left+1]) left++;
                while(left < right && nums[right] === nums[right-1]) right--;
                
                //one more increment, because we have already worked with this number
                //if while loop had worked, we would end with let's say [0, 0, 3]
                //end of that 0, we would need to move that 3
                left++;
                right--;
            } else if (nums[left] + nums[right] > -(nums[i])){
                right--;
            }else{
                left++;
            }
        }
    
    }
    return arr;
}
