function start(){
    let random= Math.random()*6+1;
    let sum= Math.round(random);
    document.getElementById("sum").innerHTML="Sum: " + sum;
}
