let STAKE=100;
const BET=1;
console.log("Welcome to gambling simulation");
class Utility {
    
    simulateGambling=()=>{       
         let winStake=100;
         let lostStake=100;
 
        let random=Math.floor(Math.random() * 2);
        if (random==BET) {
            console.log("Gambler wins");
            winStake=winStake+BET;
            STAKE = STAKE+(STAKE/2);
            console.log(STAKE);
        } else {
            console.log("Gambler Looses");
             lostStake=lostStake-BET;  
             STAKE = STAKE/2;
             console.log(STAKE);          
        }
    }
    
}





module.exports = new Utility();