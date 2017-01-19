export default class QuickUnion {
    
    constructor(n) {
        this.id = [];
        for(let i = 1; i <= n; i++ ) {
            this.id[i] = i;
        }
        this.counter = n;
    }
    //Find component name
    root (p) { 
        while (p != this.id[p]) p = this.id[p];
        return p;
    }

    union(p,q) {
    	
    	let rP = this.root(p);
		let rQ = this.root(q);

		if (rP !== rQ) {
			
			this.id[rP] = rQ;
            this.counter--;
		}

		return this;
    }

    isConnected(p, q) {
    	return this.root(p) === this.root(q);
    }


}