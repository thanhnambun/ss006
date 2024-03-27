let iconGioHang = document.getElementById("iconGioHang");
iconGioHang.addEventListener("click", function () {
  let checkIcoGioHang = JSON.parse(localStorage.getItem("checkLogin"));
  if (checkIcoGioHang) {
    window.location.href = "/folder_pages/cart.html";
  } else {
    window.location.href = "/folder_pages/login.html";
  }
});

let users = JSON.parse(localStorage.getItem("users"));
let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
let account = {};

//tim thang dang dang nhap
for (let i = 0; i < users.length; i++) {
  console.log(users[i].id, checkLogin);
  if (users[i].id == checkLogin) {
    account = users[i];
    break;
  }
}

//lay gio hang cua no
let cart = account.cart;

//render
let productContainer = document.getElementsByClassName("giohangcuaban")[0];
function render() {
  productContainer.innerHTML = "";
  for (let i in cart) {
    productContainer.innerHTML += `
  <div class = "sanphamcuatoi">
    <div class="khoisanpham">
      <img
          src="${cart[i].img}"
          style="height: 174px; width: 174px"
          alt="photo"
          />
        <p class="tensanpham">
        ${cart[i].name}
        </p>
    </div>
    <p id="giasanpham">${cart[i].price}</p>
    <div class="soluongsanpham">
      <button class="quantity-button" onclick="decreaseQuantity(${cart[i].id})">
        -
      </button>
        <span
        type="text"
        class="quantity-input">${cart[i].quantity}</span>
        <button class="quantity-button" onclick="increaseQuantity(${
          cart[i].id
        })">
        +
      </button>
      </div>
      <span id="tongtiensanpham">${cart[i].price * cart[i].quantity}</span>
      </div>
  </div>
`;
  }
}
var giaInput = document.getElementById("tongtiensanpham");

// thay doi gia san pham theo so luong

//tang giam so luong san pham
function increaseQuantity(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      cart[i].quantity += 1;
    }
  }
  render();
  for (let i = 0; i < users.length; i++) {
    if (account.id == users[i].id) {
      users[i].cart = cart;
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
}
function decreaseQuantity(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      if (cart[i].quantity > 1) {
        cart[i].quantity -= 1;
      } else {
        const result = confirm("bạn có chắc muốn xóa sản phẩm này không");
        if (result) {
          cart.splice(i, 1);
          for (let i = 0; i < users.length; i++) {
            if (users[i].cart == cart) {
              cart = users[i].cart;
              localStorage.setItem("users", JSON.stringify(users));
            }
          }
        } else {
          break;
        }
      }
    }
  }
  // kiem tra sl cua sp: > 2 thi -    < 2 thi xoa
  // - thi cu cham .quaantity -= 1
  // xoa thif cart.splice(index, 1)

  //
}
function giaOutput(amount) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // hien thi format tien VN
}
render();

// render san pham thanh toan
let spthanhtoan = document.getElementsByClassName("giohangthanhtoan")[0];
function renderProduct() {
  for (let i in cart) {
    spthanhtoan.innerHTML += `
    <div class="sanpham11">
      <div id="khoisanpham11">
        <img
          src="${cart[i].img}"
          style="height: 120px; width: 120px"
          alt="photo"
        />
        <p id="tensanpham11">
        ${cart[i].name}
        </p>
        <p class="giasanpham11">${cart[i].price}</p>
        <p id="soluongsanpham11">${cart[i].quantity}</p>
      </div>
    </div>
    `;
  }
}

// thanh toán

let thanhtoan = document.getElementsByClassName("tongphaithanhtoan")[0];
function tongthanhtoan() {
  let sum = 0;
  thanhtoan.innerHTML = ``;
  for (let i in cart) {
    sum += cart[i].price * cart[i].quantity;
  }
  thanhtoan.innerHTML += `
  <p>Phí vận chuyển: ₫ 30,000</p>
  <p>Mã giảm giá: ₫ 0</p>
  <h3>Tổng đ${sum + 30000}</h3>
`;
}
var button = document.getElementById("thanhtoanthoi");
// let thanhtoanthoi = document.getElementById("thanhtoanthoi");
function phaithanhtoan() {
  let sum = 0;
  button.innerHTML = ``;
  for (let i in cart) {
    sum += cart[i].price * cart[i].quantity;
  }
  button.innerHTML += `
  <b>Tổng đ${sum + 30000}</b>
`;
}
tongthanhtoan();
phaithanhtoan();
// Lấy đối tượng button bằng ID
// var button = document.getElementById("thanhtoanthoi");

// Thêm sự kiện click vào button
button.addEventListener("click", function () {
  // Hiển thị hộp thoại khi nhấn vào button
  alert("Thanh toán thành công. Hãy theo dõi đơn hàng của bạn.");
});

function motrangthanhtoan() {
  var modal = document.getElementById("motrang");
  modal.style.display = "flex";
}

function dongtrangthanhtoan() {
  var modal = document.getElementById("motrang");
  modal.style.display = "none";
}

// Đóng modal khi người dùng nhấp ra ngoài modal
window.onclick = function (event) {
  var modal = document.getElementById("motrang");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
renderProduct();
