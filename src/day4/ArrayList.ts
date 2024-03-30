export default class ArrayList<T> {
    public length: number;
    public values: (T|undefined)[];

    constructor(len:number=0) {
        this.length=len;
        this.values= new Array(len);
    }

    prepend(item: T): void {
        let newArrList = new Array(this.length+1);
        newArrList[0] = item;
        for(let i=0; i<this.length; i++) {
            newArrList[i+1] = this.values[i];
        }
        this.values = newArrList;
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        for (let i=0; i<this.length; i++) {
            if (i==idx) {
                this.values[i]=item;
                return;
            }
        }
    }
    append(item: T): void {
        for (let i=0; i<this.length; i++) {
            if (this.values[i]==undefined) {
                this.values[i]=item;
                return;
            }
        }
        let newArrList = new Array(this.length+1);
        for(let i=0; i<this.length; i++) {
            newArrList[i] = this.values[i];
        }
        newArrList[this.length]=item;
        this.values = newArrList;
        this.length++;
    }
    remove(item: T): T | undefined {
        let found: boolean = false;
        for (let i=0; i<this.length; i++) {
            if (!found && this.values[i]==item) {
                found = true;
                this.values[i] = undefined;
                continue;
            }
            if (found) {
                this.values[i-1]=this.values[i];
            }
        }
        if (found) {
            this.values[this.length-1]=undefined;
            this.length--;
            return item;
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        for(let i=0; i<this.length; i++) {
            if (i==idx) {
                return this.values[i];
            }
        }
        return undefined;
    }
    removeAt(idx: number): T | undefined {
        let found: T|undefined = undefined;
        for(let i=0; i<this.length; i++) {
            if (!found && i==idx) {
                found = this.values[i];
                this.values[i]=undefined;
                continue;
            }
            if (found) {
                this.values[i-1]=this.values[i];
            }
        }
        if(found) {
            this.values[this.length-1]=undefined;
            this.length--;
        }
        return found;
    }
}