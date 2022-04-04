//same as bubble sort , instead of placing large values into sorted positions, it places small values into sorted positions
/*
[2,3,4,5,1]
[2,3,4,5,1] 2,3 minimum = 2; 
[2,3,4,5,1] 2,4 minimum  = 2
[2,3,4,5,1] 2,5 minimum = 2; 
[2,3,4,5,1] 2, 1 minimum = 1; 
[1,3,4,5,2] 2 and 1 swapped; then start over


Time Complexity = 0n^2; 
Comparing every element to every other elements
*/



function sort(arr){
    let lowest;
    for(let i = 0 ; i < arr.length; i ++){
         lowest = i ; 
        for(let j = i + 1; j < arr.length ; j++){
             if(arr[j] < arr[i]){
                 lowest = j
             }
        }
        
            let temp = arr[i]; 
            arr[i] = arr[lowest]; 
            arr[lowest] = temp
        
    }
    return arr
}

console.log(sort([5,4,3,2,1]))