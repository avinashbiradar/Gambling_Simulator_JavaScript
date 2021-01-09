
const BET=1;
console.log("Welcome to gambling simulation");
class Utility {
    
    simulateGambling=()=>{ 
        let stake=100;      
         let day = 1;
         let winAmount;
         let lostAmount;
         while(day<=20){
            let  winStake = 100;
            let  lostStake = 100;
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
     winAmount=winStake-stake;
     lostAmount=stake-lostStake;
     console.log("Win amount of day"+day+" is :"+winAmount+" and Lost amount of day"+day+" is :"+lostAmount);
     day=day+1;
    }
  }
}

module.exports = new Utility();