let lines_width = Math.random() * 2;

function lines() {
  let lines_div = document.createElement("div");
  lines_div.classList.add("lines");
  document.body.appendChild(lines_div);

  lines_div.style.left = Math.random() * innerWidth + "px";
  lines_div.style.width = lines_width + "px";
  lines_div.style.background =
    "hsl(" + Math.floor(Math.random() * 360) + "deg, 100%, 50%)";

  setTimeout(function () {
    document.body.removeChild(lines_div);
  }, 2000);
}

setInterval(function () {
  lines();
}, 20);
