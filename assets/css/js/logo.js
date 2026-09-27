document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img.logo").forEach(img => {
    img.src = "/eb-frontend/logo-etoile-brillante.jpg";
    img.alt = "Groupe Scolaire Étoile Brillante";
  });
});
