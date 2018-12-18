prompt("What is your name?");
prompt("What is their name?");


if(calcLove() > 70){
    alert("You have a " + calcLove() + "% match! You love each other like Kanye loves Kanye.<3");
} else if (calcLove() > 30 && calcLove() <= 70) {
    alert("You have a " + calcLove() + "% match!");
} else{
    alert("You have a " + calcLove() + "% match! You go together like oil and water.");
}


//Random Number 1-100  //Dice Roll (num = num * 6)
function calcLove(){
    var num = Math.floor(Math.random() * 100) + 1;
    //num = num * 100;
    //num = Math.floor(num) + 1;
    return num;
}