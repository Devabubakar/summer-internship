//OlogN
class Node { 
     constructor(val){
         this.val = val ; 
         this.right = null;
         this.left = null
     }
}

class BST { 
    constructor() { 
        this.root = null
    }

    insert(val){
        let newNode = new Node(val)
        if(this.root == null){
            this.root = newNode
            return this; 
        }else { 
           let current = this.root; 
           while(true){
               //left
               if(val === current.val) return undefined

               if(current.val > val) { 
                   if(current.left === null){
                       current.left = newNode
                       return this;
                   }
                   current = current.left

                   //right
               }else {
                  if(current.right === null){
                      current.right = newNode; 
                      return this
                  }

                  current = current.right
               }
           }
        }
    }

    find(val){
        if(this.root === null) return false;
        
        let current = this.root
        let found = false 

        while(!found && current) { 
            //left
            if(val < current.val){
              current = current.left
            }else if(val > current.val){
                current = current.right
            }else {
                found = true
            }
        }


        if(!found) return false

        return true
    }

    //traverses siblings first , then children
    bsf(val){ 
        if(!this.root) return undefined; 

        let data = []
        let queue = []
        let node = this.root; 
        queue.push(node)
        while(queue.length){ 
          node = queue.shift()
          data.push(node)

          if(node.left)  queue.push(node.left)
          if(node.right)  queue.push(node.right)
        }

        return data
    }
}

let bst = new BST(); 
bst.insert(10)
bst.insert(14)
bst.insert(12)
bst.insert(7)

console.log(bst.bsf())