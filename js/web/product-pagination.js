let allProducts = Array.from(document.querySelectorAll("#product-list .col"));
let products = [...allProducts];

let productsPerPage = 9;
let currentPage = 1;

let page1 = document.getElementById("page-1");
let page2 = document.getElementById("page-2");
let prevPage = document.getElementById("prev-page");
let nextPage = document.getElementById("next-page");

function hideAllProducts() {
  for (let i = 0; i < allProducts.length; i++) {
    allProducts[i].style.display = "none";
  }
}

function getTotalPages() {
  return Math.ceil(products.length / productsPerPage);
}

function updatePagination() {
  let totalPages = getTotalPages();

  page1.parentElement.classList.remove("active");
  page2.parentElement.classList.remove("active");

  if (currentPage === 1) {
    page1.parentElement.classList.add("active");
  }

  if (currentPage === 2) {
    page2.parentElement.classList.add("active");
  }

  if (totalPages <= 1) {
    page2.parentElement.style.display = "none";
  } else {
    page2.parentElement.style.display = "block";
  }

  if (currentPage <= 1) {
    prevPage.parentElement.classList.add("disabled");
  } else {
    prevPage.parentElement.classList.remove("disabled");
  }

  if (currentPage >= totalPages) {
    nextPage.parentElement.classList.add("disabled");
  } else {
    nextPage.parentElement.classList.remove("disabled");
  }
}

function showPage(pageNumber) {
  let totalPages = getTotalPages();

  if (totalPages === 0) {
    totalPages = 1;
  }

  if (pageNumber < 1) {
    pageNumber = 1;
  }

  if (pageNumber > totalPages) {
    pageNumber = totalPages;
  }

  currentPage = pageNumber;

  hideAllProducts();

  let start = (currentPage - 1) * productsPerPage;
  let end = start + productsPerPage;

  for (let i = start; i < end && i < products.length; i++) {
    products[i].style.display = "block";
  }

  updatePagination();
}

function setFilteredProducts(productIds) {
  products = [];

  for (let i = 0; i < productIds.length; i++) {
    let productElement = document.getElementById(productIds[i]);

    if (productElement) {
      products.push(productElement);
    }
  }

  showPage(1);
}

page1.addEventListener("click", function (event) {
  event.preventDefault();
  showPage(1);
});

page2.addEventListener("click", function (event) {
  event.preventDefault();
  showPage(2);
});

prevPage.addEventListener("click", function (event) {
  event.preventDefault();

  if (currentPage > 1) {
    showPage(currentPage - 1);
  }
});

nextPage.addEventListener("click", function (event) {
  event.preventDefault();

  if (currentPage < getTotalPages()) {
    showPage(currentPage + 1);
  }
});

showPage(1);
