document.body.onload = addElementsOnLoad;

const stopwatchContainer = document.getElementById("stopwatchContainer");
const startButton = createStopwatchButton("startButton", "Start", true);
const stopButton = createStopwatchButton("stopButton", "Stop", true);
const resumeButton = createStopwatchButton("resumeButton", "Resume", true);
const resetButton = createStopwatchButton("resetButton", "Reset", false);

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