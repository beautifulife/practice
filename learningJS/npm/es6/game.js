// basic function;
function rand(m,n){
  return m+ Math.floor((n-m+1)*Math.random());
}
function randFace() {
  return ["crown", "anchor","heart", "spade", "club", "diamond"][rand(0,5)];
}

// start Game
console.log("welcome to the game");

let money = 50;
let round = 0;

while(money > 1 && money < 100){
  round ++;
  console.log(`round ${round}:`);
  console.log(`\tstarting funds: ${money} pence`);
  
  //money bet
  let bets = {"crown": 0, "anchor":0, "heart":0, "spade":0, "club":0, "diamond":0};
  let totalBet = rand(1, money);
  if (new Date().getDay() === 3){
    totalBet = 1;
  } else if (totalBet === 7){
    totalBet = money;
    bets.heart = totalBet;
  } else {
    // devide betting-money
    let remaining = totalBet;
    do {
      let bet = rand(1,remaining);
      let face = randFace();
      bets[face] = bets[face] + bet;
      remaining = remaining - bet;
    } while (remaining > 0);
  }
  money = money - totalBet;
  console.log(`\tbets: ` + 
    Object.keys(bets).map(face=> `${face}: ${bets[face]} pence`).join(', ') + 
    `(total: ${totalBet} pence)`);

  // rolling dice
  const hand = [];
  for (let roll=0; roll<3; roll++){
    hand.push(randFace());
  }
  console.log(`\thand: ${hand.join(', ')}`);

  // get winning-money
  let winnings = 0;
  for (let die=0; die<hand.length; die++){
    let face = hand[die];
    if (bets[face] > 0) {
      winnings = winnings + bets[face];
    }
  }
  money = money + winnings*2;
  console.log(`\twinnings: ${winnings} pence`);
}
console.log(`\tending money: ${money} pence`);