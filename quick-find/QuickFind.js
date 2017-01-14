export default class QuickFind {
    
    constructor(n) {
        this.id = [];
        for(let i = 1; i <= n; i++ ) {
            this.id[i] = i;
        }
        this.counter = n;
    }
    
    find (p) { return this.id[p] }

    union(p,q) {
    	
    	let pID = this.find(p);
		let qID = this.find(q);

		if (pID !== qID) {
			for (let i = 1; i < this.id.length; i++)
				if (this.id[i] == pID) this.id[i] = qID;
			this.counter--;
		}

		return this;
    }

    isConnected(p, q) {
    	return this.find(p) === this.find(q);
    }


}