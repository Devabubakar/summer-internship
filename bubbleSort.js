///
//[4,3,2,1]
//   i j
//[3]
function sort(arr){
    if (arr.length === 1)  return arr
    for(let i = 0 ; i < arr.length; i++){
       for(let j = i + 1; j < arr.length; j++){
          if(arr[j] < arr[i]){
              console.log(arr[i], arr[j])
              //swap
              let temp = arr[i]; 
              arr[i] = arr[j]; 
              arr[j] = temp
          }
       }
    }

    return arr
}

console.log(sort([2,3,1,4,56,7,1]))

