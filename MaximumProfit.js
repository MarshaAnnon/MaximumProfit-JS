class MaximumProfit {
    // input = [45, 24, 35, 31, 40, 38, 11];

    find(input){
        let buyPrice = 0;
        let sellPrice = 0;
        let maxProfit = -1; //default for maxProfit
        for(let i = 0; i < input.length -1; i++) {
            

            if (input[i] < input[i+1]) {
                buyPrice = input[i]
                sellPrice = input[i+1]
                
                let profit = (sellPrice - buyPrice);
                
                if (profit > maxProfit) {
                    maxProfit = profit;
                }
            }

            if (buyPrice > input[i+1]) {
                buyPrice = input[i+1];
            } else {
                sellPrice = input[i+1];
            }
            
        }
        // console.log(maxProfit)//maxProfit is 24
        return maxProfit;
    }
}

module.exports = MaximumProfit;
