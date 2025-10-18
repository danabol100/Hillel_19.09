let step = 0;

const ladder = {
  up: function () {
    step += 1;
    return this;
    // підніматиме вас на одну сходинку
  },
  down: function () {
    step -= 1;
    return this;
    // опускатиме вас на одну сходинку
  },
  showStep: function () {
    console.log(step);
    return this;
    // показує поточну сходинку
  },
};
ladder.up().up().up().down().showStep();
