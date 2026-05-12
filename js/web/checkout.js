$(document).ready(function () {
  // ===== REGEX =====
  let regName = /^[A-ZÀ-Ỹ][a-zà-ỹ]*(\s[A-ZÀ-Ỹ][a-zà-ỹ]*)*$/;
  let regPhone = /^0\d{9}$/;
  let regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ===== FORMAT TIỀN =====
  function formatMoney(n) {
    return n.toLocaleString("vi-VN") + "đ";
  }

  // ===== LẤY DATA =====
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart || cart.length === 0) {
    $("#orderList").html("<p>Giỏ hàng trống 🐾</p>");
    return;
  }
  function getData() {
    let buyNow = JSON.parse(localStorage.getItem("buyNow"));
    // Ưu tiên buyNow
    if (buyNow && buyNow.length > 0) {
      return buyNow;
    }

    return cart;
  }
  // ===== RENDER =====
  function renderOrder() {
    let data = getData();
    let html = "";
    let tong = 0;

    data.forEach((item) => {
      let thanhTien = item.price * item.quantity;
      tong += thanhTien;

      html += `
      <div class="order-item d-flex mb-3">
        <img src="${item.img}" class="order-item__img">
        <div class="order-item__info ms-3 flex-grow-1">
          <div class="d-flex justify-content-between">
            <span class="order-item__name">${item.name}</span>
            <span class="order-item__price">${formatMoney(thanhTien)}</span>
          </div>
          <small class="order-item__meta text-secondary">
            ${item.desc} - SL: ${item.quantity}
          </small>
        </div>
      </div>
      <hr class="order-summary__divider">
    `;
    });

    $("#orderList").html(html);

    let ship = 20000;
    $("#tamTinh").text(formatMoney(tong));
    $("#phiShip").text(formatMoney(ship));
    $("#tongCong").text(formatMoney(tong + ship));
  }

  renderOrder();

  // ===== VALIDATE =====
  $("#txtHoTen").blur(function () {
    let val = $(this).val().trim();
    if (val == "") {
      $("#errHoTen").text("(Không được rỗng)");
    } else if (!regName.test(val)) {
      $("#errHoTen").text("(Sai định dạng (VD: Nguyen Van A))");
    } else {
      $("#errHoTen").text("");
    }
  });

  $("#txtSDT").blur(function () {
    let val = $(this).val().trim();
    if (val == "") {
      $("#errSDT").text("(Không được rỗng)");
    } else if (!regPhone.test(val)) {
      $("#errSDT").text("(SĐT phải 10 số)");
    } else {
      $("#errSDT").text("");
    }
  });

  $("#txtEmail").blur(function () {
    let val = $(this).val().trim();
    if (val == "") {
      $("#errEmail").text("(Không được rỗng)");
    } else if (!regEmail.test(val)) {
      $("#errEmail").text("(Email không hợp lệ)");
    } else {
      $("#errEmail").text("");
    }
  });

  $("#txtDiaChi").blur(function () {
    let val = $(this).val().trim();
    if (val == "") {
      $("#errDiaChi").text("(Không được rỗng)");
    } else {
      $("#errDiaChi").text("");
    }
  });

  function saveOrder(data) {
    let order = {
      customer: {
        name: $("#txtHoTen").val().trim(),
        phone: $("#txtSDT").val().trim(),
        email: $("#txtEmail").val().trim(),
        address:
          $("#txtDiaChi").val().trim() +
          ", " +
          $("#ward option:selected").text() +
          ", " +
          $("#city option:selected").text(),
      },
      products: data,
      total: $("#tongCong").text(),
      date: new Date().toLocaleString(),
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.removeItem("cart");
    localStorage.removeItem("buyNow");

    alert(
      "Đơn hàng đã được đặt thành công! Đồ ăn ngon đang trên đường tới thú cưng của bạn!!",
    );
    window.location.href = "/html/index.html";
  }
  // ===== CLICK THANH TOÁN =====
  $("#btnThanhToan").click(function (e) {
    e.preventDefault();

    $("#txtHoTen").blur();
    $("#txtSDT").blur();
    $("#txtEmail").blur();
    $("#txtDiaChi").blur();

    if (
      $("#errHoTen").text() !== "" ||
      $("#errSDT").text() !== "" ||
      $("#errEmail").text() !== "" ||
      $("#errDiaChi").text() !== ""
    ) {
      alert("Vui lòng nhập đúng thông tin!");
      return;
    }

    let data = getData();

    if (!data || data.length === 0) {
      alert("Giỏ hàng trống!");
      return;
    }

    //CHECK RADIO
    let payMethod = $("input[name='pay']:checked").attr("id");
    // địa chỉ
    if ($("#ward").val() === null || $("#city").val() === null) {
      alert("Vui lòng chọn đầy đủ địa chỉ!");
      return;
    }
    // CHUYỂN KHOẢN
    if (payMethod === "c2") {
      let total = $("#tongCong").text();

      $("#modalMoney").text(total);

      //  AUTO NỘI DUNG CHUYỂN KHOẢN
      let name = $("#txtHoTen").val().trim();
      let phone = $("#txtSDT").val().trim();

      let defaultNote = ` ${name} CHUYEN KHOAN SHOP PETJOY `;

      $("#transferNote").val(defaultNote);

      let modal = new bootstrap.Modal(document.getElementById("bankModal"));
      modal.show();

      return;
    }

    saveOrder(data);
  });
  $("#btnConfirmTransfer").click(function () {
    let note = $("#transferNote").val().trim();

    if (note === "") {
      alert("Vui lòng nhập nội dung chuyển khoản!");
      return;
    }

    let data = getData();

    saveOrder(data);

    let modal = bootstrap.Modal.getInstance(
      document.getElementById("bankModal"),
    );
    modal.hide();
  });
});
