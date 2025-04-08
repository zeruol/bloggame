document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của form
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  const accounts = [
      { username: "user1", password: "1111" },
      { username: "user2", password: "2222" },
      { username: "admin", password: "1234" }
  ];

  const account = accounts.find(acc => acc.username === username && acc.password === password);

  if (username === "" || password === "") {
      alert("Please enter both username and password.");
  } else if (account) {
      alert("Login successful!");

      // ✅ Lưu tên người dùng vào localStorage
      localStorage.setItem("loggedInUser", username);

      // ✅ Chuyển về trang chính
      window.location.href = "../index.html";
  } else {
      alert("Invalid username or password.");
  }
});
