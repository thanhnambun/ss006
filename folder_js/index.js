// let productList = [
//   {
//     id: 1,
//     category: 1,
//     img: [
//       "/folder_asset/giày tạp nham/z5225594426075_07d43dc9fc388ecb5bbfdf566ef99f50.jpg",
//     ],
//     name: "LV54 Trắng Đen",
//     price: "500.000đ",
//   },
//   {
//     id: 2,
//     category: 1,
//     img: "/folder_asset/giày tạp nham/z5120905308989_f28ac7d6781fc9aae5e132b1720fbc8d.jpg",
//     name: "Chucky siêu cấp",
//     price: "545.000đ",
//   },
//   {
//     id: 3,
//     category: 1,
//     img: "/folder_asset/giày tạp nham/z5225571278241_1e9e0fc21b8fdcb6f8c5a6183130f5d8.jpg",
//     name: "New York Yankees x MLB Chunky Liner Low Denim",
//     price: "585.000đ",
//   },
//   {
//     id: 4,
//     category: 1,
//     img: "/folder_asset/giày tạp nham/z5225571286463_4feb8c8c0231e949b61e2df1baf18c71.jpg",
//     name: "New York Yankees x MLB Chunky Liner Low Denim",
//     price: "500.000đ",
//   },
//   {
//     id: 5,
//     category: 1,
//     img: "/folder_asset/giày tạp nham/z5225576114027_8e459fe8e9e82e9a6e0859f6b3062745.jpg",
//     name: "New York Yankees x MLB Chunky Liner Low Denim",
//     price: "500.000đ",
//   },
//   {
//     id: 6,
//     category: 1,
//     img: "/folder_asset/giày tạp nham/z5225594411993_9fdcda0e89371b4b32e7423fb67ee06b.jpg",
//     name: "New York Yankees x MLB Chunky Liner Low Denim",
//     price: "500.000đ",
//   },
//   {
//     id: 7,
//     category: 1,
//     img: "/folder_asset/giày tạp nham/z5225594415702_5ddf0846e3f5e1a7743edc01d98b3f56.jpg",
//     name: "New York Yankees x MLB Chunky Liner Low Denim",
//     price: "500.000đ",
//   },
//   {
//     id: 8,
//     category: 1,
//     img: "/folder_asset/giày tạp nham/z5225594420789_0aa678de48172ca2f932c495d96ff6d6.jpg",
//     name: "New York Yankees x MLB Chunky Liner Low Denim",
//     price: "500.000đ",
//   },
//   // {
//   //   id: 9,
//   //   category:1,
//   //   img: "/folder_asset/giày tạp nham/z5114978496354_2e6aa3e6fc7abecc5c1695e6f6ce650c.jpg",
//   //   name: "New York Yankees x MLB Chunky Liner Low Denim",
//   //   price:"500.000đ",
//   // },
//   {
//     id: 10,
//     category: 1,
//     img: "/folder_asset/giày tạp nham/z5234824120907_adff3ce7ab3bba085927d120660b9df8.jpg",
//     name: "Adidas Samba Nâu Đế Cao",
//     price: "500.000đ",
//   },
//   {
//     id: 11,
//     category: 2,
//     img: "/folder_asset/jodan/z5194704638355_b6a97057a646cf93ef3d9e3dec0d796a.jpg",
//     name: "JD1 Low",
//     price: "300.000đ",
//   },
//   {
//     id: 12,
//     category: 2,
//     img: "/folder_asset/jodan/z5226822938254_62ab7686ce79298cd0a7f1bc4d5629fb.jpg",
//     name: "JD1 Low",
//     price: "300.000đ",
//   },
//   {
//     id: 13,
//     category: 2,
//     img: "/folder_asset/jodan/z5226822938255_c26ab2bdeec13778ee27c2fb3c3a81d9.jpg",
//     name: "JD1 Low",
//     price: "300.000đ",
//   },
//   {
//     id: 14,
//     category: 2,
//     img: "/folder_asset/jodan/z5226822941154_421071a668fe3dd767427ae81093f57f.jpg",
//     name: "JD1 Low",
//     price: "300.000đ",
//   },
//   {
//     id: 15,
//     category: 2,
//     img: "/folder_asset/jodan/z5226822941163_43e3915807b8293508417e44a79c779a.jpg",
//     name: "JD1 Low",
//     price: "300.000đ",
//   },
//   {
//     id: 16,
//     category: 2,
//     img: "/folder_asset/jodan/z5226822943636_25daa33fa1a82e87016cac1669e55057.jpg",
//     name: "JD1 Low",
//     price: "300.000đ",
//   },
//   {
//     id: 17,
//     category: 2,
//     img: "/folder_asset/jodan/z5234841968062_02e1bbe7cdf951e5a60ce0f3f0df251d.jpg",
//     name: "AF1 Just Do It",
//     price: "340.000đ",
//   },
//   {
//     id: 18,
//     category: 3,
//     img: "/folder_asset/nike/z5242687962690_7605e90d3b70fcef4d1c8a2fdcd57d85.jpg",
//     name: "AF1 Just Do It",
//     price: "340.000đ",
//   },
//   {
//     id: 19,
//     category: 3,
//     img: "/folder_asset/nike/z5210671046321_d5bc5d0dfbd481d18c5aea1668d95990.jpg",
//     name: "AF1 Supreme",
//     price: "500.000đ",
//   },
//   {
//     id: 20,
//     category: 3,
//     img: "/folder_asset/nike/z5210671048261_188bc4fdee40d7cbc7e6713a59b25822.jpg",
//     name: "AF1 Shadow",
//     price: "315.000đ",
//   },
//   {
//     id: 21,
//     category: 3,
//     img: "/folder_asset/nike/z5210671051984_fe6f0b0dce77d1f33dcdca806cab2493.jpg",
//     name: "AF1 Shadow",
//     price: "315.000đ",
//   },
//   {
//     id: 22,
//     category: 3,
//     img: "/folder_asset/nike/z5210671055605_48bfeefe9337359ebb9a8601f98e9aaa.jpg",
//     name: "AF1 Shadow",
//     price: "315.000đ",
//   },
//   {
//     id: 23,
//     category: 3,
//     img: "/folder_asset/nike/z5210671059413_f13c759cef868f9ac8fc7df2eb603876.jpg",
//     name: "AF1 Shadow",
//     price: "315.000đ",
//   },
//   {
//     id: 24,
//     category: 3,
//     img: "/folder_asset/nike/z5234782176981_5ed96f43f69d5503591e2447755b2ac7.jpg",
//     name: "AF1 Valentine",
//     price: "850.000đ",
//   },
//   {
//     id: 25,
//     category: 3,
//     img: "/folder_asset/nike/z5239312774043_b36b35bbf9484154032544b983073b73.jpg",
//     name: "Forum",
//     price: "480.000đ",
//   },
//   {
//     id: 26,
//     category: 3,
//     img: "/folder_asset/nike/z5191029375078_df57e3fd3939df2082b2482fd0309621.jpg",
//     name: "Stadium ",
//     price: "720.000đ",
//   },
// ];

// localStorage.setItem("productList",JSON.stringify(productList));
let productList = JSON.parse(localStorage.getItem("productList"));

let nike_category_title = document.getElementById("nike_category_title");
let jodan_category_title = document.getElementById("jodan_category_title");
let hangkhac_category_title = document.getElementById(
  "hangkhac_category_title"
);
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
              <div class="icons icon-heart" id ="muahang">
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
              <div class="icons icon-heart" id="muahang">
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
              <div class="icons icon-heart" id="muahang" >
                <ion-icon name="cart-outline"></ion-icon>
              </div>
          </div>
      </div>
  `;
}
let iconLogin = document.getElementById("icon-login");
iconLogin.addEventListener("click", function () {
  let checkIconLogin = JSON.parse(localStorage.getItem("userLogin"));
  if (checkIconLogin) {
    window.location.href = "/folder_utils/index.html";
  } else {
    window.location.href = "/folder_pages/dangnhap.html";
  }
});
// thêm vô giỏ hàng
let muahang = document.getElementById("muahang");
muahang.addEventListener("click", function addToCart(productId) {
  console.log("đã gọi hàm");
  /* 
      khi nào cho user đi mua hàng
      khi đăng nhập thì mới cho mua
   */
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
  if (checkLogin == null) {
    // console.log("bạn phải đăng nhập để đi mua hàng");
    return; // gặp return dừng chương trình luôn
  }
  console.log("đi mua hàng bình thường");
  /* 
      lấy giỏ hàng của user để đi mua hàng
      và lấy giỏ hàng user dựa vào id của user
   */
  let userslogin = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < userslogin.length; i++) {
    if (userslogin[i].id == checkLogin) {
      //lấy thông tin sản phẩm để đưa vào giỏ hàng
      // làm sao để lấy thông tin sản phẩm
      console.log("11111", productId);
      // có id sản phẩm rồi làm sao lấy thông tin sản phẩm
      for (let j = 0; j < productList.length; j++) {
        if (productId == productList[j].id) {
          // lấy thông tin sản phẩm
          console.log("1111", product[j]);
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
            users[i].cart.push({ ...product[j], quantity: 1 });
            localStorage.setItem("users", JSON.stringify(users));
            showQuantityCart();
          } else {
            //có rồi đi tăng số lượng
            // mình phải biết vị trí của cái cần tăng
            users[i].cart[index].quantity = ++users[i].cart[index].quantity;
            localStorage.setItem("users", JSON.stringify(users));
          }
          // for (let index = 0; index < users[i].cart.length; index++) {
          //         if(users.cart[index].id==productId){
          //         }
          // }
          // sau khi push xong thì lưu trên local
        }
      }
    }
  }
});
// function hiển thị số lượng sản phẩm
function showQuantityCart() {
  // lấy giỏ hàng ra.length là được
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
  let users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      // console.log(users[i].cart);
      document.getElementsByClassName("itemInCart")[0].innerHTML =
        users[i].cart.length;
    }
  }
}
showQuantityCart();
