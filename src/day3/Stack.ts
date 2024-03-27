type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private top?: Node<T>;

    constructor() {
        this.top = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.top = {value: item, next: this.top} as Node<T>;
        this.length+=1;
        return;
    }
    pop(): T | undefined {
        if (!this.top) {
            return undefined;
        }
        this.length-=1;
        const temp = this.top;
        this.top = this.top.next;
        return temp.value;
    }
    peek(): T | undefined {
        return this.top?.value;
    }
}