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
    comment()
    document.getElementById("draw").style.display= "block";
    document.getElementById("start").style.display="none";
}

function draw(){
    cards.push(Math.round(Math.random()*6+1));
    sum = sum + cards[cards.length-1];
    document.getElementById("cards").innerHTML="Cards: " + cards;
    document.getElementById("sum").innerHTML="Sum: " + sum;
    comment()
}
function comment(){
    if (sum <= 20){
        document.getElementById("command").innerHTML= "Draw another card";
    }
    else if (sum == 21){
        document.getElementById("command").innerHTML= "You WIN!";
        document.getElementById("draw").style.display= "none";
        document.getElementById("reaload").style.display= "block";
    }
    else{
        document.getElementById("command").innerHTML= "You LOSE!";
        document.getElementById("draw").style.display= "none";
        document.getElementById("reaload").style.display= "block";
    }
}
function reaload(){
    window.location.reload();

}
