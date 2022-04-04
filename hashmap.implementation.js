/*

Hashmap is a ds that maps keys to values 
- hashmap internally is built using an array 
const arr = [1,2,3,4,5] keys are numerical (indeces)
console.log(arr[0]) = 1
const obj = {
    "firstName":"Abubakar",
    "lastName" : "Ali"
}
setting 
obj['age'] = 18

updating
overriding 
obj['lastName'] = "Mohamed"

delete 

delete obj['firstName']

get an item 
console.log(obj)

*/

//Prime Number - 

class HashMap {
    constructor(capacity = 7){
        this.capacity = capacity
        this.table = new Array(capacity)
    }

    hash(str){
      //utf-8 
      let idx = 0
      for(let char of str) { 
          idx = (17 * idx + char.toLowerCase().charCodeAt(0) - 65) % this.capacity
      }
      return idx
    }
    resize(){
       let newTable = new Array(this.capacity * 2)
        this.table.forEach((items) => {
            items.forEach(([key,value]) => {
                const idx = this.hash(key)
                if(!newTable[idx]){
                    return newTable[idx] = [[key,value]]
                }
                const values = this.table[idx]
                //0(1)
                    if(values[0][0] === key){
                     //overide existing  
                      return values[0][1] = value 
                    }
                return newTable[idx].push([key,value])
                    })
        })

        this.table = newTable
    }

    numItems = 0 
    set(key,value){
        this.numItems++
        let loadFactor = this.numItems / this.table.length
        if(loadFactor > 0.8){
            this.resize()
        }
        const idx = this.hash(key)
        if(!this.table[idx]){
            return this.table[idx] = [[key,value]]
        }else {
            const values = this.table[idx]
            //0(1)
                if(values[0][0] === key){
                 //overide existing  
                  return values[0][1] = value 
                  this.numItems
                }
              
            return this.table[idx].push([key,value])
        }
        
    }

    get(key){
        const idx = this.hash(key)
    
        if(!this.table[idx]) return false

         return this.table[idx].find(x => key === x[0])[1]
    }
}

const bucket = new HashMap()

bucket.set('FirstName','Abubakar')
bucket.set('LastName','d')
bucket.set('LastName',"ali")
bucket.set('LastName','d')
bucket.set('LastName',"ali")
bucket.set('LastName','d')
bucket.set('LastName',"ali")


console.log(bucket.table)






console.log(bucket.table.length)


