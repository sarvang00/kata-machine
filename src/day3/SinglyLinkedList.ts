class Node<T> {
    public value: T;
    public next: Node<T> | undefined;

    constructor(newVal: T, newNext: Node<T>|undefined=undefined) {
        this.value = newVal;
        this.next = newNext;
    }
}

export default class SinglyLinkedList<T> {
    public length: number;
    private root: Node<T> | undefined;
    

    constructor() {
        this.root = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        if (this.length==0) {
            this.root = new Node(item, undefined);
        } else {
            let existingNode = this.root;
            this.root = new Node(item, existingNode);
        }
        this.length += 1;
    }
    insertAt(item: T, idx: number): void {
        if (idx>=this.length) {
            // pushing out of zone
            return ;
        } else if(idx==0) {
            let tmp = this.root
            this.root = new Node(item, tmp);
        } else {
            let current = this.root;
        }
    }
    append(item: T): void {
        let newNode = new Node(item, undefined);
        if (this.length==0) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (current?.next != undefined) {
                current = current.next;
            }
            if (current != undefined) {
                current.next = newNode;
            } else {
                current = newNode;
            }
        }
        this.length += 1;
    }
    remove(item: T): T | undefined {
        if (this.length<1) {
            return undefined;
        } else {
            if (this.root?.value==item) {
                this.root = this.root.next;
                this.length -=1;
                return item;
            } else {
                let prev = this.root;
                let current = prev?.next;
                while(current!=undefined) {
                    if(current.value!=item) {
                        prev = current;
                        current = current.next;
                    } else {
                        prev = current.next;
                        this.length -=1;
                        return item;
                    }
                }
            }
            return undefined
        }
    }
    get(idx: number): T | undefined {
        if (idx>=this.length) {
            return undefined;
        } else {
            let current = this.root;
            for (let i=0; i<this.length; i++) {
                if (i==idx) {
                    return current?.value;
                }
                current = current?.next;
            }
        }
        return undefined;
    }
    removeAt(idx: number): T | undefined {
        if (idx>=this.length) {
            return undefined;
        } else if (idx==0) {
            let tmp = this.root;
            this.root = this.root?.next;
            this.length -= 1;
            if (tmp==undefined) {
                return undefined
            } else {
                return tmp.value;
            }
        } else {
            let current = this.root;
            for (let i=1; i<this.length+1; i++) {
                if (i==idx) {
                    break;
                }
                current = current?.next;
            }
            let tmp = current?.next;
            if (current!=undefined) {
                current.next = current?.next?.next;
            } else {
                return undefined;
            }
            this.length-=1;
            if (tmp==undefined) {
                return undefined;
            } else {
                return tmp.value;
            }
        }
    }
}