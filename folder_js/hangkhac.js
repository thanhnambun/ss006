// let hangkhacList=[
//     {
//         id: 1,
//         category: 1,
//         img: "/folder_asset/air max/air-max-1-shoes-KcSx0w.png",
//         name: "air-max-1",
//         price: 315000,
//       },
//       {
//         id: 2,
//         category: 1,
//         img: "/folder_asset/air max/air-max-270-shoes-2V5C4p.png",
//         name: "air-max-270",
//         price: 785000,
//       },
//       {
//         id: 3,
//         category: 1,
//         img: "/folder_asset/air max/air-max-270-shoes-vjpNZc.png",
//         name: "air-max-270-shoes-vjpNZc",
//         price: 958000,
//       },
//       {
//         id: 4,
//         category: 1,
//         img: "/folder_asset/air max/air-max-90-lv8-shoes-5KhTdP.png",
//         name: "air-max-90-lv8",
//         price: 958000,
//       },
//       {
//         id: 5,
//         category: 1,
//         img: "/folder_asset/air max/air-max-90-shoes-K0mczj.png",
//         name: "air-max-90",
//         price: 958000,
//       },
//       {
//         id: 6,
//         category: 1,
//         img: "/folder_asset/air max/air-max-ap-shoes-3Rdq04.png",
//         name: "air-max-ap",
//         price: 958000,
//       },
//       {
//         id: 7,
//         category: 1,
//         img: "/folder_asset/air max/air-max-dn-older-shoes-xkSP9x.png",
//         name: "air-max-dn-older",
//         price: 958000,
//       },
//       {
//         id: 8,
//         category: 1,
//         img: "/folder_asset/air max/air-max-dn-shoes-drXjb8.png",
//         name: "air-max-dn",
//         price: 958000,
//       },
//       {
//         id: 9,
//         category: 1,
//         img: "/folder_asset/air max/air-max-dn-shoes-FtLNfm.png",
//         name: "air-max-dn",
//         price: 958000,
//       },
//       {
//         id: 10,
//         category: 1,
//         img: "/folder_asset/air max/air-max-excee-shoes-xBwQhG.png",
//         name: "air-max-excee",
//         price: 958000,
//       },
//       {
//         id: 11,
//         category: 1,
//         img: "/folder_asset/air max/air-max-excee-shoes-Zvl8cs.png",
//         name: "air-max-excee",
//         price: 958000,
//       },
//       {
//         id: 12,
//         category: 1,
//         img: "/folder_asset/air max/air-max-furyosa-nrg-shoes-jKWgZB.png",
//         name: "air-max-furyosa-nrg",
//         price: 958000,
//       },
//       {
//         id: 13,
//         category: 1,
//         img: "/folder_asset/air max/air-max-plus-drift-shoes-FCM3Rg.png",
//         name: "air-max-270-shoes-vjpNZc",
//         price: 958000,
//       },
//       {
//         id: 14,
//         category: 1,
//         img: "/folder_asset/air max/air-max-plus-shoes-B03LHK.png",
//         name: "air-max-plus",
//         price: 958000,
//       },
//       {
//         id: 15,
//         category: 1,
//         img: "/folder_asset/air max/air-max-pulse-shoes-V9B1C5.png",
//         name: "air-max-pulse",
//         price: 958000,
//       },
//       {
//         id: 16,
//         category: 1,
//         img: "/folder_asset/air max/air-max-solo-shoes-000Gh6.png",
//         name: "air-max-solo",
//         price: 958000,
//       },
//       {
//         id: 17,
//         category: 1,
//         img: "/folder_asset/air max/air-max-solo-shoes-qVq5jJ.png",
//         name: "air-max-solo",
//         price: 958000,
//       },
// ]
// localStorage.setItem("hangkhacList", JSON.stringify(hangkhacList))
let hangkhacList = JSON.parse(localStorage.getItem("hangkhacList"));
let hangkhacProductcontainer = document.getElementById("hangkhac-section");

let hangkhacProduct = hangkhacList.filter(function (e, i) {
  return e.category === 1;
});

// check đăng nhập
let iconLogin = document.getElementById("icon-login");
iconLogin.addEventListener("click", function () {
  let checkIconLogin = JSON.parse(localStorage.getItem("checkLogin"));
  if (checkIconLogin) {
    window.location.href = "/folder_pages/myaccount.html";
  } else {
    window.location.href = "/folder_pages/dangnhap.html";
  }
});

// so san pham tren 1 trang là 6 sản phẩm
let totalItem = hangkhacList.length;
let itempage = 8;
let totalPage = Math.ceil(totalItem / itempage);
let currentPage = 0;
let start = 0;
let end = 0;
let pagination = document.getElementsByClassName("pagination")[0];
for (let i = 1; i < totalPage + 1; i++) {
  pagination.innerHTML += `
  <div class="chuyentrang">
    <a href="#" onclick="hangkhactrang(${i})">${i}</a>
  </div>
  `;
}
// tong so trang 5 trang
function hangkhactrang(page) {
  currentPage = page;
  start = (currentPage - 1) * itempage;
  end = currentPage * itempage;
  renderhangkhac();
}
function renderhangkhac() {
  hangkhacProductcontainer.innerHTML = "";
  for (let i = 0; i < hangkhacList.length; i++) {
    if (i >= start && i < end) {
      hangkhacProductcontainer.innerHTML += `
        <div class="product" id="product-container-1">
            <div class="photo">
                <img src="${hangkhacProduct[i].img}" style="width:100%" alt="photo" />
            </div>

            <h4 class="h4-product">
                ${hangkhacProduct[i].name}
            </h4>
            <p class="value">₫ ${hangkhacProduct[i].price}</p>
            <div class="tong">
                <div class="icons icon-heart">
                <i class="fa-regular fa-heart"></i>
                </div>
                <button class="timhieuthem"><a href="#" style="text-decoration: none">Tìm hiểu thêm</a></button>
                <div class="icons icon-heart" id="${hangkhacProduct[i].id}" onclick ="addToCart(${hangkhacProduct[i].id})">
                  <ion-icon name="cart-outline"></ion-icon>
                </div>
            </div>
        </div>`;
    }
  }
}
hangkhactrang(1);
