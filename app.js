//assign
let sendBtn = document.getElementById("send");
let resetBtn = document.getElementById("reset");
let form = document.getElementById("form");

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let messageInput = document.querySelector("#message");

// 🟡 submit, 새로고침을 막기 -> form안에 함께 제출, 초기화 버튼이 들어있기 때문에 어느 버튼을 눌러도 제출이 된다.
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

// 🟡 함수선언 : input의 데이터를 받아 localstorage에 저장한다.
function onSubmit(e) {
  console.log("submit");
  e.preventDefault();

  if (
    nameInput.value == "" ||
    emailInput.value == "" ||
    messageInput.value == ""
  ) {
    alert("빈 정보가 있습니다. 빈 정보란을 채워주세요");
  } else {
    localStorage.setItem("user_name", nameInput.value);
    localStorage.setItem("user_email", emailInput.value);
    localStorage.setItem("message", messageInput.value);

    alert("전송완료👌");
    // location.replace("contact.html");
  }
}

// 🟡 함수선언 : localstorage에 저장된 데이터를 삭제
function remove() {
  console.log("remove");

  // 인풋안에 작성되어있는 것들 비워주기
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";

  localStorage.removeItem("user_name", nameInput.value);
  localStorage.removeItem("user_email", emailInput.value);
  localStorage.removeItem("message", messageInput.value);
}

// 🟡 send 버튼 클릭시 저장하는 함수 - 호출
sendBtn.addEventListener("click", onSubmit);

// 🟡 reset 버튼 클릭시 지우는 함수 - 호출
resetBtn.addEventListener("click", remove);
