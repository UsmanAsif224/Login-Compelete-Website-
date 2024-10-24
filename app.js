function onSubmit() {
  console.log("Click");
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log(email, password);

  if (!email || !password) {
    alert("required fields are missing");
    return;
  }
  let isValid = email.indexOf("@gmail.com");
  console.log(isValid);

  if (isValid == -1) {
    alert("Wrong Email");
    return;
  }
  if (email === "minhajwahid@gmail.com" && password === "admin123") {
    alert("Login Successfully");
    window.location.href = "./main.html";
  } else {
    alert("invalid email and password");
  }
  email = "";
  password = "";
}
