var total = 140;
var message = prompt("Compose your tweet:");
var dif = total - message.length;
var msgUnder40 = message.slice(0,140);
//alert("You have written " + message.length + " words out of " + total + " words. You have " + dif  + " words left.");
alert(msgUnder40);
alert(prompt("Compose your tweet:").slice(0,140));


