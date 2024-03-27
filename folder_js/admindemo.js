let allProduct = JSON.parse(localStorage.getItem("allProduct"));
let userslist = JSON.parse(localStorage.getItem("users"));
let category = JSON.parse(localStorage.getItem("category"));

let trangchinh = document.getElementsByClassName("w3-container")[0];

function home() {
  trangchinh += `
  <h2>Chào mừng bạn đến với trang admin</h2>
        <div class="home-my-account">
          <div class="font-myaccount">Thông tin của admin</div>
          <div class="wrapper container">
            <div class="form-name-email">
              <div class="u-name-data">
                <h5>Tên của bạn:</h5>
                <div class="input-box">
                  <input
                    type="text"
                    disabled="disabled "
                    value="Nguyễn Thành Nam"
                  />
                  <div class="icon-web">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M8.7205 8.93563C11.2891 8.93563 13.3714 7.089 13.3714 4.81108C13.3714 2.53315 11.2891 0.686523 8.7205 0.686523C6.15189 0.686523 4.06961 2.53315 4.06961 4.81108C4.06961 7.089 6.15189 8.93563 8.7205 8.93563Z"
                        fill="#C8E3FF"
                      />
                      <path
                        d="M8.72049 10.998C4.06026 10.998 0.265137 13.7697 0.265137 17.1849C0.265137 17.4159 0.469776 17.5973 0.730225 17.5973H16.7107C16.9712 17.5973 17.1758 17.4159 17.1758 17.1849C17.1758 13.7697 13.3807 10.998 8.72049 10.998Z"
                        fill="#C8E3FF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="u-name-data">
                <h5>Số điện thoại:</h5>
                <div class="input-box">
                  <input type="text" disabled="disabled " value="0372597883" />
                  <div class="icon-web">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z"
                        fill="#C8E3FF"
                      />
                      <path
                        d="M13 8.00024C15.103 8.00024 16 8.89724 16 11.0002H18C18 7.77524 16.225 6.00024 13 6.00024V8.00024ZM16.422 13.4432C16.2299 13.2686 15.9774 13.1754 15.7178 13.1835C15.4583 13.1915 15.212 13.3001 15.031 13.4862L12.638 15.9472C12.062 15.8372 10.904 15.4762 9.71204 14.2872C8.52004 13.0942 8.15904 11.9332 8.05204 11.3612L10.511 8.96724C10.6975 8.78637 10.8062 8.54006 10.8142 8.28045C10.8222 8.02083 10.7289 7.76828 10.554 7.57624L6.85904 3.51324C6.68408 3.3206 6.44092 3.20374 6.18119 3.1875C5.92146 3.17125 5.66564 3.2569 5.46804 3.42624L3.29804 5.28724C3.12515 5.46075 3.02196 5.69169 3.00804 5.93624C2.99304 6.18624 2.70704 12.1082 7.29904 16.7022C11.305 20.7072 16.323 21.0002 17.705 21.0002C17.907 21.0002 18.031 20.9942 18.064 20.9922C18.3086 20.9786 18.5394 20.8749 18.712 20.7012L20.572 18.5302C20.7415 18.3328 20.8273 18.077 20.8113 17.8173C20.7952 17.5576 20.6785 17.3143 20.486 17.1392L16.422 13.4432Z"
                        fill="#C8E3FF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-name-email">
              <div class="u-name-data">
                <h5>Email:</h5>
                <div class="input-box">
                  <input
                    type="text"
                    disabled="disabled "
                    value="nambun26@gmail.com"
                  />
                  <div class="icon-web">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="18"
                      viewBox="0 0 24 18"
                      fill="none"
                    >
                      <path
                        d="M24 0H0V18H24V0ZM21.6 4.5L12 10.125L2.4 4.5V2.25L12 7.875L21.6 2.25V4.5Z"
                        fill="#C8E3FF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="u-name-data">
                <h5>Địa chỉ:</h5>
                <div class="input-box">
                  <input
                    type="text"
                    disabled="disabled "
                    value="Trực Ninh, Nam Định"
                  />
                  <div class="icon-web">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z"
                        fill="#C8E3FF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
  `;
}

function user() {
  trangchinh = ``;
  trangchinh += `
  <div class="input">
  <input class="display" type="text" placeholder="id" id="id" />
  <input class="display" type="text" placeholder="category" id="category" />
  <input class="display" type="text" placeholder="Tên sản phẩm" id="name" />
  <input class="display" type="file" placeholder="Img url" id="img_url" />
  <input class="display" type="text" placeholder="price" id="price" />
  <button
    style="background-color: rgb(67, 192, 234); width: 100px; height: 50px"
    class="display"
    id="newProduct"
  >
    + Thêm mới sản phẩm
  </button>
</div>
<table border="1" id="userTable">
  <thead>
    <tr>
      <th>#</th>
      <th>id</th>
      <th>emailAddress</th>
      <th>username</th>
      <th>mat khau</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
  `;
  function displayUser() {
    userTable.innerHTML = `<tr>
        <th>#</th>
        <th>id</th>
        <th>emailAddress</th>
        <th>username</th>
        <th>mat khau</th>
        <th>Action</th> 
        </tr>`;
    userslist.map(function (user) {
      let row = userTable.insertRow(-1);
      row.insertCell(0).innerText = user.id;
      row.insertCell(1).innerText = user.emailAddress;
      row.insertCell(2).innerText = user.username;
      row.insertCell(3).innerHTML = user.matkhau;
      let actionCell = row.insertCell(4);

      let deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", function () {
        deleteUser(product.id);
      });
      let updateButton = document.createElement("button");
      updateButton.innerText = "Update";
      updateButton.addEventListener("click", function () {
        updateProject(product.id);
      });
      actionCell.appendChild(deleteButton);
      actionCell.appendChild(updateButton);
    });
  }
  function deleteUser(id) {
    userslist = userslist.filter((userslist) => userslist.id !== id);
    localStorage.setItem("userslist", JSON.stringify(userslist));
    displayUser();
  }

  function updateUser(id) {
    let userToUpdate = userslist.find((userslist) => userslist.id === id);

    if (userToUpdate) {
        userToUpdate.id = prompt("tạo id ");
        userToUpdate.category = prompt("email mới  ");
        userToUpdate.name = prompt("tên mới ");
        userToUpdate.img = prompt("thêm ảnh  mới ");
        userToUpdate.price = prompt("giá tiền mới ").split(",");

      localStorage.setItem("storage", JSON.stringify(productList));
      displayUser();
    } else {
      console.error("không tìm thấy id: " + id);
    }
  }

  document
    .getElementById("newProduct")
    .addEventListener("click", function (event) {
      event.preventDefault();
      let userId = document.getElementById("userList.id");
      let productCategory = document.getElementById(
        "userList.category"
      ).value;
      let productName = document.getElementById("userList.name").value;
      let productImages = document.getElementById("userList.images").value;
      let productPrice = document.getElementById("userList.price").value;

      var newProject = {
        id: productId.length + 1,
        category: productCategory,
        projectName: productName,
        imgUrl: productImages,
        price: productPrice,
      };
      projects.push(newProject);

      localStorage.setItem("storage", JSON.stringify(projects));

      displayUser();
    });
  displayUser();
}
