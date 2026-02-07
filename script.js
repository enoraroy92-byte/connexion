const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = form.querySelector('input[type="text"]').value;
  const password = form.querySelector('input[type="password"]').value;

  if (username === "admin" && password === "1234") {
    alert("Connexion réussie 🌿");
  } else {
    alert("Nom d'utilisateur ou mot de passe incorrect ❌");
  }
});

const passwordInput = document.querySelector('input[type="password"]');
const toggleBtn = document.getElementById("togglePassword");

toggleBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.textContent = "Cacher le mot de passe";
  } else {
    passwordInput.type = "password";
    toggleBtn.textContent = "Afficher le mot de passe";
  }
});

const inputs = document.querySelectorAll("input");
const submit = document.querySelector('input[type="submit"]');

inputs.forEach(input => {
  input.addEventListener("input", () => {
    if ([...inputs].every(i => i.value.trim() !== "")) {
      submit.style.backgroundColor = "#6fcf97";
    } else {
      submit.style.backgroundColor = "#ffa15f";
    }
  });
});

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";
});

function animate() {
  followerX += (mouseX - followerX) * 0.15;
  followerY += (mouseY - followerY) * 0.15;

  follower.style.left = followerX + "px";
  follower.style.top = followerY + "px";

  requestAnimationFrame(animate);
}

animate();
document.querySelectorAll("input, a, button").forEach(el => {
  el.addEventListener("mouseenter", () => {
    follower.style.transform = "translate(-50%, -50%) scale(1.6)";
    follower.style.borderColor = "#6fcf97";
  });

  el.addEventListener("mouseleave", () => {
    follower.style.transform = "translate(-50%, -50%) scale(1)";
    follower.style.borderColor = "rgba(255, 161, 95, 0.5)";
  });
});
