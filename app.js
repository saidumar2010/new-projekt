const progress = document.getElementById("taraqqiyot");
const prev = document.getElementById("oldingi");
const next = document.getElementById("oldinga");
const circles = document.querySelectorAll(".circle");




let xozirgiAktiv = 1;

next.addEventListener("click", () => {
    xozirgiAktiv++;
    if (xozirgiAktiv > circles.length) xozirgiAktiv = circles.length;
    update();
});

prev.addEventListener("click", () => {
    xozirgiAktiv--;
    if (xozirgiAktiv < 1) xozirgiAktiv = 1;
    update();
});

const update = () => {
    circles.forEach((circle, index) => {
        if (index < xozirgiAktiv) circle.classList.add("active");
        else circle.classList.remove("active");
    });
    const actives = document.querySelectorAll(".active");
    progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
    if (xozirgiAktiv === 1) prev.disabled = true;
    else if (xozirgiAktiv === circles.length) next.disabled = true;
    else {
        prev.disabled = false;
        next.disabled = false;
    }
};
