  let randomNumber = math.floor(math.random*100)+1;
       const guesses = document.querySelector(".guesses");
       const lastResult=document.querySelector(".lastResult");
       const lowOrHigh = document.querySelector(".lowORHigh");
       const guessSubmit = document.querySelector(".guessSubmit");
       const guessField = document.querySelector(".guessField");

       let guessCount =1;
       let resetButton;