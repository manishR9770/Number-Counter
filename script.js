// counter

const decr = document.getElementById("decrbtn");
const rst = document.getElementById("rstbtn");
const incr = document.getElementById("incrbtn");
const countlbl = document.getElementById("mylbl");
let count = 0;

incr.onclick = function () {
  count++;
  countlbl.textContent = count;
};
decr.onclick = function () {
  count--;
  countlbl.textContent = count;
};
rst.onclick = function () {
  count = 0;
  countlbl.textContent = count;
};
