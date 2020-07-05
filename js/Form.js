class Form {

  constructor() {
    this.name = createDiv("Name"), this.nameInput = createInput(""),
    this.mail = createDiv("E-Mail-ID"), this.mailInput = createInput(""),
    this.age = createDiv("Age"), this.ageInput = createInput(""),
    this.mbn = createDiv("Mobile Number"), this.mbnInput = createInput(""),
    this.weight = createDiv("Weight"), this.weightInput = createInput(""),
    this.height = createDiv("Height"), this.heightInput = createInput(""),
    this.button = createButton('SUBMIT'),
    this.title = createDiv("Please Enter Your Details."),
    this.reset = createButton("Reset");
    this.everything = [this.button,this.title,this.name,this.nameInput,this.mail,this.mailInput,this.age,this.ageInput,this.mbn,this.mbnInput,this.weight,this.weightInput,this.height,this.heightInput];
    this.name.parent('#canvascontainer');
  }

  hide(){
    // this.greeting.hide();
    // this.greeting2.hide();
    this.button.hide();
    this.nameInput.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Please Enter Your Details.");
    this.title.position(90,70);

    this.name.position(90,110), this.nameInput.position(140,110),
    this.mail.position(65,150), this.mailInput.position(140,150),
    this.age.position(105,190), this.ageInput.position(140,190),
    this.mbn.position(30,230), this.mbnInput.position(140,230),
    this.weight.position(80,270), this.weightInput.position(140,270),
    this.height.position(83,310), this.heightInput.position(140,310),
    this.button.position(30,350), this.reset.position(30,390);

    alert("Before playing  this game please press the reset button and refresh the page.\n\nAttention: You need four players to play this game at the same pc.\n\nFirst enter your details and then click 'Submit' and then click 'Go' to start the game.\n\nPress Arrow keys to move the first car.\nPress 'W', 'A', 'S', 'Z' to move the second car.\nPress 'R', 'D', 'F', 'C' to move the third car.\nPress 'Y', 'G', 'H', 'B' to move the fourth car.\n\nIf you hit another car you lose.");

    this.button.mousePressed(()=>{
      for(var i = 0; i < this.everything.length; i++) {
        this.everything[i].hide();
      }

      player.name = this.nameInput.value();
      player.mail = this.mailInput.value();
      player.age = this.ageInput.value();
      player.mbn = this.mbnInput.value();
      player.weight = this.weightInput.value();
      player.height = this.heightInput.value();

      playerCount++;
      player.index = playerCount;

      player.update();
      player.updateCount(playerCount);

      // this.greeting = createDiv("Hello " + player.name + "   Please see below the canvas.");
      // // this.greeting2 = createDiv("Please wait for the other players to come.")      
      // // this.greeting2.position(2,40);
      // this.greeting.position(2,2);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      gameState = 0;
      game.update(0);
    })
  }
}
