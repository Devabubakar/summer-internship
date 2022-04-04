/*

 [8,7,6,4,3,2,1]
 let pivot 8 , elements to the left are less than pivot and to the right are greater than pivot; 
    [7,6,4,3,2,1]
    [7,4,6,3,2,1]
 recusively select pivot until the whole array is sorted
step 1. pivot helper
*/

function quickSort (arr, left = 0 , right = arr.length - 1){
    if(left < right){
        let pivotIdx = pivotHelper(arr,left,right)
        quickSort(arr,left,pivotIdx - 1); 
        quickSort(arr,pivotIdx + 1, right)
    }
  

   return arr
}
console.log(quickSort([1,2,34,5,6,4,2]))

function pivotHelper (arr, left, right){
       let pivot = arr[left]
       let swapIdx = left ; 

       const swap  =  (arr, idx1, idx2) =>{
            [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
       }

       for(let i = left + 1; i <= right  ; i++){
           //compare consecutive element with pivot , if element less than pivot , swap with adjacent
           if(pivot > arr[i]){
              swapIdx++
              swap(arr,swapIdx,i)
           }
       }

       swap(arr,left,swapIdx)

       console.log(swapIdx)
       return swapIdx

}


