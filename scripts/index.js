// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var normalizedName = username.trim().toLowerCase();

  if (normalizedName === "mici") {
    Swal.fire({
      icon: "success",
      title: "Yey, bener!",
      text: "Lanjut yuk ke halaman ultah 🎉",
      showConfirmButton: false,
      timer: 1000,
    }).then(function () {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Ups, belum pas",
      text: "Sebut namamu yang bener dulu ya",
      confirmButtonText: "Coba lagi",
      confirmButtonColor: "#ff7675",
    });
  }
}