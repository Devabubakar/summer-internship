function getDigit (num,place){
    return Math.floor(Math.abs(num) / Math.pow(10,place)) % 10
}
console.log(getDigit(12,2))

function NoOfDigit (num){
    if(num === 0) return 1; 
    let digit = Math.floor(Math.log10(num) + 1 )
    return digit
}


function maxDigit (nums) { 
    let max = 0 ; 
    for(let i = 0 ; i < nums.length  ; i++){
        max = Math.max(max, NoOfDigit(nums[i]))
    }
    return max
}

function radixSort(arr){
    
    let maxDigitCount = maxDigit(arr)
    for(let k = 0 ; k < maxDigitCount; k++){
        let buckets = Array.from({length:10},() => [])
        for(let i = 0 ; i < arr.length ; i ++){
            let digits = getDigit(arr[i],k)
            buckets[digits].push(arr[i])
        }

        arr = [].concat(...buckets)
    }

    return arr
    

    
}

console.log(radixSort([2,3,4,55,66,322]))