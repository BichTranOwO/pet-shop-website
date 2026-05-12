$(document).ready(function () {
  // ===== HÀM LOAD COMPONENT =====
  function loadComponent(id, filePath, callback) {
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(id).innerHTML = data;

        // chạy callback sau khi load xong
        if (callback) callback();
      })
      .catch((error) => {
        console.log("Loi load component:", error);
      });
  }

  // ===== LOAD HEADER + XỬ LÝ LOGIN =====
  loadComponent("header", "/html/components/header.html", function () {
    updateCartCount();

    let isLogin = localStorage.getItem("isLogin");
    let data = JSON.parse(localStorage.getItem("user"));

    if (isLogin === "true" && data) {
      $(".dropdown-toggle").html(`
        <i class="fa-solid fa-user"></i> ${data.username}
      `);

      $("#menuUser").html(`
        <li><a class="dropdown-item header__dropdown-item" href="/html/account.html?tab=profile">Thông tin cá nhân</a></li>
        <li><a class="dropdown-item header__dropdown-item" href="/html/account.html?tab=orders">Đơn hàng của tôi</a></li>
        <li><a class="dropdown-item header__dropdown-item" href="/html/account.html?tab=password">Đổi mật khẩu</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item text-danger " href="#" id="logout">Đăng xuất</a></li>
      `);
    } else {
      $("#menuUser").html(`
        <li><a class="dropdown-item header__dropdown-item" href="/html/login.html">Đăng nhập</a></li>
        <li><a class="dropdown-item header__dropdown-item" href="/html/register.html">Đăng ký</a></li>
      `);
    }
  });

  // ===== LOAD FOOTER =====
  loadComponent("footer", "/html/components/footer.html");

  // ===== LOGOUT =====
  $(document).on("click", "#logout", function () {
    localStorage.removeItem("isLogin");
    location.reload();
  });
});
