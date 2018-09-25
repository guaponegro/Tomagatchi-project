$("#startButton").on("click", (e) => {
  startGame();
});



startGame = () => {
  class Pet {
    constructor(name, age, hunger, sleepiness, boredom, time){
      this.name = name;
      this.age = 1;
      this.hunger = hunger;
      this.sleepiness = sleepiness;
      this.boredom = boredom;
      this.time = 0;
      }
      eat() {
        //makes button click hunger method - 1.
        this.hunger--
      }
      
      rest() {
        //makes button click rest method - 1.
        this.sleepiness--
      }
      
      playMore() {
        //makes button click play method - 1.
       this.boredom--
      }
      
      updateAge() {
        //this make the age increase by 1 every 10 seconds
        if (this.time % 10 === 0){
          this.age++
        }
        //this prints the updated age to the page
        $('#age').text("Age: " + this.age)
        // 
      } 
  };
  
  const tomagatchi = new Pet("Pickachu", 1, 0, 0, 0);
  
  
  // Actions 
  $("#feedButton").on("click", (e) => {
      tomagatchi.eat()
    }); 
    
    
    $("#lightButton").on("click", (e) => {
      tomagatchi.rest()
    });
    
    
    $("#playButton").on("click", (e) => {
      tomagatchi.playMore()
    });
    
  
  // Time for the Timer!
  const timer = setInterval(() =>{
      tomagatchi.time++;
      //increases hunger level by 1 every 5 seconds
      if(tomagatchi.time % 5 === 0){
        tomagatchi.hunger = tomagatchi.hunger + 1;
      }
      if(tomagatchi.hunger >= 10){
        window.alert("Game Over");
        location.reload();
      }
      //if levels get to 10 or more game over reload page
      if (tomagatchi.sleepiness >= 10){
        window.alert("Game Over");
        location.reload();
      }
      if (tomagatchi.time % 7 === 0){
        tomagatchi.boredom = tomagatchi.boredom + 2;
      }
      if(tomagatchi.boredom >= 10){
        window.alert("Game Over");
        location.reload();
      }
      if (tomagatchi.time % 9 === 0){
        tomagatchi.sleepiness = tomagatchi.sleepiness + 3;
      }
      if (tomagatchi.sleepiness >= 10){
        window.alert("Game Over");
        location.reload();
      }
    
      $('#timer').text('Time: ' + tomagatchi.time + 's');
      //this prints the hunger level 
      $('#hunger').text("Hunger:( " + tomagatchi.hunger + " )");
    
      $('#bed').text("Sleepiness:( " + tomagatchi.sleepiness + " )");
      //this prints the boredom level 
      $('#play').text("Boredom:( " + tomagatchi.boredom + " )");
      //this called the update age method 
      tomagatchi.updateAge();
    }, 1000)

    $("#startButton").remove();
}

  
  



























