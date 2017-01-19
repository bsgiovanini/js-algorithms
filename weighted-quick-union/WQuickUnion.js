export default class WQuickUnion {
    
    constructor(n) {
        this.sw = [];
        this.id = [];
        for(let i = 1; i <= n; i++ ) {
            this.sw[i] = 1;
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
            if (this.sw[rP] < this.sw[rQ]) {
                this.id[rP] = rQ; //root of p <= root of q
                this.sw[rQ] += this.sw[rP]; //q tree size += p tree size
            } else {
                this.id[rQ] = rP; //root of q <= root of p
                this.sw[rP] += this.sw[rQ]; //p tree size += q tree size
            }
			
            this.counter--;
		}

		return this;
    }

    isConnected(p, q) {
    	return this.root(p) === this.root(q);
    }


}