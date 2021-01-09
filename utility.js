const STAKE=100;
const BET=1;
console.log("Welcome to gambling simulation");
class Utility {
    simulateGambling=()=>{
        let random=Math.floor(Math.random() * 2);
        if (random==BET) {
            console.log("Gambler wins");
        } else {
            console.log("Gambler Looses");
        }

    }
    
    
}




module.exports = new Utility();