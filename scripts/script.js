let word = prompt("Welcome to Hangman! Player 1, please enter a word for Player 2 to guess.").toUpperCase();
// note the switch toUpperCase(), we want to always work in upper case letters to avoid confusing 'a' and 'A' as unequal.

let revealedLetters = new Array(word.length); // creates an array with as many elements as word has characters. Each index of revealedLetters will correspond to a character in word, and if revealedLetters[n] is truthy, then word[n] has been correctly guessed.
revealedLetters.fill(false);

const maxStrikes = 6; 
let strikes = 0; // the number of incorrect guesses made so far

let strikeLetters = new Array(maxStrikes); // this will contain every letter that has been incorrectly guessed


drawWordProgress(); // run this now, to draw the empty word at the start of the game.




// Manipulates the DOM to write all the strike letters to the appropriate section in hangman.html
function drawStrikeLetters() {
    // your DOM manipulation code here
    // should create a String from strikeLetters and put that into the content of some element.

    console.log("---- drawStrikeLetters")
}

// Manipulates the DOM to write the successfully guessed letters of the word, replacing them with dashes if not yet guessed
function drawWordProgress() {
    // your DOM manipulation code here
    // should iterate over revealedLetters, and if the value at each index is truthy, print the corresponding letter from word. Otherwise, it should print a -.

    let auxWord = "";

    for(let i=0; i < revealedLetters.length;i++) {
        if (revealedLetters[i] === true) {
            auxWord += word[i];
        }
        else {
            auxWord += "-";
        }
    }

    console.log("---- drawWordProgress")
    console.log(auxWord);

    const elem = document.getElementById("wordSection");
    elem.innerHTML = auxWord;
    console.log(elem);
}

// Manipulates the DOM to update the image of the gallows for the current game state.
function drawGallows() { 
    // your DOM manipulation code here 
    // should update an <img> element in the appropriate hangman.html section to point to "images/strike-"+strikes+".png"

    const image = document.getElementById("gallowsImage");
    image.src = "images/strike-" + strikes + ".png";

    console.log("---- drawGallows")
}

function updateGame(guessWord) {

    let isLetterOnWord = false;

    for(let i=0; i < word.length; i++) {
        if (word[i] === guessWord) {
           revealedLetters[i] = true;
           isLetterOnWord = true;
        }
    }

    if (isLetterOnWord === false) {
        // Strike
        strikes ++; // strikes = strikes + 1;
    }
}


function processGuess(event) {
    event.preventDefault();

    console.log("---- processGuess")

    let guess = document.getElementById("guessLetter").value.toUpperCase(); // the value of the <form>'s <input> element, toUpperCase()!
    console.log(guess);

    updateGame(guess);



    drawWordProgress();
    drawStrikeLetters();
    drawGallows();


    if (strikes < maxStrikes) {
        // game logic goes here
    } else {
        alert("The game is over!");
    } 

    return false;
}