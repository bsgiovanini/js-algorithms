export default class MergeSort {
    
    constructor(array, comparator = null) {
        if(!Array.isArray(array)) {
            throw new Error("invalid array");
        }
        
        if (comparator !== null && typeof(comparator) !== 'function') {
            throw new Error("invalid comparator");
        }
        if (comparator !== null && typeof(comparator) === 'function' && comparator.length !== 2) {
            throw new Error("invalid comparator");
        }
        
        this.array = array;
        this.comparator = comparator != null? comparator: this.comparatorDefault;
        
    }
    
    
    
    comparatorDefault(item1, item2) {
        return (item1 < item2)? -1: (item1 > item2)? 1 : 0;
    }
    
    merge(array, low, mid, hi) {
       
       let aux = [...array];
       
       let i = low, j = mid+1;
       
       for(let k = low; k <= hi; k++) {
           if (i > mid) array[k] = aux[j++];
           else if (j > hi) array[k] = aux[i++];
           else if (this.comparator(aux[j],aux[i]) < 0) array[k] = aux[j++];
           else array[k] = aux[i++];
       } 

    }

    sort() {
        this._sort(this.array, 0, this.array.length-1);
        return this.array;
    }
    
    _sort(array, lo, hi) {
        if (hi <= lo) return;
        let mid = Math.floor(lo + (hi - lo)/2);
        this._sort(array, lo, mid);
        this._sort(array, mid+1, hi);
        this.merge(array, lo, mid, hi);
        
    }
    
    sortBottomUp() {
        const N = this.array.length;
        
        for(let sz = 1; sz < N; sz = sz+sz) {
            for(let lo = 0; lo < N-sz; lo += sz+sz) {
                this.merge(this.array, lo, lo+sz-1, Math.min(lo+sz+sz-1, N-1));
            }
        }
        
        return this.array;
    }
    
    
}