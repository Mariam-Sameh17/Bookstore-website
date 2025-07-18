let signup = document.querySelector("#signup");

let signin = document.querySelector("#signin");

let fname = document.querySelector(".fname");
let sname = document.querySelector(".sname");
let nerr = document.querySelector(".nerr");

let email = document.querySelector(".email");
let eerr = document.querySelector(".eerr");

let date = document.querySelector(".date");
let derr = document.querySelector(".derr");

let gerr = document.querySelector(".gerr");

let pass = document.querySelector(".pass");
let cpass = document.querySelector(".cpass");
let perr = document.querySelector(".perr");

console.log(signup);
if (signup) signup.addEventListener("submit", check);
if (signin) {
  signin.addEventListener("submit", check2);
}

function check(e) {
  e.preventDefault();
  let selected = document.querySelector('input[name="gender"]:checked');
  if (
    !(
      fname.value === "" ||
      sname.value === "" ||
      email.value === "" ||
      date.value === "" ||
      pass.value === "" ||
      cpass.value === "" ||
      pass.value !== cpass.value
    ) &&
    selected
  ) {
    alert(`Welcome ${fname.value}!`);
    window.location.href = "home.html";
  } else {
    if (fname.value === "" || sname.value === "") {
      nerr.innerHTML = "you have to enter your first and second name";
      setTimeout(() => (nerr.innerHTML = ""), 5000);
    }

    if (email.value === "") {
      eerr.innerHTML = "you have to enter your email";
      setTimeout(() => (eerr.innerHTML = ""), 5000);
    }

    if (date.value === "") {
      derr.innerHTML = "you have to enter your birth date";
      setTimeout(() => (derr.innerHTML = ""), 5000);
    }

    if (!selected) {
      gerr.innerHTML = "you have to select your gender";
      setTimeout(() => (gerr.innerHTML = ""), 5000);
    }

    if (pass.value === "" || cpass.value === "" || pass.value !== cpass.value) {
      perr.innerHTML =
        "you have to put your password and confirm it with the same password";
      setTimeout(() => (perr.innerHTML = ""), 5000);
    }
  }
}

function check2(e) {
  console.log(1);
  e.preventDefault();

  if (!(email.value === "" || pass.value === "")) {
    alert(`Welcome back ${fname.value}!`);
    window.location.href = "home.html";
  } else {
    if (fname.value === "") {
      nerr.innerHTML = "you have to enter your username";
      setTimeout(() => (nerr.innerHTML = ""), 5000);
    }

    if (email.value === "") {
      eerr.innerHTML = "you have to enter your email";
      setTimeout(() => (eerr.innerHTML = ""), 5000);
    }

    if (pass.value === "") {
      perr.innerHTML = "you have to put your password";
      setTimeout(() => (perr.innerHTML = ""), 5000);
    }
  }
}
