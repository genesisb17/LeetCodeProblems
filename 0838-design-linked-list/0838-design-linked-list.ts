class Node {
  val: number;
  next: Node | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
    head: Node;
    tail: Node;
    length: number;
    
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get(index: number): number {
        if (index < 0 || index >= this.length || this.head === null) return -1;
        let temp = this.head;
        for(let i = 0; i < index; i++){
            temp = temp.next;
        }
        return temp.val;
    }

    addAtHead(val: number): void {
        if(!this.head){
            this.head = new Node(val);
            this.tail = this.head;
            this.length++;
            return;
        }
        let n = new Node(val);
        n.next = this.head;
        this.head = n;   
        this.length++;
    }

    addAtTail(val: number): void {
        if(!this.head){
            this.head = new Node(val);
            this.tail = this.head;
            this.length++;
            return;
        }
        let n = new Node(val);
        this.tail.next = n;
        this.tail = n; 
        this.length++;
    }

    addAtIndex(index: number, val: number): void {
        if(index>this.length) return;
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        if (index === this.length) {
            this.addAtTail(val);
            return;
        }
        let temp = this.head;
        for(let i = 0; i < index-1; i++){
            temp = temp.next;
        }
        let nex = temp.next;
        let n = new Node(val);
        temp.next = n;
        n.next = nex;  
        this.length++;
    }

    deleteAtIndex(index: number): void {
       if (index < 0 || index >= this.length) return;

        this.length--;

        if (index === 0) {
        this.head = this.head!.next;
        if (this.length === 0) this.tail = null;
        return;
        }

        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
        prev = prev!.next!;
        }

        if (prev.next === this.tail) {
        this.tail = prev;
        }
        prev.next = prev.next?.next ?? null;

    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */