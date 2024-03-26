let hidepassword = document.getElementById("icon-mk")

// hidepassword.addEventListener("click",function () {
//     `<input
//     type="text"
//     id="password"
//     placeholder="****************"
//     required
//   />`
// })

const formlogin= document.getElementById("formlogin")
formlogin.addEventListener("submit" , function (e) {
    e.preventDefault()

    let users = JSON.parse(localStorage.getItem("users"));

    let inpNameLogin = document.getElementById("namelogin").value;
    let inpPassword = document.getElementById("password").value;
    let check = false;
    let account = {};
    if (inpNameLogin == "") {
        alert("chưa điền tên");
    } else if (inpPassword == "") {
        alert("chưa điền mật khẩu");
    } else {
        for (let i = 0; i < users.length; i++) {
            if (inpNameLogin == users[i].username) {
                account = users[i];
                check = true;
                break;
            }
        }
        if (check) {
            if (inpPassword == account.matkhau) {
                localStorage.setItem("checkLogin",account.id);
                window.location.href = "/folder_utils/index.html"
            } else {
                alert("sai mật khẩu");
            }
        } else {
            alert("tên chưa được đăng kí");
        }
    }
    }
)
