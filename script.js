const sounds = {
  0: new Audio("./Sounds/A4.mp3"),
  1: new Audio("./Sounds/B4.mp3"),
  2: new Audio("./Sounds/C4.mp3"),
  3: new Audio("./Sounds/Db4.mp3"),
  4: new Audio("./Sounds/E4.mp3"),
  5: new Audio("./Sounds/F4.mp3"),
  6: new Audio("./Sounds/G4.mp3"),
  7: new Audio("./Sounds/A5.mp3"),
  8: new Audio("./Sounds/B5.mp3"),
  9: new Audio("./Sounds/C5.mp3"),
  10: new Audio("./Sounds/D5.mp3"),
  11: new Audio("./Sounds/Gb4.mp3"),
};
const buttons = document.querySelectorAll(".piano-button");
for (i = 0; i < 12; i++) {
  buttons[i].addEventListener("click", (event) => {
    event.target.classList.add("click");
    setTimeout(() => {
      event.target.classList.remove("click");
    }, 100);
    switch (event.target.innerHTML) {
      case "Q":
        sounds[0].currentTime = 0;
        sounds[0].play();
        break;
      case "W":
        sounds[1].currentTime = 0;
        sounds[1].play();
        break;
      case "E":
        sounds[2].currentTime = 0;
        sounds[2].play();
        break;
      case "R":
        sounds[3].currentTime = 0;
        sounds[3].play();
        break;
      case "T":
        sounds[4].currentTime = 0;
        sounds[4].play();
        break;
      case "Y":
        sounds[5].currentTime = 0;
        sounds[5].play();
        break;
      case "U":
        sounds[6].currentTime = 0;
        sounds[6].play();
        break;
      case "I":
        sounds[7].currentTime = 0;
        sounds[7].play();
        break;
      case "O":
        sounds[8].currentTime = 0;
        sounds[8].play();
        break;
      case "P":
        sounds[9].currentTime = 0;
        sounds[9].play();
        break;
      case "K":
        sounds[10].currentTime = 0;
        sounds[10].play();
        break;
      case "L":
        sounds[11].currentTime = 0;
        sounds[11].play();
        break;
    }
  });
}
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "Q":
      buttons[0].classList.add("click");
      setTimeout(() => {
        buttons[0].classList.remove("click");
      }, 100);
      sounds[0].currentTime = 0;
      sounds[0].play();
      break;
    case "W":
      buttons[1].classList.add("click");
      setTimeout(() => {
        buttons[1].classList.remove("click");
      }, 100);
      sounds[1].currentTime = 0;
      sounds[1].play();
      break;
    case "E":
      buttons[2].classList.add("click");
      setTimeout(() => {
        buttons[2].classList.remove("click");
      }, 100);
      sounds[2].currentTime = 0;
      sounds[2].play();
      break;
    case "R":
      buttons[3].classList.add("click");
      setTimeout(() => {
        buttons[3].classList.remove("click");
      }, 100);
      sounds[3].currentTime = 0;
      sounds[3].play();
      break;
    case "T":
      buttons[4].classList.add("click");
      setTimeout(() => {
        buttons[4].classList.remove("click");
      }, 100);
      sounds[4].currentTime = 0;
      sounds[4].play();
      break;
    case "Y":
      buttons[5].classList.add("click");
      setTimeout(() => {
        buttons[5].classList.remove("click");
      }, 100);
      sounds[5].currentTime = 0;
      sounds[5].play();
      break;
    case "U":
      buttons[6].classList.add("click");
      setTimeout(() => {
        buttons[6].classList.remove("click");
      }, 100);
      sounds[6].currentTime = 0;
      sounds[6].play();
      break;
    case "I":
      buttons[7].classList.add("click");
      setTimeout(() => {
        buttons[7].classList.remove("click");
      }, 100);
      sounds[7].currentTime = 0;
      sounds[7].play();
      break;
    case "O":
      buttons[8].classList.add("click");
      setTimeout(() => {
        buttons[8].classList.remove("click");
      }, 100);
      sounds[8].currentTime = 0;
      sounds[8].play();
      break;
    case "P":
      buttons[9].classList.add("click");
      setTimeout(() => {
        buttons[9].classList.remove("click");
      }, 100);
      sounds[9].currentTime = 0;
      sounds[9].play();
      break;
    case "K":
      buttons[10].classList.add("click");
      setTimeout(() => {
        buttons[10].classList.remove("click");
      }, 100);
      sounds[10].currentTime = 0;
      sounds[10].play();
      break;
    case "L":
      buttons[11].classList.add("click");
      setTimeout(() => {
        buttons[11].classList.remove("click");
      }, 100);
      sounds[11].currentTime = 0;
      sounds[11].play();
      break;
  }
});
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "q":
      buttons[0].classList.add("click");
      setTimeout(() => {
        buttons[0].classList.remove("click");
      }, 100);
      sounds[0].currentTime = 0;
      sounds[0].play();
      break;
    case "w":
      buttons[1].classList.add("click");
      setTimeout(() => {
        buttons[1].classList.remove("click");
      }, 100);
      sounds[1].currentTime = 0;
      sounds[1].play();
      break;
    case "e":
      buttons[2].classList.add("click");
      setTimeout(() => {
        buttons[2].classList.remove("click");
      }, 100);
      sounds[2].currentTime = 0;
      sounds[2].play();
      break;
    case "r":
      buttons[3].classList.add("click");
      setTimeout(() => {
        buttons[3].classList.remove("click");
      }, 100);
      sounds[3].currentTime = 0;
      sounds[3].play();
      break;
    case "t":
      buttons[4].classList.add("click");
      setTimeout(() => {
        buttons[4].classList.remove("click");
      }, 100);
      sounds[4].currentTime = 0;
      sounds[4].play();
      break;
    case "y":
      buttons[5].classList.add("click");
      setTimeout(() => {
        buttons[5].classList.remove("click");
      }, 100);
      sounds[5].currentTime = 0;
      sounds[5].play();
      break;
    case "u":
      buttons[6].classList.add("click");
      setTimeout(() => {
        buttons[6].classList.remove("click");
      }, 100);
      sounds[6].currentTime = 0;
      sounds[6].play();
      break;
    case "ı":
      buttons[7].classList.add("click");
      setTimeout(() => {
        buttons[7].classList.remove("click");
      }, 100);
      sounds[7].currentTime = 0;
      sounds[7].play();
      break;
    case "o":
      buttons[8].classList.add("click");
      setTimeout(() => {
        buttons[8].classList.remove("click");
      }, 100);
      sounds[8].currentTime = 0;
      sounds[8].play();
      break;
    case "p":
      buttons[9].classList.add("click");
      setTimeout(() => {
        buttons[9].classList.remove("click");
      }, 100);
      sounds[9].currentTime = 0;
      sounds[9].play();
      break;
    case "k":
      buttons[10].classList.add("click");
      setTimeout(() => {
        buttons[10].classList.remove("click");
      }, 100);
      sounds[10].currentTime = 0;
      sounds[10].play();
      break;
    case "l":
      buttons[11].classList.add("click");
      setTimeout(() => {
        buttons[11].classList.remove("click");
      }, 100);
      sounds[11].currentTime = 0;
      sounds[11].play();
      break;
  }
});
