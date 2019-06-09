var container1 = document.querySelector(".container1");
var container2 = document.querySelector(".container2");
var container3 = document.querySelector(".container3");
var container4 = document.querySelector(".container4");
var btn = document.querySelector(".btn");

container1.addEventListener("click", function () {
    container1.style.boxShadow = "0 0 2px rgba(81, 203, 238, 1)";
    container1.style.border = "1px solid rgba(81, 203, 238, 1)";
    container1.style.background = "rgba(245, 248, 253, 1)";
    container1.style.marginLeft = "91px";
    container2.style.boxShadow = "";
    container2.style.border = "";
    container2.style.background = "";
});

container2.addEventListener("click", function () {
    container2.style.boxShadow = "0 0 2px rgba(81, 203, 238, 1)";
    container2.style.border = "1px solid rgba(81, 203, 238, 1)";
    container2.style.background = "rgba(245, 248, 253, 1)";
    container2.style.marginLeft = "21px";
    container1.style.boxShadow = "";
    container1.style.border = "";
    container1.style.background = "";
});

container3.addEventListener("click", function () {
    container3.style.boxShadow = "0 0 2px rgba(81, 203, 238, 1)";
    container3.style.border = "1px solid rgba(81, 203, 238, 1)";
    container3.style.background = "rgba(245, 248, 253, 1)";
    container3.style.marginLeft = "91px";
    container4.style.boxShadow = "";
    container4.style.border = "";
    container4.style.background = "";
});

container4.addEventListener("click", function () {
    container4.style.boxShadow = "0 0 2px rgba(81, 203, 238, 1)";
    container4.style.border = "1px solid rgba(81, 203, 238, 1)";
    container4.style.background = "rgba(245, 248, 253, 1)";
    container4.style.marginLeft = "21px";
    container3.style.boxShadow = "";
    container3.style.border = "";
    container3.style.background = "";
});

btn.addEventListener('click', function () {
    document.querySelector('.bg-modal2').style.display = 'flex';
});

document.querySelector('#cl').addEventListener('click', function () {
    document.querySelector('.bg-modal2').style.display = 'none';
});

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'none';
});

container1.addEventListener("click", function () {
    document.querySelectorAll(".radio")[0].style.border = "2px solid #0069D9";
    document.querySelectorAll(".radio")[1].style.border = "2px solid rgba(0, 0, 0, 0.2)";
});

container2.addEventListener("click", function () {
    document.querySelectorAll(".radio")[1].style.border = "2px solid #0069D9";
    document.querySelectorAll(".radio")[0].style.border = "2px solid rgba(0, 0, 0, 0.2)";
});

container3.addEventListener("click", function () {
    document.querySelectorAll(".radio")[2].style.border = "2px solid #0069D9";
    document.querySelectorAll(".radio")[3].style.border = "2px solid rgba(0, 0, 0, 0.2)";
});

container4.addEventListener("click", function () {
    document.querySelectorAll(".radio")[3].style.border = "2px solid #0069D9";
    document.querySelectorAll(".radio")[2].style.border = "2px solid rgba(0, 0, 0, 0.2)";
});