var projectTable = document.getElementById("projectTable");

let productList = JSON.parse(localStorage.getItem("productList"));

function displayProjects() {
  projectTable.innerHTML = `<tr>
        <th>id</th>
        <th>category</th>
        <th>name</th>
        <th>images</th>
        <th>price</th>
        <th>Action</th>
      </tr>`;
  productList.map(function (product) {
    let row = projectTable.insertRow(-1);
    row.insertCell(0).innerText = product.id;
    row.insertCell(1).innerText = product.category;
    row.insertCell(2).innerText = product.name;
    row.insertCell(
      3
    ).innerHTML = `<img width="100px" src='${product.img}' alt="img" />`;
    row.insertCell(4).innerText = product.price;
    let actionCell = row.insertCell(5);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteProject(product.id);
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
function deleteProject(id) {
  productList = productList.filter((productList) => productList.id !== id);
  localStorage.setItem("productList", JSON.stringify(productList));
  displayProjects();
}

function updateProject(id) {
  let projectToUpdate = productList.find(
    (productList) => productList.id === id
  );

  if (projectToUpdate) {
    projectToUpdate.id = prompt("tạo id ");
    projectToUpdate.category = prompt("hạng mục mới  ");
    projectToUpdate.name = prompt("tên sản phẩm ");
    projectToUpdate.img = prompt("thêm ảnh  mới ");
    projectToUpdate.price = prompt("giá tiền mới ").split(",");

    localStorage.setItem("storage", JSON.stringify(productList));
    displayProjects();
  } else {
    console.error("không tìm thấy id: " + id);
  }
}

document
  .getElementById("newProduct")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let productId = document.getElementById("productList.id");
    let productCategory = document.getElementById("productList.category").value;
    let productName = document.getElementById("productList.name").value;
    let productImages = document.getElementById("productList.images").value;
    let productPrice = document.getElementById("productList.price").value;

    var newProject = {
      id: productId.length + 1,
      category: productCategory,
      projectName: productName,
      imgUrl: productImages,
      price: productPrice,
    };
    projects.push(newProject);

    localStorage.setItem("storage", JSON.stringify(projects));

    displayProjects();
  });
displayProjects();
