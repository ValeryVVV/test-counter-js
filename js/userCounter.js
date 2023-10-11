let counterValue = 0;

const refs = {
  increment: document.querySelector("#increment"),
  valueEl: document.querySelector("#value"),
  resetBtn: document.querySelector("#reset"),
};

const counterInc = () => {
  const count = (counterValue += 1);
  refs.valueEl.textContent = count;
};

const resetCounter = () => {
  const count = (counterValue = 0);
  refs.valueEl.textContent = count;
};

refs.increment.addEventListener("click", counterInc);
refs.resetBtn.addEventListener("click", resetCounter);
