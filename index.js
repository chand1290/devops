let count = 0;
const min = 0;
const max = 10;

const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

increaseBtn.addEventListener("click", () => {
    if (count < max) {
        count++;
        counter.textContent = count;
    }
});

decreaseBtn.addEventListener("click", () => {
    if (count > min) {
        count--;
        counter.textContent = count;
    }
});
