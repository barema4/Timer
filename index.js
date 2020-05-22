const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemainding) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemainding) / duration - perimeter
    );
  },
  onComplete() {
    console.log("the timer has completed");
  },
});
