//assign
let sendBtn = document.getElementById("send");
let resetBtn = document.getElementById("reset");
let form = document.getElementById("form");

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let messageInput = document.querySelector("#message");

// ๐ก submit, ์๋ก๊ณ ์นจ์ ๋ง๊ธฐ -> form์์ ํจ๊ป ์ ์ถ, ์ด๊ธฐํ ๋ฒํผ์ด ๋ค์ด์๊ธฐ ๋๋ฌธ์ ์ด๋ ๋ฒํผ์ ๋๋ฌ๋ ์ ์ถ์ด ๋๋ค.
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

// ๐ก ํจ์์ ์ธ : input์ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์ localstorage์ ์ ์ฅํ๋ค.
function onSubmit(e) {
  console.log("submit");
  e.preventDefault();

  if (
    nameInput.value == "" ||
    emailInput.value == "" ||
    messageInput.value == ""
  ) {
    alert("๋น ์ ๋ณด๊ฐ ์์ต๋๋ค. ๋น ์ ๋ณด๋์ ์ฑ์์ฃผ์ธ์");
  } else {
    localStorage.setItem("user_name", nameInput.value);
    localStorage.setItem("user_email", emailInput.value);
    localStorage.setItem("message", messageInput.value);

    alert("์ ์ก์๋ฃ๐");
    // location.replace("contact.html");
  }
}

// ๐ก ํจ์์ ์ธ : localstorage์ ์ ์ฅ๋ ๋ฐ์ดํฐ๋ฅผ ์ญ์ 
function remove() {
  console.log("remove");

  // ์ธํ์์ ์์ฑ๋์ด์๋ ๊ฒ๋ค ๋น์์ฃผ๊ธฐ
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";

  localStorage.removeItem("user_name", nameInput.value);
  localStorage.removeItem("user_email", emailInput.value);
  localStorage.removeItem("message", messageInput.value);
}

// ๐ก send ๋ฒํผ ํด๋ฆญ์ ์ ์ฅํ๋ ํจ์ - ํธ์ถ
sendBtn.addEventListener("click", onSubmit);

// ๐ก reset ๋ฒํผ ํด๋ฆญ์ ์ง์ฐ๋ ํจ์ - ํธ์ถ
resetBtn.addEventListener("click", remove);
