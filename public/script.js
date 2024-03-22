function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/login", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Giriş başarılı, müşteri paneline yönlendir
                window.location.href = "customer.html";
            } else if (xhr.status === 401) {
                // Geçersiz e-posta veya şifre mesajı
                alert(xhr.responseText);
            }
        }
    };
    xhr.send("email=" + email + "&password=" + password);
}

function register() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/signup", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Kayıt başarılı mesajı
                alert(xhr.responseText);
            } else {
                // Sunucu hatası mesajı
                alert(xhr.responseText);
            }
        }
    };
    xhr.send("email=" + email + "&password=" + password);
}


function logout() {
    // Kullanıcının oturumunu sonlandır ve login sayfasına yönlendir
    localStorage.removeItem("userEmail");
    window.location.href = "login.html";
}