let count = 0;
document.addEventListener("DOMContentLoaded", () => {
    const counterDisplay = document.createElement("h1");
    const button = document.createElement("button");
    button.textContent = "Increase";
    counterDisplay.textContent = count;

    button.addEventListener("click", () => {
        count++;
        counterDisplay.textContent = count;
    });

    document.body.appendChild(counterDisplay);
    document.body.appendChild(button);
});
