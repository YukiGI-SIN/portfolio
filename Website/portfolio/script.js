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

}
function showProjetBasket() {
  const contentArea = document.getElementById("content-area");
  contentArea.classList.add("journal-top-left");
  contentArea.innerHTML = `
   
  `;
}
function showClasseurNumerique() {
  const contentArea = document.getElementById("content-area");
  contentArea.classList.add("journal-top-left");
  contentArea.innerHTML = `
  
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
    
  `;
}
function animateAudio(audioElement, dotElement) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const source = audioCtx.createMediaElementSource(audioElement);
  const analyser = audioCtx.createAnalyser();

  source.connect(analyser);
  analyser.connect(audioCtx.destination);
  analyser.fftSize = 256;

  const dataArray = new Uint8Array(analyser.frequencyBinCount);

  function animate() {
    analyser.getByteFrequencyData(dataArray);
    let avg = dataArray.reduce((a,b) => a+b, 0) / dataArray.length;

    // Bouge le dot selon le volume
    dotElement.style.transform = `translateX(${avg}px)`;
    requestAnimationFrame(animate);
  }

  animate();
}
const dot = document.querySelector(".scanner .dot");
const audioSTI2D = new Audio("Audios/STI2D.mp3");

document.getElementById("btn-toggle-system").addEventListener("click", ()=> { 
    showPage("page-sti2d"); 
    audioSTI2D.currentTime = 0;
    audioSTI2D.play();
    animateAudio(audioSTI2D, dot);
});