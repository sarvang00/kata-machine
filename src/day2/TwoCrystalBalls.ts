export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpAmt = Math.floor(Math.sqrt(breaks.length));
    let i=jumpAmt

    for(; i<breaks.length; i+=jumpAmt) {
        if (breaks[i]) {
            break;
        }
    }
    
    i-=jumpAmt

    for(let j=0; j< jumpAmt && i<breaks.length; j++, i++) {
        if(breaks[i]) {
            return i;
        }
    }

    return -1;
}