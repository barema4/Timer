class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onComplete = callbacks.onComplete;
      this.onTick = callbacks.onTick;
    }
  }

  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
    if (this.onStart) {
      this.onStart();
    }
  };

  pause = () => {
    clearInterval(this.interval);
  };
  tick = () => {
    if (this.timeRemainding <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemainding = this.timeRemainding - 1;
      if (this.onTick) {
        this.onTick();
      }
    }
  };

  get timeRemainding() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemainding(time) {
    this.durationInput.value = time;
  }
}
