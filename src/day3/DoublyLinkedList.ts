class Node<T> {
    public value: T;

    public prev: Node<T> | undefined;
    public next: Node<T> | undefined;

    constructor(newValue: T, newPrev: Node<T>|undefined=undefined, newNext: Node<T>|undefined=undefined) {
        this.value = newValue;
        this.prev = newPrev;
        this.next = newNext;
    }
}
export default class DoublyLinkedList<T> {
    public length: number;

    private root: Node<T> | undefined;

    constructor() {
        this.root = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        if (this.length==0 || this.root==undefined) {
            this.root = new Node(item);
        } else {
            this.root.prev = new Node(item, undefined, this.root);
            this.root = this.root.prev;
        }
        this.length+=1;
    }
    insertAt(item: T, idx: number): void {
        if (this.length==0 && idx==0) {
            this.root = new Node(item);
        } else if(this.length>=1) {
            let current = this.root;
            this.root = new Node(item, undefined, current);
        }
    }
    append(item: T): void {
        if (this.length ==0 || this.root==undefined) {
            this.root = new Node(item);
        } else {
            let current = this.root;
            while(current.next!=undefined) {
                current = current.next;
            }
            current.next = new Node(item, current, undefined);
        }
        this.length+=1;
    }
    remove(item: T): T | undefined {
        if (this.length<1) {
            return undefined;
        } else if(this.length>=1 && this.root!=undefined) {
            if (this.root.value==item ) {
                this.root = this.root.next;
                if (this.root!=undefined) {
                    this.root.prev = undefined;
                } else {
                    return undefined;
                }
                this.length-=1;
                return item;
            } else {
                let current = this.root.next;
                for(let i=1; i<this.length; i++) {
                    if (current?.value==item) {
                        if (current.prev!=undefined) {
                            current.prev.next=current.next;
                        }
                        if (current.next!=undefined) {
                            current.next.prev=current.prev;
                        }
                        this.length-=1;
                        return current.value;
                    }
                    if (current?.next!=undefined) {
                        current = current.next;
                    } else {
                        break;
                    }
                }
                return undefined;
            }
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        if (idx>=this.length) {
            return undefined
        } else {
            if (this.length<=0 || this.root == undefined) {
                return undefined;
            } else {
                let current = this.root;
                for (let i=0; i<this.length; i++) {
                    if (i==idx) {
                        return current.value;
                    }
                    if (current.next!=undefined) {
                        current = current.next;
                    } else {
                    //     exception parsing the Linked List
                    }
                }
            }
            return undefined;
        }
    }
    removeAt(idx: number): T | undefined {
        if (idx>=this.length || this.root==undefined || this.length<=0) {
            return undefined;
        } else {
            let tmp = this.root;
            if (idx==0 && this.length==1) {
                this.root = undefined;
                this.length=0;
                return tmp.value;
            } else if (idx==0) {
                this.root = this.root.next;
                if (this.root!=undefined) {
                    this.root.prev = undefined;
                }
                this.length-=1;
                return tmp.value;
            } else {
                for (let i=0; i<this.length; i++) {
                    if (i==idx) {
                        if (tmp.prev!=undefined) {
                            tmp.prev.next = tmp.next;
                        }
                        if (tmp.next!=undefined) {
                            tmp.next.prev = tmp.prev;
                        }
                        this.length-=1;
                        return tmp.value;
                    }
                    if (tmp.next!=undefined) {
                        tmp = tmp.next;
                    }
                }
            }
            return undefined;
        }
    }
}