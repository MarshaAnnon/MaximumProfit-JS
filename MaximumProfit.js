class MaximumProfit {
    // input = [45, 24, 35, 31, 40, 38, 11];

    find(input){
        let buyPrice = 0;
        let sellPrice = 0;
        let maxProfit = -1; //default for maxProfit
        let changeBuyIndex = true;

        for(let i = 0; i < input.length -1; i++) {
            sellPrice = input[i+1]
            if(changeBuyIndex) {
                buyPrice = input[i];
            } 
            if(sellPrice < buyPrice) {
                changeBuyIndex = true;
                continue; // this will break out of the condition out of the loop. (speed efficient)
            } else {
                let tempProfit = sellPrice - buyPrice;
                if(tempProfit > maxProfit) {
                    maxProfit = tempProfit;
                }
                changeBuyIndex = false;
            }
        }
        return maxProfit;
    }
}

module.exports = MaximumProfit;
