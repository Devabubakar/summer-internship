/*
Builds up the sort by gradually creating a larger left half of the sorted array
*/

function sort(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i]
        for(let j = i - 1 ; j >= 0 && arr[j] > current ; j--){
           
        }
    }


}
console.log(sort([2,2,1,2]))
               
/*
   [2,3,1,2]
    j i 


*/