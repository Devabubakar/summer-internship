//simplest bubble sort technique that repeatedly sort adjacent elements until they are in the same order4
//nearly swapped arrays should be short circuited
function sort(arr){
    let noSwaps; 
    for(let i = 0 ; i < arr.length; i ++){
        noSwaps = true
      for(let j = 0; j < arr.length - 1; j++){
          console.log(arr[j], arr[j + 1])
          if(arr[j] > arr[j + 1]){
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp
              noSwaps = false
              console.log("hello")
          }
      }

      if(noSwaps) break;
    }

    return arr
}

console.log(sort([9,1,2,3]))