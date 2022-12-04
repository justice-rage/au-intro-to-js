class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(node) {
        node.next = this.head;
        this.head = node; 
    }

    addLast(node) {
        if(!this.head) {
            this.head = node;
            return;
        }
        
        let ref = this.head;
        while (ref.next) ref = ref.next;
        ref.next = node;
    }

    indexOf(node) {
        let idx = 0;
        let ptr = this.head;

        do {
            if(ptr === node) {
                return idx;
            }
            ptr = ptr.next;
            idx++;
        }
        while(ptr)
    }
}

module.exports = LinkedList;