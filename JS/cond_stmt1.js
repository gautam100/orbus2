function validation() {
  let userName = document.getElementById("user_name");
  let password = document.getElementById("user_pwd");
  let isError = false;

  if (userName.value === "") {
    document.getElementById("error_msg_container").innerHTML =
      "<strong>User name is mandatory!";
    userName.style.border = "2px solid red";
    isError = true;
  } else {
    userName.style.border = "1px solid #000";
  }

  if (password.value === "") {
    document.getElementById("error_msg_container").innerHTML +=
      "<br /><strong>Password is mandatory!</strong>";
    password.style.border = "2px solid red";
    isError = true;
  } else {
    password.style.border = "1px solid #000";
  }

  if (isError) {
    document.getElementById("error_msg_container").style.display = "block";
  } else {
    document.getElementById("error_msg_container").style.display = "none";
  }
}
