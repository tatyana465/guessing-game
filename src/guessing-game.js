class GuessingGame {
    
    constructor() {

    }

    setRange(min, max) {
      this.minMax=[min,max];
      this.range=max-min;
    }

    guess() {
      this.number=Math.ceil(this.minMax[0]+this.range/2);  
      return this.number;
    }

    lower() {
      this.minMax[1]=this.number;
      this.range=this.minMax[1]-this.minMax[0];
       
    }

    greater() {
      this.minMax[0]=this.number;
      this.range=this.minMax[1]-this.minMax[0];
    }
}

module.exports = GuessingGame;
