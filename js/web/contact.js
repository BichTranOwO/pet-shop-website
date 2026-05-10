$(document).ready(function () {

    // ===== REGEX =====
    let regName = /^([A-ZÀ-Ỹ][a-zà-ỹ]*\s)+[A-ZÀ-Ỹ][a-zà-ỹ]*$/;
    let regEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    function checkForm() {
        let name = $("#fullName").val().trim();
        let email = $("#email").val().trim();
        let msg = $("#message").val().trim();

        return (
            regName.test(name) &&
            regEmail.test(email) &&
            msg.length >= 1
        );
    }

    // ===== NAME =====
    $("#fullName").on("input", function () {
        let value = $(this).val().trim();

        if (value === "") {
            $("#nameError").text("Không được để trống");
        } else if (!regName.test(value)) {
            $("#nameError").text("Viết hoa chữ cái đầu mỗi từ");
        } else {
            $("#nameError").text("");
        }
    });

    // ===== EMAIL =====
    $("#email").on("input", function () {
        let value = $(this).val().trim();

        if (value === "") {
            $("#emailError").text("Không được để trống");
        } else if (!regEmail.test(value)) {
            $("#emailError").text("Email phải có đuôi @gmail.com");
        } else {
            $("#emailError").text("");
        }
    });

    // ===== MESSAGE =====
    $("#message").on("input", function () {
        let value = $(this).val().trim();

        if (value === "") {
            $("#msgError").text("Vui lòng nhập nội dung");
        } else {
            $("#msgError").text("");
        }
    });

    // ===== SUBMIT =====
    $("#contactForm").on("submit", function (e) {
        e.preventDefault();

        let name = $("#fullName").val().trim();
        let email = $("#email").val().trim();
        let msg = $("#message").val().trim();

        let isValid = checkForm();

        if (!isValid) {
            alert("Vui lòng nhập đúng thông tin");
            return;
        }

        // THÀNH CÔNG
        alert("Đã gửi liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");

        // reset form
        $("#contactForm")[0].reset();

        // clear lỗi
        $("#nameError").text("");
        $("#emailError").text("");
        $("#msgError").text("");
    });

});