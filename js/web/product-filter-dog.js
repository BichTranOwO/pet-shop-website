let filterProductsData = [
    { id: "product-1", brand: "ganador", type: "hatkho", price: 127000 },
    { id: "product-2", brand: "ganador", type: "hatkho", price: 169000 },
    { id: "product-3", brand: "dexinbone", type: "hatkho", price: 32000 },
    { id: "product-4", brand: "royal-canin", type: "hatkho", price: 449000 },
    { id: "product-5", brand: "monge", type: "pate", price: 55000 },
    { id: "product-6", brand: "inu-fonti", type: "hatkho", price: 20000 },
    { id: "product-7", brand: "inu-fonti", type: "hatkho", price: 40000 },
    { id: "product-8", brand: "smartheart", type: "hatkho", price: 155000 },
    { id: "product-9", brand: "smartheart", type: "hatkho", price: 114000 },
    { id: "product-10", brand: "smartheart", type: "pate", price: 40000 },
    { id: "product-11", brand: "royal-canin", type: "hatkho", price: 679000 },
    { id: "product-12", brand: "monge", type: "pate", price: 45000 },
    { id: "product-13", brand: "pedigree", type: "hatkho", price: 35000 },
    { id: "product-14", brand: "royal-canin", type: "pate", price: 81000 },
    { id: "product-15", brand: "ganador", type: "pate", price: 15000 }
];

let brandIds = [
    "brand-ganador",
    "brand-inu-fonti",
    "brand-royal-canin",
    "brand-monge",
    "brand-smartheart",
    "brand-pedigree",
    "brand-dexinbone"
];

let typeIds = ["hatkho", "pate"];

let priceIds = ["price1", "price2", "price3", "price4"];

function getBrandFromId(brandId) {
    return brandId.replace("brand-", "");
}

function hasAnyChecked(ids) {
    for (let i = 0; i < ids.length; i++) {
        let checkbox = document.getElementById(ids[i]);

        if (checkbox && checkbox.checked) {
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

        if (checkbox && checkbox.checked && productBrand === brand) {
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

        if (checkbox && checkbox.checked && productType === typeIds[i]) {
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

    if (checkbox) {
        checkbox.addEventListener("change", filterProducts);
    }
}

for (let i = 0; i < typeIds.length; i++) {
    let checkbox = document.getElementById(typeIds[i]);

    if (checkbox) {
        checkbox.addEventListener("change", filterProducts);
    }
}

for (let i = 0; i < priceIds.length; i++) {
    let checkbox = document.getElementById(priceIds[i]);

    if (checkbox) {
        checkbox.addEventListener("change", filterProducts);
    }
}