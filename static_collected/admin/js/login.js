const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Perform user registration
  const user = { username, password };
  // You can store the user object in a database or any other storage system

  alert("User created successfully!");

  // Clear the form fields
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});
