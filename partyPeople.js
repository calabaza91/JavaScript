var guest = prompt("What is your name?");

var partyPeople = ['Caleb', 'Matt', 'Jamal', 'Jaylay', 'Peepaleep'];

if(partyPeople.includes(guest)){
    alert("Come on in, " + guest + "!");
}else{
    alert("Sorry, your name is not on the list.")
}

