export default class BinarySearch {
    
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

    search(item) {
        let low = 0;
        let high = this.array.length - 1;
        while (low <= high) {
            let mid = Math.floor(low + (high - low)/2);
            if (this.comparator(item,this.array[mid]) < 0) high = mid - 1; 
            else if (this.comparator(item, this.array[mid]) > 0) low = mid + 1;
            else return mid;
        }
        return -1;
    }
    
    searchRecursive(item) {
        let low = 0;
        let high = this.array.length - 1;
        return this._doSearch(low, high, item); 
    }
    
    _doSearch(low, high, item) {
        
        if (low > high) {
            return -1;
        }
        let mid = Math.floor(low + (high - low)/2);
        if (this.comparator(item,this.array[mid]) < 0) return this._doSearch(low, mid -1, item);
        else if (this.comparator(item, this.array[mid]) > 0) return this._doSearch(mid+1, high, item);
        else if (this.comparator(item, this.array[mid]) === 0) return mid;
    }
    
}