document.body.onload = addElementsOnLoad;

const stopwatchContainer = document.getElementById("stopwatchContainer");
const startButton = createStopwatchButton("startButton", "Start", true);
const stopButton = createStopwatchButton("stopButton", "Stop", true);
const resetButton = createStopwatchButton("resetButton", "Reset", false);
startButton.onclick = onStartButtonClick;
stopButton.onclick = onStopButtonClick;
resetButton.onclick = onResetButtonClick;

function createStopwatchButton(id, buttonText, isEnabled) {
  let button = document.createElement("BUTTON");
  button.id = id;
  button.className = "stopwatchButton";
  button.textContent = buttonText;
  button.disabled = !isEnabled;
  return button;
}

function addElementsOnLoad() {
  stopwatchContainer.appendChild(startButton);
  stopwatchContainer.appendChild(resetButton);
}

function onStartButtonClick() {
  startButton.remove();
  showStopButton();
  resetButton.disabled = false;
}

function onStopButtonClick() {
  stopButton.remove();
  showStartButtton();
}

function onResetButtonClick() {
  resetButton.disabled = true;
  if(document.getElementById("stopButton")) {
    stopButton.remove();
    showStartButtton();
  }
}

function showStartButtton() {
  stopwatchContainer.insertBefore(startButton, resetButton);
}

function showStopButton() {
  stopwatchContainer.insertBefore(stopButton, resetButton);
}