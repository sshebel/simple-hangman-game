var totalIncorrectClicks = 0;//Global variables
var totalCorrectClicks = 0;
var numberOfPVisible = 0; 



var reloadGame = function() {
    location.reload();
};

var clickLetter = function() {


 var clickedLetter = document.getElementById(this.id); 
  var tempWord = localStorage["wordGuess"];
   
  /////////////
  var word = new String();
  for (var k=0; k<tempWord.length;k++)
    {
      if (k%2 === 0 )
        {
          word = word + tempWord[k];

        }
    }



    var compareSuccess = false;
    for (var i = 0; i < word.length; i++) {

      if (word[i] == clickedLetter.innerHTML) 
      {

          var pId = "pid" + (i+1);
          var pNode = document.getElementById(pId);
          var innerLetter = pNode.innerHTML;
          
          if (pNode.style.visibility == "visible")
          {
              compareSuccess = true;
          }
          
         
          if (pNode.style.visibility != "visible")
          {
          pNode.style.visibility = "visible";
          compareSuccess = true;
          numberOfPVisible = numberOfPVisible + 1;
          
              
              
            if ( numberOfPVisible == word.length)
             {
                
               var gameOver = document.getElementById('gameOver');
               gameOver.innerHTML = "Well Done!";
               gameOver.style.visibility = "visible";
               var playButton = document.getElementById('play');
               playButton.style.visibility = "visible";
             }
          }
          

      }

    }
  

    if (compareSuccess === false)
    {
        totalIncorrectClicks++;
           clickedLetter.style.backgroundColor = "hsla(327, 13%, 28%, 1)";
        clickedLetter.style.borderRadius = "50px";
        clickedLetter.style.cursor =  "default";
        clickedLetter.onclick = "null";
    }

    if (compareSuccess === false && totalIncorrectClicks <=7)
    {
        if (totalIncorrectClicks == 1)
        {
        var face = document.getElementById('face');
        face.style.visibility = "visible";
        }

         if (totalIncorrectClicks == 2)
        {
        var body = document.getElementById('body');
        body.style.visibility = "visible";
        }

         if (totalIncorrectClicks == 3)
        {
        var leftArm = document.getElementById('left-arm');
        leftArm.style.visibility = "visible";
        }

         if (totalIncorrectClicks == 4)
        {
        var rightArm = document.getElementById('right-arm');
        rightArm.style.visibility = "visible";
        }

         if (totalIncorrectClicks == 5)
        {
        var leftLeg = document.getElementById('left-leg');
        leftLeg.style.visibility = "visible";
        }

         if (totalIncorrectClicks == 6)
        {
        var rightLeg = document.getElementById('right-leg');
        rightLeg.style.visibility = "visible";
        }

        if (totalIncorrectClicks == 7)
        {
            var gameOver = document.getElementById('gameOver');
            gameOver.innerHTML = "Game Over!" + "<br>" +
              "The word is: " + word + "<br>" + "(PS: I am not actually being hanged!)";


            gameOver.style.visibility = "visible";
             var playButton = document.getElementById('play');
        playButton.style.visibility = "visible";

        }
    }


};

var createAlphabets = function () {
  var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (var i = 0; i < alphabets.length; i++)
  {
    var anchorNode = document.createElement('a');
    var idanch = "id" + (i+1);


    anchorNode.setAttribute('id', idanch);


    anchorNode.innerHTML = alphabets[i];

    anchorNode.setAttribute('href', "#");


    var alphaDiv = document.getElementById('alphabet');

    alphaDiv.appendChild(anchorNode);

    if (i == 11 || i == 22)
      {
        alphaDiv.innerHTML = alphaDiv.innerHTML + "<br>";

      }


  }
};

var selectWord = function() {

  var wordArray = ["lamprophony", "ethereal", "sun", "clouds", "evanescent", "munchkin", "exultant", "limerance", "segue", "serendipity", "ineffable", "transcendent"];
  var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  var splitRandomWord = randomWord.split('');

  return splitRandomWord;

};


var displayWord  = function(word) {


  for (var i = 0; i < word.length; i++) {


    var dispWordDiv = document.getElementById('beingGuessedWord');


    var pNode = document.createElement('p');

    pNode.innerHTML = word[i];
    var id = "pid" + (i+1);

      pNode.setAttribute('id', id);
      pNode.setAttribute('class', "letterp");  
      pNode.style.visibility = "hidden";
      pNode.style.display = "inline-block";

    dispWordDiv.appendChild(pNode);

  }

  var dispWordDiv  = document.getElementById('beingGuessedWord');
  dispWordDiv.innerHTML = dispWordDiv.innerHTML + "<br>"; 

  for (var i = 0; i < word.length; i++) {
      var dispWordDiv  = document.getElementById('beingGuessedWord');
      var empty = document.createElement('p');
      empty.setAttribute('id', 'dash');
      empty.innerHTML = "___";
      empty.style.display = "inline";



    dispWordDiv.appendChild(empty);
  }
  };

  var word = selectWord();
  createAlphabets();
  displayWord(word);
  for (var i = 0; i < 27 ; i++) {
  var id = "id" + ( i + 1 );
  var anchor  = document.getElementById(id);
  localStorage["wordGuess"] = word; 

  anchor.onclick = clickLetter;
}
