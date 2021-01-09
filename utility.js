let STAKE=100;
const BET=1;
console.log("Welcome to gambling simulation");
class Utility {
    
    simulateGambling=()=>{       
         let winStake=100;
         let lostStake=100;
        while(winStake<150 || lostStake>50){
        let random=Math.floor(Math.random() * 2);
        if (random==BET) {
            console.log("Gambler wins");
            winStake=winStake+BET;
            console.log(winStake);
            
        } else {
            console.log("Gambler Looses");
             lostStake=lostStake-BET;
             console.log(lostStake);  
                      
        }
     } 
     if(winStake==150){
        console.log("Gambler win 50% of stake");
        }
        else{
            console.log("Gambler loose 50% of stake");
        }
    }
    
}





module.exports = new Utility();