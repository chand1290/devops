let count = 0;

function increase() {
    if (count < 10) {
        count++;
        document.getElementById("count").textContent = count;
    }
}

function decrease() {
    if (count > 0) {
        count--;
        document.getElementById("count").textContent = count;
    }
}
