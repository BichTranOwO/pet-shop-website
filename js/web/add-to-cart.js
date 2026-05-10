document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();

  let buttons = document.querySelectorAll(".btn-primary");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let id = btn.getAttribute("data-id");
      if (!id) return;

      let card = btn.closest(".card");

      let name = card.querySelector(".card-title").innerText;
      let priceText = card.querySelector(".product-card__price").innerText;
      let img = card.querySelector("img").src;

      let price = parseInt(priceText.replace(/\D/g, ""));

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      let found = cart.find((item) => item.id === id);

      if (found) {
        found.quantity += 1;
      } else {
        cart.push({
          id: id,
          name: name,
          price: price,
          img: img,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      updateCartCount();

      alert(" Đã thêm sản phẩm !");
    });
  });
});
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = 0;

  cart.forEach((item) => {
    total += item.quantity;
  });

  let badge = document.querySelector(".header__cart-badge");

  if (badge) {
    badge.innerText = total;

    if (total === 0) {
      badge.style.display = "none";
    } else {
      badge.style.display = "inline-block";
    }
  }
}
