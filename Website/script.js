function loadJournal() {
  const contentArea = document.getElementById("content-area");
  const leftPanel = document.getElementById("left-panel");
  const centerPanel = document.querySelector('.center-panel');

  leftPanel.style.display = "none";
  contentArea.style.display = "block";
  if (centerPanel) centerPanel.style.display = "none";

  // Ajoute une classe pour le style en haut à gauche
  contentArea.classList.add("journal-top-left");

  contentArea.innerHTML = `
    <h2>Journal de Bord</h2>
    <p>9 septembre 2025 : Création d'un site internet pour le portfolio.</p>
    <button onclick="backToHome()">Retour</button>
  `;
}

function backToHome() {
  const contentArea = document.getElementById("content-area");
  const leftPanel = document.getElementById("left-panel");
  const centerPanel = document.querySelector('.center-panel');

  leftPanel.style.display = "block";
  contentArea.style.display = "none";
  if (centerPanel) centerPanel.style.display = "block";

  // Retire la classe spéciale
  contentArea.classList.remove("journal-top-left");
}
function loadJournal() {
  const contentArea = document.getElementById("content-area");
  const leftPanel = document.getElementById("left-panel");
  const centerPanel = document.querySelector('.center-panel');

  leftPanel.style.display = "none";
  contentArea.style.display = "block";
  if (centerPanel) centerPanel.style.display = "none";

  // Ajoute une classe pour le style en haut à gauche
  contentArea.classList.add("journal-top-left");

  contentArea.innerHTML = `
    <h2>Journal de Bord</h2>
    <p>9 septembre 2025 : Création d'un site internet pour le portfolio.</p>
    <p>9 septembre 2025 : Modifications et améliorations du site.</p>
    <div class="retour-btn-container">
      <button onclick="backToHome()">Retour</button>
    </div>
  `;
}
function loadProjets() {
  const contentArea = document.getElementById("content-area");
  const leftPanel = document.getElementById("left-panel");
  const centerPanel = document.querySelector('.center-panel');

  leftPanel.style.display = "none";
  contentArea.style.display = "block";
  if (centerPanel) centerPanel.style.display = "none";

  // Ajoute la classe pour placer en haut à gauche
  contentArea.classList.add("journal-top-left");

  contentArea.innerHTML = `
  <h2>Projets / Réalisations</h2>
  <ul>
    <li>
      Projet 1 : <a href="#" onclick="showProjetBasket();return false;">Projet Basket</a>
    </li>
    <li>
  Projet 2 : <a href="#" onclick="showClasseurNumerique();return false;">Classeur numérique</a>
    </li>
  </ul>
  <div class="retour-btn-container">
    <button onclick="backToHome()">Retour</button>
  </div>
`;
}
function loadDossier() {
  const contentArea = document.getElementById("content-area");
  const leftPanel = document.getElementById("left-panel");
  const centerPanel = document.querySelector('.center-panel');

  leftPanel.style.display = "none";
  contentArea.style.display = "block";
  if (centerPanel) centerPanel.style.display = "none";

  // Ajoute la classe pour placer en haut à gauche
  contentArea.classList.add("journal-top-left");

  contentArea.innerHTML = `
    <h2>Dossier Technique</h2>
    <ul>
      <li>Dossier 1 : Analyse technique du projet Basket</li>
      <li>Dossier 2 : Documentation du site internet (classeur numérique)</li>
    </ul>
    <div class="retour-btn-container">
      <button onclick="backToHome()">Retour</button>
    </div>
  `;
}
function showProjetBasket() {
  const contentArea = document.getElementById("content-area");
  contentArea.classList.add("journal-top-left");
  contentArea.innerHTML = `
    <h2>Projet Basket</h2>
    <p>Lanceur de balle de ping-pong automatisé</p>
    <div class="retour-btn-container">
      <button onclick="loadProjets()">Retour aux projets</button>
    </div>
  `;
}
function showClasseurNumerique() {
  const contentArea = document.getElementById("content-area");
  contentArea.classList.add("journal-top-left");
  contentArea.innerHTML = `
    <h2>Classeur numérique</h2>
    <img src="Site-internet-view.png" style="width:100%;max-width:250px;border-radius:8px;margin-bottom:1rem;">
    <p>Un site internet permettant d'organiser, stocker et partager des documents scolaires de façon numérique.</p>
    <div class="retour-btn-container">
      <button onclick="loadProjets()">Retour aux projets</button>
    </div>
  `;
}
function loadContact() {
  const contentArea = document.getElementById("content-area");
  const leftPanel = document.getElementById("left-panel");
  const centerPanel = document.querySelector('.center-panel');

  leftPanel.style.display = "none";
  contentArea.style.display = "block";
  if (centerPanel) centerPanel.style.display = "none";

  // Ajoute la classe pour placer en haut à gauche
  contentArea.classList.add("journal-top-left");

  contentArea.innerHTML = `
    <h2>Contact</h2>
    <p>Vous pouvez me contacter à l'adresse suivante :</p>
    <div class="retour-btn-container">
      <button onclick="backToHome()">Retour</button>
    </div>
  `;
}
function adminLogin() {
  alert("Espace admin !");
}
function showSTI2D() {
  const contentArea = document.getElementById("content-area");
  const leftPanel = document.getElementById("left-panel");
  const centerPanel = document.querySelector('.center-panel');

  leftPanel.style.display = "none";
  contentArea.style.display = "block";
  if (centerPanel) centerPanel.style.display = "none";

  contentArea.classList.add("journal-top-left");
  contentArea.innerHTML = `
    <h2>STI2D</h2>
    <p>Présentation de la filière STI2D, projets réalisés, compétences acquises, etc.</p>
    <div class="retour-btn-container">
      <button onclick="backToHome()">Retour</button>
    </div>
  `;
}
function showProjetsperso() {
  const contentArea = document.getElementById("content-area");
  const leftPanel = document.getElementById("left-panel");
  const centerPanel = document.querySelector('.center-panel');

  leftPanel.style.display = "none";
  contentArea.style.display = "block";
  if (centerPanel) centerPanel.style.display = "none";

  contentArea.classList.add("journal-top-left");
  contentArea.innerHTML = `
    <h2>Mes Projets Perso</h2>
    <p>Présentation de mes projets réalisée au cours de l'année de 1ère et de terminale</p>
    <div class="retour-btn-container">
      <button onclick="backToHome()">Retour</button>
    </div>
  `;
}