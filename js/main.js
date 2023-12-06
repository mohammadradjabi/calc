let num1 = document.querySelector("input#num1");
let num2 = document.querySelector("input#num2");
let sum = document.querySelector("div>div>div>button#sum");
let sub = document.querySelector("div>div>div>button#sub");
let mul = document.querySelector("div>div>div>button#mul");
let div = document.querySelector("div>div>div>button#div");
sum.addEventListener("click", function() {
  document.querySelector("h1").innerHTML =
    Number(num1.value) + Number(num2.value);
});
sub.addEventListener("click", function() {
  document.querySelector("h1").innerHTML =
    Number(num1.value) - Number(num2.value);
});
mul.addEventListener("click", function() {
  document.querySelector("h1").innerHTML =
    Number(num1.value) * Number(num2.value);
});
div.addEventListener("click", function() {
  document.querySelector("h1").innerHTML =
    Number(num1.value) / Number(num2.value);
});
