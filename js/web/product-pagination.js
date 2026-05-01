let products = document.querySelectorAll("#product-list .col");

let productsPerPage = 9;
let currentPage = 1;

let page1 = document.getElementById("page-1");
let page2 = document.getElementById("page-2");
let prevPage = document.getElementById("prev-page");
let nextPage = document.getElementById("next-page");

function showPage(pageNumber) {
    currentPage = pageNumber;

    let start = (pageNumber - 1) * productsPerPage;
    let end = start + productsPerPage;

    for (let i = 0; i < products.length; i++) {
        if (i >= start && i < end) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }

    page1.parentElement.classList.remove("active");
    page2.parentElement.classList.remove("active");

    if (currentPage === 1) {
        page1.parentElement.classList.add("active");
    } else {
        page2.parentElement.classList.add("active");
    }
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

    if (currentPage < 2) {
        showPage(currentPage + 1);
    }
});

showPage(1);