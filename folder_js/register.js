const formRegister = document.getElementById("formRegister");

const userLocal = JSON.parse(localStorage.getItem("users")) || [];

formRegister.addEventListener("submit", function (e) {
  e.preventDefault();

  const useName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const matkhau = document.getElementById("matkhau").value;

  let obj = {
    id: Math.floor(Math.random() * 10000000),
    username: `${useName}`,
    matkhau: `${matkhau}`,
    emailAddress: `${email}`,
    cart: [],
  };
  let flag = true;
  for (let i = 0; i < userLocal.length; i++) {
    if (email == userLocal[i].emailAddress) {
      alert("email đã được sử dụng");
      flag = false;
      break;
    }
  }
  if (flag == true) {
    userLocal.push(obj);
    alert("Đăng kí thành công");
    localStorage.setItem("users", JSON.stringify(userLocal));
    window.location.href = "/folder_pages/login.html";
  }
});
