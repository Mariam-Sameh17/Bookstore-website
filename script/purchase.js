let myform = document.querySelector("#form");

let name = document.querySelector(".name");
let nerr = document.querySelector(".nerr");

let mobile = document.querySelector(".mobile");
let merr = document.querySelector(".merr");

let email = document.querySelector(".email");
let eerr = document.querySelector(".eerr");

let country = document.querySelector(".Country");
let city = document.querySelector(".city");
let cerr = document.querySelector(".cerr");

let postal = document.querySelector(".postalcode");
let perr = document.querySelector(".perr");

let msg = document.querySelector(".msg");

let status = localStorage.getItem("bookstatus");

const title = localStorage.getItem("selectedBook");

let btn = document.querySelector(".submitbutton");

if (status === "out") {
  name.remove();
  mobile.remove();
  email.remove();
  country.remove();
  city.remove();
  postal.remove();
  btn.remove();
  msg.innerHTML = `Sorry ${title} book is out of stock right now :(`;
} else {
  if (myform) myform.addEventListener("submit", check);
}

function bookname(x) {
  localStorage.setItem("selectedBook", x);
  window.open("purchaseform.html", "_blank");
}

function bookst(y) {
  console.log(1);
  localStorage.setItem("bookstatus", y);
  return;
}

function check(e) {
  e.preventDefault();
  if (
    !(
      name.value === "" ||
      mobile.value === "" ||
      email.value === "" ||
      country.value === "" ||
      city.value === "" ||
      postal.value === ""
    )
  ) {
    msg.innerHTML = `Thank you ${name.value}! Your order for ${title} has been placed.`;

    name.value = "";
    mobile.value = "";
    email.value = "";
    country.value = "";
    city.value = "";
    postal.value = "";
  } else {
    if (name.value === "") {
      nerr.innerHTML = "you have to enter your name";
      setTimeout(() => (nerr.innerHTML = ""), 5000);
    }

    if (mobile.value === "") {
      merr.innerHTML = "you have to enter your mobile";
      setTimeout(() => (merr.innerHTML = ""), 5000);
    }

    if (email.value === "") {
      eerr.innerHTML = "you have to enter your email";
      setTimeout(() => (eerr.innerHTML = ""), 5000);
    }

    if (country.value === "" || city.value === "") {
      cerr.innerHTML = "you have to enter your country and city both";
      setTimeout(() => (cerr.innerHTML = ""), 5000);
    }

    if (postal.value === "") {
      perr.innerHTML = "you have to enter the postal code of your city";
      setTimeout(() => (perr.innerHTML = ""), 5000);
    }
  }
}
