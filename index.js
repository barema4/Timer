const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("timer has start");
  },
  onTick() {
    console.log("the timer has ticked");
  },
  onComplete() {
    console.log("the timer has completed");
  },
});
