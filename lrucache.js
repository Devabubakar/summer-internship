/* lru cache is basically an implementation that leverages data structure to make
 it easier for one to access items by reducing the number of request
 - using a map 
 - map , it remembers order of entry 
 get 

 [1,2,3,4,5,5] 

 set 

 if exists inside the map ;
 remove - readd , []
 return the first element 

 */

class LRU{
    constructor(capacity){
        this.cache = new Map()
        this.capacity = capacity
    }

    put(idx,value){  
        
            this.cache.delete(idx)
            if(this.cache.length > this.capacity){
                this.cache.delete(this.cache.keys().next()).value
            }   
            this.cache.set(idx,value)
        

    }
    get(idx){
        if(!this.cache.has(idx)) return undefined; 
        let val = this.cache.get(idx)
        this.cache.delete(idx)
        this.cache.set(idx,val)

        return val

    }

    getLeastRecent(){ 
        return Array.from(this.cache)[0]
    }
}

let testCache = new LRU(); 
testCache.put('12:00','my favourite dog')
testCache.put('13:00','whats the time today?')

console.log(testCache.getLeastRecent())


