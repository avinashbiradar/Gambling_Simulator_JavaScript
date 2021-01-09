console.log("Welcome to gambling simulation");
class Utility {
    simulateGambling=()=>{ 
         let bet=1;
         let stake=100;      
         let day = 1;
         let winAmount;
         let lostAmount;
         while(day<=30){
            let  winStake = 100;
            let  lostStake = 100;
        while(winStake<150 || lostStake>50){
        let random=Math.floor(Math.random() * 2);
        if (random==bet) {
            console.log("Gambler wins");
            winStake=winStake+bet;
            console.log(winStake);
            
        } else {
            console.log("Gambler Looses");
             lostStake=lostStake-bet;
             console.log(lostStake);  
        }
    }
     winAmount=winStake-stake;
     lostAmount=stake-lostStake;
     console.log("Win amount of day"+day+" is :"+winAmount+" and Lost amount of day"+day+" is :"+lostAmount);
     if( winAmount > lostAmount ){
        console.log("Day"+day+" win by "+(winAmount-lostAmount));
        }
     else{
        console.log("Day"+day+" lost by "+(lostAmount-winAmount));
        }
     day=day+1;
    }
  }
}

module.exports = new Utility();