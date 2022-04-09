// single linked list
// a ds that is made of a node , which contains the value and a pointer to the next node
/*
operations that exists in a linked
- push ,pop ,  shift , unshift , get, set , remove,insert ,  reverse
1. push - adds an element to the end of a linked list 

1 -> 2 -> 3 -> 4 -> 5

2. shift - adds an element to the start of the linked list 
1 -> 2 -> 3 -> 4 -> 5 (add 3)
0 -> 2 -> 3 -> 4 -> 5

*/
class Node { 
    constructor(val) {
        this.val = val ; 
        this.next = null 
    }
}

class LinkedList {
    constructor(val){
        this.head = null , 
        this.tail = null , 
        this.length = 0
    }
    // push - add an element to the end of the linked list
   push(val){
       const newNode = new Node(val)
       if(!this.length){
           this.head = newNode ; 
           this.tail = this.head
          
       }else {
           this.tail.next = newNode
           this.tail = newNode
       }
       this.length++
       return this
   }

   pop(){
       //isValid
       if(!this.head) return undefined
       //1-> 2 -> 3 -> null 
       let current = this.head
       let newTail = current
       while(current.next){
           newTail = current
           current = current.next
       }

       this.tail = newTail
       this.tail.next = null 
       this.length--; 

       if(this.length === 0){
           this.head = null; 
           this.tail == null ; 
           
       }

       return newTail
   }
   shift(){     
       if(!this.head) return undefined
       let currentHead = this.head; 
       this.head = currentHead.next
       if(this.length === 0){
           this.tail = null ; 
       }
       this.length--;

       return this
   }

   unshift(val){
       let newNode = new Node(val)
       if(!this.head){
          newNode = this.head; 
          this.tail = this.head
       }else {
           newNode.next = this.head
           this.head = newNode
       }
       this.length++
       return this
   }

   get(idx) { 
       if(this.length < idx) return false; 
       let left = 0 ; 
       let current  = this.head
       while(current.next && left < idx){
           left++
           current = current.next
       }

       return current
       // 1 -> 2 -> 3 -> 5 
   }

   //updating
   set(idx,val) {
       let foundNode = this.get(idx)
       if(!foundNode) return false
       foundNode.val = val 
       return true

   }

   remove(idx){
       if(idx > this.length || idx < 0) return undefined
       if(idx === 0 )  !!this.shift()
       if(idx === this.length) !!this.pop()

       
       let prev = this.get(idx - 1)
       let nextNode = this.get (idx)

      prev.next = nextNode.next;     
      this.length--; 

      return this

       
   }

   reverse(){
       let node = this.head
       this.head = this.tail ;
       this.tail = node; 
       
       let prev = null ; 
       let next;

        for(let i = 0 ; i < this.length; i++){
           next = node.next; 
           node.next = prev; 
           /*
           first step is to change direction of pointers 
          node  next
           1 ->  2 - >  3 - >  4 
    --------------------------------------
         node  prev,
               next
           1 -> 2 -> 3 -> 4
    ---------------------------------------
                node,
                prev,
          next  next = node.next
           1 <- 2 -> 3 - > 4
        Repeat 

           */
           prev = node; 
           node = next
       }

       return this
   }

}

let list = new LinkedList()

list.push("Abubakar")
list.push("jafar")
list.push("Ali")



console.log(list.reverse())