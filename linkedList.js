import Node from './node.js'

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    size() {
        return this.length;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }
    
    at(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    pop() {
        if (!this.head) {
            return null;
        }
        if (this.length === 1) {
            const poppedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return poppedNode;
        }
        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }
        const poppedNode = this.tail;
        current.next = null;
        this.tail = current;
        this.length--;
        return poppedNode;
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        while(current) {
            if(current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    toString() {
        let current = this.head;
        let str = '';
        while(current) {
            str += `( ${current.value} ) -> `;
            current = current.next;
        }
        str += 'null';
        return str;
    }

    insertAt(value, index) {
        let current = at(index - 1);
        const newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return this;
    }

    removeAt(index) {
        let current = at(index - 1);
        current.next = current.next.next;
        this.length--;
        return this;
    }
}

export default LinkedList