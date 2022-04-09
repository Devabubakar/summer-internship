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
    bsf(){ 
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


    ///depth first search , traverses the children first then the sibling s
    //preorder - returns as it's traversing
    dfs(){
        if(!this.root) return undefined
        let data = []
        
        const traverse = (node) => { 

            //this is for preorder - for post order we first traverse then push

            data.push(node)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)

            /*post order
            
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node)



            inorder 
            if(node.left) traverse(node.left)
             data.push(node)
            if(node.right) traverse(node.right)
           
            
            */

            

        }
         traverse(this.root)
         return data
    }
}

let bst = new BST(); 
bst.insert(10)
bst.insert(14)
bst.insert(12)
bst.insert(7)

console.log(bst.dfs())