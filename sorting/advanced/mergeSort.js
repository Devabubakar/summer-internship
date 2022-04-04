/*

merge sort algorithm >> divides array into two and merge them after sorting
[4,3,2,1]
[4,3]  [2,1]
[4][3]  [2][1]
---------------
[3,4][1,2]
[1,2,3,4]

*/

const merge = (arr1,arr2) => { 
    let i = 0 ; 
    let j = 0 ; 
    let result  = []

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }else { 
            result.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }

    while(j < arr2.length){
        result.push(arr2[i])
        j++
    }

    return result
}


const mergeSort = (arr) => {
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left,right)
}
console.log(mergeSort([4,3,2,1]))
