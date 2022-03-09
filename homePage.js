console.log("it's working fine");

// main functions of typing website
let input = document.querySelector(".input");
input.focus();
let containerOfText = document.querySelector(".changeable");
let texts =
  "Home In wise times we accuse pleasure, for we accuse life's pain and pain by toil, and it despises the duties of our very self, no one is bound to welcome his chosen pleasures, he wants the main things! They abandon, choose, follow, escape, blinded, catch him, encounter a maze, hate him, and escape? We blame him for the consequences or the pleasure to follow, he takes it, makes the toughest choices, we can avoid the pain, he is bound to the pain, and he loves rejecting! The flight to the property had been stated. So that any mistake you encounter in choosing the right offices, flatteries, and pleasures, is no less important to escape! You encounter the very pains of being freed from the duties of hatred, rejecting the caress of the softness is bound to provide for the covetousness that is corrupted by the desire to love, for the pleasure of this person is often less likely to engage in additional ways! Commodus deem error is to seek whither he or he obtains at him nor love to be repelled, and therefore often open the most worthy distinction, and accepts the right debts of some one, no one has said anything, no one. I don't know how it hates it's never easy flight, especially those who accuse the body, it despises the choice of hardships! And because he repels the exercise of these freedoms, no right accusers accuse him, we accuse him of hard work in discovering his labors; Our pain manufacturers choose to choose between pain and pain training to prevent the difference between being spoiled by happy moods. You encounter the whole of the present system, and we think it is none of these hard times in which to choose one's accepted pleasures, and never be blinded by any of the facts, and abandon the practice of making it easy to please our ancestors. There is a right to hate, except those who choose the pain of the pain of the body, and the wise man often abandon that pain from the troubles! The pleasure of taking responsibility for the consequences the inventor accepts, prevents pain, and hates to make the right choices, it's extremely hard for us, rather than that. The choice to be chosen and the admirers of them fall into the very moment to obtain the very loose ends, from how easy is it, to welcome them by the right of greater exertion, so that when a wise man discovers some pleasures, all pleasures are advantageous? We deem it shunned by reason, he rejects it here! He hates to choose the advantage of abandoning him, for he often avoids taking on all kinds of responsibilities.";
let copyText = texts.split(" ");
let editedData = (containerOfText.innerHTML = copyText.join(" "));
var wordCount = editedData.split(" ");
let words = 0;
let error = 0;
let mainError = 0;
let copyOfNum;

// time over page functions

const scorePage = document.querySelector(".aboveScreenPage");
const timeBox = document.getElementById("time");
let time = 60;
const firstLetter = texts.split(" ");

input.addEventListener("keydown", () => {
  if (firstLetter[0] == input.value) {
    setInterval(() => {
      time--;
      timeBox.innerHTML = time;
      if (time == 0) {
        scorePage.style.display = "flex";
        time = 60;
      }
    }, 1000);
  }
});

setInterval(() => {
  let input = document.querySelector(".input").value;
  window.addEventListener("keydown", (e) => {
    if (e.keyCode == 32) {
      if (
        wordCount[0] != input.value &&
        input.value != "" &&
        input.value != " "
      ) {
        // console.log("not working successfully");
      }
    }
  });
}, 100);

const cut = texts.split(" ");
for (let a = 0; a <= cut.length; a++) {
  // console.log(a);
  const b = a - 1;
  setTimeout(() => {
    console.log(b);
  }, 4000);
}

// Formulas are below

// WPM => All typed words / 5 = ? / Time = Answer
// Net WPM => Answer - Error
// Accuracy => (Net WPM / WPM)*100 = Ans %
let increase = 1;
setInterval(() => {
  let input = document.querySelector(".input").value;
  window.addEventListener("keydown", (e) => {
    if (e.keyCode == 32) {
      if (input == wordCount[0]) {
        words++;

        // WPM => All typed words / 5 = ? / Time = Answer
        let stepOne = words / 5;
        const wPM = stepOne / time;
        console.log(`WPM is ${wPM}`);

        // Net WPM => Answer - Error
        const netWPM = wPM - error;
        console.log(`Net WPM is ${netWPM}`);

        // Accuracy => (Net WPM / WPM)*100 = Ans %

        const accuracy = (netWPM / wPM) * 100;
        console.log(`Accuracy is ${accuracy}%`);

        document.getElementById("accuracy").innerHTML = words;
      }
    }
  });
}, 0.1);

// words checker and written words disappear functions

setInterval(() => {
  let input = document.querySelector(".input").value;
  window.addEventListener("keydown", (e) => {
    if (e.keyCode == 32) {
      if (input == wordCount[0]) {
        setTimeout(() => {
          document.querySelector(".input").value = "";
        }, 0.1);

        wordCount.shift();
        copyText.shift();

        let editedData = (containerOfText.innerHTML = copyText.join(" "));
        // console.log("it has removed ");
      }
    }
  });
}, 0.1);
