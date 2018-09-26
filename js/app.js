$("#title").append("<h1>Tomagatchi Game</h1>");

$("#enterName").on("click", () => {
  const $tomagatchiName = $("input").val();
    $(".display").prepend(`Name: ${$tomagatchiName}  `);
    $(".name-tomagatchi").remove();
}) 

$("#startButton").on("click", (e) => {
  $("img").attr("src", "images/Kid Goku gif.gif")
  startGame();
});


startGame = () => {
  // Scoreboard
  $(".display").append("<h2 id='hunger'>Hunger:( 0 )</h2>");
  $(".display").append("<h2 id='bed'>Sleepiness:( 0 )</h2>");
  $(".display").append("<h2 id='play'>Boredom:( 0 )</h2>");
  $(".display").append("<h3 id='age'>Age: 1</h3>");
  $(".display").append("<h3 id='timer'>Time: 1</h3>");

  // Buttons
  $("<button id='feedButton'>Feed Me!</button>").appendTo("#actionButtons");
  $("<button id='playButton'>Play With Me!</button>").appendTo("#actionButtons");
  $("<button id='lightButton'>Turn Off The Lights!</button>").appendTo("#actionButtons");
  

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

    death = (reason) => {
      clearInterval(timer);
      $("img").remove();
      $("#title").append("<img src='images/Dead_Goku_pic.jpg'>");
      setTimeout(() => {
        if(reason === "hunger"){
          alert("Damn Starvin Marvin, you dead!");
        } 
        if(reason === "boredom"){
          alert("You died of boredom! Game Over");
        }
        if(reason === "sleepiness"){
          alert("RIP Van Winkle");
        }
    },100)
      console.log("image works");
    }


    const moveGoku = () => {
      console.log('Please move gif!');
      $("#movement").velocity({"translateX": "900px"}, 1500, () => { 
          $("#movement").velocity({"translateX": "100px"}, 1500) 
       })
  };


    // $("img").replaceWith()
  // Time for the Timer!
  const timer = setInterval(() =>{
      tomagatchi.time++;
      //increases hunger level by 1 every 5 seconds
      if(tomagatchi.time % 2 === 0){
        tomagatchi.hunger = tomagatchi.hunger + 1;
      }
      if(tomagatchi.hunger >= 10){
        death("hunger");
        return;
        // location.reload();
      }
      //if levels get to 10 or more game over reload page
      // if (tomagatchi.sleepiness >= 10){
      //   window.alert("Game Over");
      // }
      if (tomagatchi.time % 4 === 0){
        tomagatchi.boredom = tomagatchi.boredom + 2;
      }
      if(tomagatchi.boredom >= 10){
        death("boredom");
        return;
        // location.reload();
      }
      if (tomagatchi.time % 6 === 0){
        tomagatchi.sleepiness = tomagatchi.sleepiness + 4;
      }
      if (tomagatchi.sleepiness >= 10){
        death("sleepiness");
        return;
        // location.reload();
      }
      if (tomagatchi.age === 2){
        $("#movement").attr("src", "images/Normal Goku gif.gif");
      }
      if (tomagatchi.age === 5){
        $("#movement").attr("src", "images/SSJ Goku gif.gif");
      }
    
      $('#timer').text('Time: ' + tomagatchi.time + 's');
      //this prints the hunger level 
      $('#hunger').text("Hunger:( " + tomagatchi.hunger + " )");
    
      $('#bed').text("Sleepiness:( " + tomagatchi.sleepiness + " )");
      //this prints the boredom level 
      $('#play').text("Boredom:( " + tomagatchi.boredom + " )");
      //this called the update age method 
      tomagatchi.updateAge();
      moveGoku();
    }, 1000)

    $("#startButton").remove();
}

  
  



























