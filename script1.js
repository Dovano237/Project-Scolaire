let container = document.querySelector(".container");
let scrollAmount = 0;

document.getElementById("next").onclick = () => {
    scrollAmount -= 200;
    container.style.transform = `translateX(${scrollAmount}px)`;
};

document.getElementById("prev").onclick = () => {
    scrollAmount += 200;
    container.style.transform = `translateX(${scrollAmount}px)`;
};