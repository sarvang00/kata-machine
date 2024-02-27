export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        let mid = Math.floor(low + (high - low) / 2);
        let v = haystack[mid];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            high = mid;
        } else {
            low = mid + 1;
        }

    } while (low < high);

    return false;
}