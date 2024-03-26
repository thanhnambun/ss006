// let productList = [
//   {
//     id: 1,
//     category: 3,
//     img: "/folder_asset/af1/air-force-1-07-easyon.png",
//     name: "air-force-1-07",
//     price: 340000,
//   },
//   {
//     id: 2,
//     category: 3,
//     img: "/folder_asset/af1/air-force-1-07-essential.png",
//     name: "air-force-1-07-essential",
//     price: 540000,
//   },
//   {
//     id: 3,
//     category: 3,
//     img: "/folder_asset/af1/air-force-1-07-lv8.png",
//     name: "air-force-1-07-lv8",
//     price: 315000,
//   },
//   {
//     id: 4,
//     category: 2,
//     img: "/folder_asset/jodan/Air Jordan 1 Low SE.png",
//     name: "Air Jordan 1 Low SE",
//     price: 815000,
//   },
//   {
//     id: 5,
//     category: 2,
//     img: "/folder_asset/jodan/air-jordan-1-elevate-low.png",
//     name: "air-jordan-1-elevate-low",
//     price: 315000,
//   },
//   {
//     id: 6,
//     category: 2,
//     img: "/folder_asset/jodan/air-jordan-1-low-g-golf.png",
//     name: "air-jordan-1-low-g-golf",
//     price: 310000,
//   },
//   {
//     id: 7,
//     category: 1,
//     img: "/folder_asset/air max/air-max-1-shoes-KcSx0w.png",
//     name: "air-max-1-shoes-KcSx0w",
//     price: 315000,
//   },
//   {
//     id: 8,
//     category: 1,
//     img: "/folder_asset/air max/air-max-270-shoes-2V5C4p.png",
//     name: "air-max-270-shoes-2V5C4p",
//     price: 785000,
//   },
//   {
//     id: 9,
//     category: 1,
//     img: "/folder_asset/air max/air-max-270-shoes-vjpNZc.png",
//     name: "air-max-270-shoes-vjpNZc",
//     price: 958000,
//   },
// ];

// localStorage.setItem("productList", JSON.stringify(productList));
let productList = JSON.parse(localStorage.getItem("productList"));

// let nike_category_title = document.getElementById("nike_category_title");
// let jodan_category_title = document.getElementById("jodan_category_title");
// let hangkhac_category_title = document.getElementById("hangkhac_category_title");
let hangkhacProductcontainer = document.getElementById("hangkhac-section");
let nikeProductcontainer = document.getElementById("nike-section");
let jodanProductcontainer = document.getElementById("jodan-section");

let hangkhacProduct = productList.filter(function (e, i) {
  return e.category === 1;
});

let jodanProduct = productList.filter(function (e, i) {
  return e.category === 2;
});

let nikeProduct = productList.filter(function (e, i) {
  return e.category === 3;
});

for (let index in hangkhacProduct) {
  hangkhacProductcontainer.innerHTML += `
      <div class="product" id="product-container-1">
          <div class="photo">
              <img src="${hangkhacProduct[index].img}" style="width:100%" alt="photo" />
          </div>

          <h4 class="h4-product">
              ${hangkhacProduct[index].name}
          </h4>
          <p class="value">₫ ${hangkhacProduct[index].price}</p>
          <div class="tong">
              <div class="icons icon-heart">
              <i class="fa-regular fa-heart"></i>
              </div>
              <button class="timhieuthem"><a href="#" style="text-decoration: none">Tìm hiểu thêm</a></button>
              <div class="icons icon-heart" id ="${hangkhacProduct[index].id}" onclick ="addToCart(${hangkhacProduct[index].id})">
                <ion-icon name="cart-outline"></ion-icon>
              </div>
          </div>
      </div>
  `;
}

for (let index in nikeProduct) {
  nikeProductcontainer.innerHTML += `
      <div class="product" id="product-container-1">
          <div class="photo">
              <img src="${nikeProduct[index].img}" style="width:100%" alt="photo" />
          </div>

          <h4 class="h4-product">
              ${nikeProduct[index].name}
          </h4>
          <p class="value">₫ ${nikeProduct[index].price}</p>
          <div class="tong">
              <div class="icons icon-heart">
              <i class="fa-regular fa-heart"></i>
              </div>
              <button class="timhieuthem"><a href="#" style="text-decoration: none">Tìm hiểu thêm</a></button>
              <div class="icons icon-heart" id="${nikeProduct[index].id}" onclick ="addToCart(${nikeProduct[index].id})">
                <ion-icon name="cart-outline"></ion-icon>
              </div>
          </div>
      </div>
  `;
}

for (let index in jodanProduct) {
  jodanProductcontainer.innerHTML += `
      <div class="product" id="product-container-1">
          <div class="photo">
              <img src="${jodanProduct[index].img}" style="width:100%" alt="photo" />
          </div>

          <h4 class="h4-product">
              ${jodanProduct[index].name}
          </h4>
          <p class="value">₫ ${jodanProduct[index].price}</p>
          <div class="tong">
              <div class="icons icon-heart">
              <i class="fa-regular fa-heart"></i>
              </div>
              <button class="timhieuthem"><a href="#" style="text-decoration: none">Tìm hiểu thêm</a></button>
              <div class="icons icon-heart" id="${jodanProduct[index].id}" onclick ="addToCart(${jodanProduct[index].id})">
                <ion-icon name="cart-outline"></ion-icon>
              </div>
          </div>
      </div>
  `;
}
let iconLogin = document.getElementById("icon-login");
iconLogin.addEventListener("click", function () {
  let checkIconLogin = JSON.parse(localStorage.getItem("checkLogin"));
  if (checkIconLogin) {
    window.location.href = "/folder_pages/myaccount.html";
  } else {
    window.location.href = "/folder_pages/dangnhap.html";
  }
});
// thêm vô giỏ hàng

function addToCart(productId) {
  /* 
      khi nào cho user đi mua hàng
      khi đăng nhập thì mới cho mua
   */
  console.log(productId);
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
  if (checkLogin == null) {
    return; // gặp return dừng chương trình luôn
  }
  /* 
      lấy giỏ hàng của user để đi mua hàng
      và lấy giỏ hàng user dựa vào id của user
   */
  let users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      //lấy thông tin sản phẩm để đưa vào giỏ hàng
      // làm sao để lấy thông tin sản phẩm

      // có id sản phẩm rồi làm sao lấy thông tin sản phẩm
      for (let j = 0; j < productList.length; j++) {
        if (productId == productList[j].id) {
          users[i];
          console.log("1111", productList[j]);
          console.log("giỏ hàng của user sẽ là ", users[i].cart);
          // let a={...product[j],quantity:1}
          /* 
            trước khi thêm vào phải xem trong giỏ hàng có sản phẩm đó chưa
            có rồi thì tăng số lượng còn chưa có thì thêm vào bt
          */
          // kiểm tra xem trong giỏ hàng có tồn tại sản phẩm đó chưa
          // duyệt giỏ hàng
          let index = users[i].cart.findIndex((item, index) => {
            return item.id == productId;
          });
          if (index == -1) {
            //tức là không có thêm bình thường
            console.log("chưa có ");
            users[i].cart.push({ ...productList[j], quantity: 1 });
            localStorage.setItem("users", JSON.stringify(users));
            showQuantityCart();
          } else {
            users[i].cart[index].quantity = ++users[i].cart[index].quantity;
            localStorage.setItem("users", JSON.stringify(users));
          }
        }
      }
    }
  }
}
// function hiển thị số lượng sản phẩm
function showQuantityCart() {
  // lấy giỏ hàng ra.length là được
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
  let users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      // console.log(users[i].cart);
      // document.getElementsByClassName("itemInCart")[0].innerHTML =
      //   users[i].cart.length;
    }
  }
}
showQuantityCart();
