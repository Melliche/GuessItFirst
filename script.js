let timerValue = 0;
// let timer = setInterval(function () {
//   timerValue++;
//   console.log('timerValue', timerValue)
//   document.getElementById("timer").innerHTML = timerValue;
// }, 1000);
let timer;
function startTimer() {
  timer = setInterval(function () {
    timerValue++;
    if (timerValue >=15) {
      // clearInterval(timer);
      document.getElementById("timer").innerHTML = timerValue;
      document.getElementById("timer").style.color = "red";
      if (timerValue  == 17) {
        document.getElementById("timer").style.color = "white";
        resetTimer();

      }
    } else {
      document.getElementById("timer").innerHTML = timerValue;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  timerValue = 0;
  document.getElementById("timer").innerHTML = timerValue;
}









let counter = 0;
function AddInput() {
  if (counter <= 5) {
    let input = document.createElement("input");
    input.type = "text";
    input.name = "input";
    input.placeholder = "Name";
    input.className = "input";
    input.id = "formId";
    document.getElementById("inputContainer").appendChild(input);
    let hr = document.createElement("hr");
    hr.className = "hr";
    document.getElementById("inputContainer").appendChild(hr);
  } else {
    let alert = document.createElement("p");
    alert.className = "alert";
    alert.innerHTML = "You have reached the maximum number of fields";
    counter <= 6 && document.getElementById("inputContainer").appendChild(alert);
  }
  counter++;
}

function recupererDonnees() {
  let inputs = document.querySelectorAll('[class^="input"]');
  let inputValues = [];

  inputs.forEach(function (input) {
    input.value && inputValues.push(input.value);
  });
  if (inputValues.length > 0) {
    console.log("Contenu des inputs :", inputValues);
    document.getElementById("formSection").style.display = "none";
    document.getElementById("resultSection").style.display = "flex";
    const random = Math.floor(Math.random() * inputValues.length);
    console.log(random, inputValues[random]);
    let winner = document.createElement("p");
    winner.innerHTML = inputValues[random];
    document.getElementById("winerSpan").innerHTML = winner.innerHTML;
  } else if (counter <= 1) {
    let alert = document.createElement("p");
    alert.className = "alert";
    alert.innerHTML = "you cannot launch without providing a name";
    counter <= 6 && document.getElementById("inputContainer").appendChild(alert);
  }
  counter++;
}

function reset() {
  location.reload();
}

AddInput();