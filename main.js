let sum = 0;
let cards=[];
function start(){
    let random= Math.random()*6+1;
    let card1= Math.round(random);
    let card2= Math.round(random);
    cards.push(card1);
    cards.push(card2);
    document.getElementById("cards").innerHTML="Cards: " + cards;
    for (let i=0; i<cards.length; i++) {
    sum = sum + cards[i];
}
    document.getElementById("sum").innerHTML="Sum: " + sum;
}

function draw(){
    cards.push(Math.round(Math.random()*6+1));
}