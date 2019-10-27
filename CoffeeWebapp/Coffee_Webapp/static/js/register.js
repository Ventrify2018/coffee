function myFunction() {
    var x = document.getElementById("password_create");
    var x_c = document.getElementById("password_confirm");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    if (x_c.type === "password") {
        x_c.type = "text";
    } else {
        x_c.type = "password";
    }
}