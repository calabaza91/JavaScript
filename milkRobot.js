function getMilk(money, costPerBottle) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("Buy " + calcBottles(money, costPerBottle) + " bottles of milk.")
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  console.log("Change: $" + calcChange(money, costPerBottle));
}


function calcBottles(startingMoney, costPerBottle){
    var milkQnty = Math.floor(startingMoney/ costPerBottle);
    return milkQnty;
}

function calcChange(startingMoney, costPerBottle) {
    var change = startingMoney % costPerBottle;
    return change;
}

getMilk(10, 3);

