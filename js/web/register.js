$(document).ready(function () {
  // ===== TÊN =====
  $("#txtTendn").blur(function (e) {
    e.preventDefault();

    let ten = $("#txtTendn").val().trim();
    let regTen = /^(?=.*[A-Za-zÀ-ỹ])[A-ZÀ-Ỹ][A-Za-zÀ-ỹ0-9\s]*$/;

    if (ten == "") {
      $("#errUser").text("(Không được rỗng)");
    } else if (!/^[A-ZÀ-Ỹ]/.test(ten)) {
      $("#errUser").text("(Phải viết hoa chữ cái đầu)");
    } else if (!regTen.test(ten)) {
      $("#errUser").text("(Sai định dạng (ví dụ: Nguyen Van A))");
    } else {
      $("#errUser").text("");
    }
  });

  // ===== SĐT =====
  $("#sdt").blur(function (e) {
    e.preventDefault();

    let sdt = $("#sdt").val().trim();
    let regSdt = /^0\d{9}$/;

    if (sdt == "") {
      $("#errPhone").text("(Không được rỗng)");
    } else if (!regSdt.test(sdt)) {
      $("#errPhone").text("(SĐT phải 10 số)");
    } else {
      $("#errPhone").text("");
    }
  });

  // ===== EMAIL =====
  $("#email").blur(function (e) {
    e.preventDefault();

    let email = $("#email").val().trim();
    let regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email == "") {
      $("#errEmail").text("(Không được rỗng)");
    } else if (!regEmail.test(email)) {
      $("#errEmail").text("(Email không hợp lệ)");
    } else {
      $("#errEmail").text("");
    }
  });

  // ===== PASSWORD =====
  $("#password").blur(function (e) {
    e.preventDefault();

    let pass = $("#password").val().trim();
    let regPass = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (pass == "") {
      $("#errPass").text("(Không được rỗng)");
    } else if (!regPass.test(pass)) {
      $("#errPass").text(
        "(Mật khẩu là phải trên 8 và có ít nhất ký tự đặc biệt)",
      );
    } else {
      $("#errPass").text("");
    }
  });

  // ===== CLICK ĐĂNG KÝ =====
  $("#btnDangKy").click(function (e) {
    e.preventDefault();

    // lấy dữ liệu TRƯỚC
    let user = $("#txtTendn").val().trim();
    let phone = $("#sdt").val().trim();
    let email = $("#email").val().trim();
    let pass = $("#password").val().trim();

    // ép chạy validate để hiện lỗi
    $("#txtTendn").blur();
    $("#sdt").blur();
    $("#email").blur();
    $("#password").blur();

    // check rỗng
    if (user == "" || phone == "" || email == "" || pass == "") {
      alert("Thông tin không được rỗng, kiểm tra lại!");
      return;
    }

    // check lỗi dựa vào thông báo dưới form
    if (
      $("#errUser").text() !== "" ||
      $("#errPhone").text() !== "" ||
      $("#errEmail").text() !== "" ||
      $("#errPass").text() !== ""
    ) {
      alert("Thông tin không hợp lệ, kiểm tra lại!");
      return;
    }

    // lưu dữ liệu
    let userData = {
      username: user,
      phone: phone,
      email: email,
      password: pass,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Đăng ký thành công ");
    window.location.href = "/html/login.html";
  });
});
