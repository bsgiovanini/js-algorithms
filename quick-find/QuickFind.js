export default class QuickFind {
    
    constructor(n) {
        this.id = [];
        for(let i = 1; i <= n; i++ ) {
            this.id.push(i);
        }
    }
    
    find (p) { this.id[p] }

}