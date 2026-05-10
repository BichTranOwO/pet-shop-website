// Lấy dữ liệu từ localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}
// Lưu lại cart
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Format tiền
function formatMoney(number) {
  return number.toLocaleString("vi-VN") + "đ";
}

// Render cart
function renderCart() {
  let cart = getCart();
  let cartList = document.getElementById("cart-list");

  // Nếu giỏ hàng trống
  if (cart.length === 0) {
    cartList.innerHTML = `
            <div class="cart-empty">
                <img src="../assets/icons/icon-trong.svg" alt="">
                <h5>Giỏ hàng của bạn trống</h5>
            </div>
        `;
    document.getElementById("subtotal").innerText = "0đ";
    document.getElementById("total").innerText = "0đ";
    return;
  }

  let html = `
    <div class="cart-header d-flex fw-bold mb-2">
        <div style="width:50%">Đơn hàng</div>
        <div style="width:15%">Thành tiền</div>
        <div style="width:20%">Số lượng</div>
        <div style="width:10%"></div>
      
    </div>
    `;
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    html += `
<div class="cart-item d-flex align-items-center">

    <!-- ĐƠN HÀNG -->
    <div class="d-flex align-items-center gap-3" style="width:50%">
        <img src="${item.img}" class="cart-img">
        <div>
            <h6 class="fw-bold mb-1">${item.name}</h6>
            <p class="mb-0 text-muted">${formatMoney(item.price)}</p>
        </div>
    </div>

    <!-- THÀNH TIỀN -->
    <div style="width:15%">
        <strong>${formatMoney(item.price * item.quantity)}</strong>
    </div>

    <!-- SỐ LƯỢNG -->
    <div class="d-flex align-items-center gap-2" style="width:20%">
        <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${index}, -1)">-</button>
        <span>${item.quantity}</span>
        <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${index}, 1)">+</button>
    </div>

    <!-- XOÁ -->
    <div style="width:10%">
        <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">
            <i class="fa fa-trash"></i>
        </button>
    </div>

</div>
`;
  });

  cartList.innerHTML = html;

  document.getElementById("subtotal").innerText = formatMoney(total);
  document.getElementById("total").innerText = formatMoney(total);
}
document
  .getElementById("btnTienHanhThanhToan")
  .addEventListener("click", function () {
    let cart = getCart();

    if (cart.length === 0) {
      alert("Giỏ hàng trống rồi 🐾");
      return;
    }

    //  Đảm bảo dữ liệu luôn mới nhất
    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "/html/checkout.html";
  });
// Tăng giảm số lượng
function changeQty(index, change) {
  let cart = getCart();

  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart(cart);
  renderCart();
}

// Xóa sản phẩm
function removeItem(index) {
  let cart = getCart();
  cart.splice(index, 1);

  saveCart(cart);
  renderCart();
}

// Load khi vào trang
document.addEventListener("DOMContentLoaded", function () {
  renderCart();
});
