$(document).ready(function () {
  // ===== CHECK LOGIN =====
  if (localStorage.getItem("isLogin") !== "true") {
    alert("Bạn chưa đăng nhập!");
    window.location.href = "/html/login.html";
    return;
  }

  let data = JSON.parse(localStorage.getItem("user"));

  // ===== LOAD DATA =====
  $("#txtHoTen").val(data.username);
  $("#txtSDT").val(data.phone);
  $("#txtEmail").val(data.email);

  // ===== CẬP NHẬT THÔNG TIN =====
  $("#btnCapNhatProfile").click(function (e) {
    e.preventDefault();

    let name = $("#txtHoTen").val().trim();
    let phone = $("#txtSDT").val().trim();
    let email = $("#txtEmail").val().trim();

    if (name == "" || phone == "" || email == "") {
      alert("Không được để trống");
      return;
    }

    data.username = name;
    data.phone = phone;
    data.email = email;

    localStorage.setItem("user", JSON.stringify(data));

    alert("Cập nhật thành công 🎉");
  });

  // ===== ĐỔI MẬT KHẨU =====
  $("#btnDoiPass").click(function (e) {
    e.preventDefault();

    let oldPass = $("#txtPassHienTai").val().trim();
    let newPass = $("#txtPassMoi").val().trim();
    let confirm = $("#txtXacNhanPassMoi").val().trim();

    let regPass = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (oldPass !== data.password) {
      alert("Sai mật khẩu cũ ");
      return;
    }

    if (!regPass.test(newPass)) {
      alert("Mật khẩu ≥ 8 ký tự, có số và ký tự đặc biệt ");
      return;
    }

    if (newPass !== confirm) {
      alert("Xác nhận mật khẩu không đúng ");
      return;
    }

    data.password = newPass;
    localStorage.setItem("user", JSON.stringify(data));

    alert("Đổi mật khẩu thành công ");

    $("#oldPass, #newPass, #confirmPass").val("");
  });
  let params = new URLSearchParams(window.location.search);
  let tab = params.get("tab");

  if (tab === "profile") {
    new bootstrap.Tab(document.querySelector("#tab-profile")).show();
  } else if (tab === "orders") {
    new bootstrap.Tab(document.querySelector("#tab-orders")).show();
  } else if (tab === "password") {
    new bootstrap.Tab(document.querySelector("#tab-password")).show();
  }
  // ===== LOGOUT =====
  $("#btnDangXuat").click(function () {
    localStorage.removeItem("isLogin");
    window.location.href = "/html/login.html";
  });
});
