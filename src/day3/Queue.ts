type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    constructor() {
        this.head=this.tail=undefined;
        this.length=0;
    }

    enqueue(item: T): void {
        let newNode = {value: item} as Node<T>;
        this.length+=1;
        if (this.tail==undefined) {
            this.tail = this.head = newNode;
            this.length = 1
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }
    deque(): T | undefined {
        if (this.head == undefined) {
            return undefined;
        }
        this.length-=1;
        const currHead = this.head;
        this.head = this.head.next;
        currHead.next = undefined;

        if (this.length==0) {
            this.tail = undefined;
        }


        return currHead.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}