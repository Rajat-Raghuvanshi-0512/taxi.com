const texts = document.querySelectorAll(".testimonials-para");
const btns = document.querySelectorAll(".read-more-btn");

btns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        if (texts[index].classList.contains("expanded")) {
            // if the text is currently expanded
            texts[index].classList.remove("expanded"); // collapse it
            btn.innerHTML = "Read More"; // change the button text
        } else {
            // if the text is currently collapsed
            texts[index].classList.add("expanded"); // expand it
            btn.innerHTML = "Read Less"; // change the button text
        }
    });
});


const contactForm = document.querySelector("#banner-form");
let pickup_location = document.getElementById("pickup_location");
let drop_location = document.getElementById("drop_location");
let phone = document.getElementById("phone");
let submitButton = document.querySelector("#sendRequest");


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = {
        pickup_location: pickup_location.value,
        drop_location: drop_location.value,
        phone: phone.value,
    }
    let xhr = new XMLHttpRequest();
    function thankYou() {
        window.location.assign("/thank.html");
    };

    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(formData));
    xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            pickup_location.value = '';
            drop_location.value = '';
            phone.value = '';
        } else {
            alert('Something went wrong!')
        }
        thankYou();
    }
});

const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        buttons.forEach(function (btn) {
            if (btn !== button && btn.classList.contains('active')) {
                btn.classList.remove('active');
            }
        });
        button.classList.toggle('active');
    });
});



// Hamburger click events
const hamburger = document.getElementById("hamburger");
const navItems = document.getElementById("slider-menu");
const mobiNavbar = document.getElementById("mobi-navbar")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navItems.classList.toggle("active")
    mobiNavbar.classList.toggle("active")
});