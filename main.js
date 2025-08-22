// Open modal
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

// Close modal
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Switch between login & signup
function switchModal(currentId, targetId) {
  closeModal(currentId);
  openModal(targetId);
}

// Handle login action
function handleLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    // Close login modal
    closeModal("loginModal");

    // Set welcome message dynamically
    document.getElementById("welcomeMessage").innerText =
      `Hello ${username}, you have successfully logged in!`;

    // Open success popup
    openModal("successPopup");
  } else {
    alert("⚠ Please enter username and password");
  }
}

// Close modal if clicked outside
window.addEventListener("click", function(e) {
  document.querySelectorAll(".modal").forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
// Handle signup action
function handleSignup() {
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("newPassword").value.trim();

  if (fullname && email && password) {
    // Close signup modal
    closeModal("signupModal");

    // Set signup success message
    document.getElementById("signupMessage").innerText =
      `🎉 Welcome ${fullname}! Your account has been created successfully.`;

    // Open success popup
    openModal("signupSuccess");
  } else {
    alert("⚠ Please fill all fields to sign up");
  }
}
// Toggle profile box
function toggleProfileBox() {
  const box = document.getElementById("profileBox");
  box.style.display = (box.style.display === "block") ? "none" : "block";
}

// Close if clicked outside
window.addEventListener("click", function(e) {
  const box = document.getElementById("profileBox");
  const profile = document.querySelector(".profile");
  if (box && box.style.display === "block" && !profile.contains(e.target)) {
    box.style.display = "none";
  }
});

// Logout
function logout() {
  document.getElementById("profileName").innerText = "👤 Guest";
  document.getElementById("profileEmail").innerText = "guest@example.com";
  alert("🚪 Logged out!");
}
 var map = L.map('map').setView([19.9975, 73.7898], 13);

    // Add OpenStreetMap tiles (free, no API key)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Example markers
    L.marker([19.995, 73.78]).addTo(map).bindPopup("🚧 Road Construction");
    L.marker([20.01, 73.80]).addTo(map).bindPopup("💧 Sewage Overflow");