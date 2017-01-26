class Node {
    constructor(item, next) {
        this.item = item;
        this.next = next;
    }
}
export default class LinkedStack {
    
    constructor() {
        this.first = new Node(null, null);
    }
    
    pop() {
        
        let item = null;
        
        if (!this.isEmpty()) {
            
            const nextFirst = this.first.next;

            item = this.first.item;
        
            this.first = nextFirst;    
        }
        
        return item;
    }
    
    push(item) {
        
        const previousFirst = this.first;
        
        const node = new Node(item, previousFirst);
        
        node.item = item;
        
        node.next = previousFirst;
        
        this.first = node;
        
        return this;
        
    } 
    
    isEmpty() {
        return this.first.item === null && this.first.next === null
    }
    
} 