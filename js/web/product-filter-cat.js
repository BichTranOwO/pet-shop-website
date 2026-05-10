let filterProductsData = [
    { id: "product-1", brand: "nekko", type: "pate", price: 17000 },
    { id: "product-2", brand: "snappy-tom", type: "pate", price: 16000 },
    { id: "product-3", brand: "royal-canin", type: "hatkho", price: 132000 },
    { id: "product-4", brand: "wanpy", type: "pate", price: 8000 },
    { id: "product-5", brand: "monchou", type: "pate", price: 14000 },
    { id: "product-6", brand: "pawsome", type: "pate", price: 25000 },
    { id: "product-7", brand: "5plus", type: "pate", price: 17000 },
    { id: "product-8", brand: "kit-cat", type: "pate", price: 345000 },
    { id: "product-9", brand: "moochie", type: "pate", price: 14000 },
    { id: "product-10", brand: "ciao", type: "pate", price: 12000 },
    { id: "product-11", brand: "snappy-tom", type: "pate", price: 18000 },
    { id: "product-12", brand: "moochie", type: "pate", price: 17000 },
    { id: "product-13", brand: "nekko", type: "pate", price: 17000 },
    { id: "product-14", brand: "royal-canin", type: "hatkho", price: 112000 },
    { id: "product-15", brand: "royal-canin", type: "hatkho", price: 159000 },
    { id: "product-16", brand: "royal-canin", type: "hatkho", price: 195000 },
    { id: "product-17", brand: "ciao", type: "pate", price: 15000 },
    { id: "product-18", brand: "happy-choice", type: "pate", price: 26000 }
];

let brandIds = [
    "brand-ciao",
    "brand-kit-cat",
    "brand-monchou",
    "brand-moochie",
    "brand-nekko",
    "brand-happy-choice",
    "brand-pawsome",
    "brand-royal-canin",
    "brand-snappy-tom",
    "brand-wanpy",
    "brand-5plus"
];

let typeIds = ["hatkho", "pate"];

let priceIds = ["price1", "price2", "price3", "price4"];

function getBrandFromId(brandId) {
    return brandId.replace("brand-", "");
}

function hasAnyChecked(ids) {
    for (let i = 0; i < ids.length; i++) {
        let checkbox = document.getElementById(ids[i]);

        if (checkbox.checked) {
            return true;
        }
    }

    return false;
}

function isBrandMatch(productBrand) {
    if (!hasAnyChecked(brandIds)) {
        return true;
    }

    for (let i = 0; i < brandIds.length; i++) {
        let checkbox = document.getElementById(brandIds[i]);
        let brand = getBrandFromId(brandIds[i]);

        if (checkbox.checked && productBrand === brand) {
            return true;
        }
    }

    return false;
}

function isTypeMatch(productType) {
    if (!hasAnyChecked(typeIds)) {
        return true;
    }

    for (let i = 0; i < typeIds.length; i++) {
        let checkbox = document.getElementById(typeIds[i]);

        if (checkbox.checked && productType === typeIds[i]) {
            return true;
        }
    }

    return false;
}

function isPriceMatch(productPrice) {
    let price1 = document.getElementById("price1").checked;
    let price2 = document.getElementById("price2").checked;
    let price3 = document.getElementById("price3").checked;
    let price4 = document.getElementById("price4").checked;

    if (!price1 && !price2 && !price3 && !price4) {
        return true;
    }

    if (price1 && productPrice < 100000) {
        return true;
    }

    if (price2 && productPrice >= 100000 && productPrice <= 500000) {
        return true;
    }

    if (price3 && productPrice > 500000 && productPrice <= 1000000) {
        return true;
    }

    if (price4 && productPrice > 1000000) {
        return true;
    }

    return false;
}

function filterProducts() {
    for (let i = 0; i < filterProductsData.length; i++) {
        let product = filterProductsData[i];
        let productElement = document.getElementById(product.id);

        let matchBrand = isBrandMatch(product.brand);
        let matchType = isTypeMatch(product.type);
        let matchPrice = isPriceMatch(product.price);

        if (matchBrand && matchType && matchPrice) {
            productElement.style.display = "block";
        } else {
            productElement.style.display = "none";
        }
    }
}

for (let i = 0; i < brandIds.length; i++) {
    let checkbox = document.getElementById(brandIds[i]);
    checkbox.addEventListener("change", filterProducts);
}

for (let i = 0; i < typeIds.length; i++) {
    let checkbox = document.getElementById(typeIds[i]);
    checkbox.addEventListener("change", filterProducts);
}

for (let i = 0; i < priceIds.length; i++) {
    let checkbox = document.getElementById(priceIds[i]);
    checkbox.addEventListener("change", filterProducts);
}