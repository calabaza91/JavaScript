function bottlesOfBeerOnTheWall(){
    var num = 99;
    while(num>=1){
        console.log(num + " bottlesOfBeerOnTheWall, " + num + " bottlesOfBeer!");

        num--;
      if(num === 0){
        console.log("Take one down, pass it around, no more bottlesOfBeerOnTheWall!");
      }else{
          console.log("Take one down, pass it around, " + num + " bottlesOfBeerOnTheWall!");
      }
    }
    num = 99;
    console.log("No more bottlesOfBeerOnTheWall, no more bottlesOfBeer!\nGo to the store and buy some more, " + num + " bottlesOfBeerOnTheWall");

}

bottlesOfBeerOnTheWall();