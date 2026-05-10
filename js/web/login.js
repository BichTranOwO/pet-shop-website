$(document).ready(function () {

  let regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ===== HÀM HIỂN THỊ LỖI =====
  function showError(id, message) {
    $(id).text(message);
  }

  function clearError() {
    $("#errEmail").text("");
    $("#errPass").text("");
  }

  // ===== LOGIN =====
  $("#btnDangNhap").click(function (e) {
    e.preventDefault();

    clearError();

    let email = $("#email").val().trim();
    let pass = $("#password").val().trim();

    let isValid = true;

    // ===== VALIDATE EMAIL =====
    if (email === "") {
      showError("#errEmail", "(Email không được rỗng)");
      isValid = false;
    } else if (!regEmail.test(email)) {
      showError("#errEmail", "(Email không hợp lệ)");
      isValid = false;
    }

    // ===== VALIDATE PASSWORD =====
    if (pass === "") {
      showError("#errPass", "(Mật khẩu không được rỗng)");
      isValid = false;
    }

    if (!isValid) return;

    // ===== LẤY DATA =====
    let data = JSON.parse(localStorage.getItem("user"));

    //  CHƯA CÓ TÀI KHOẢN
    if (!data) {
      showError("#errEmail", "(Bạn chưa đăng ký tài khoản)");
      return;
    }

    //  EMAIL KHÔNG TỒN TẠI
    if (email !== data.email) {
      showError("#errEmail", "(Email chưa được đăng ký)");
      return;
    }

    //  SAI MẬT KHẨU
    if (pass !== data.password) {
      showError("#errPass", "(Mật khẩu không đúng)");
      return;
    }

    //  LOGIN THÀNH CÔNG
    localStorage.setItem("isLogin", "true");

    alert("Đăng nhập thành công ");
    window.location.href = "/html/index.html";
  });

});