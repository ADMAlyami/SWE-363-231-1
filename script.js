// exercise 1
document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector('.navbar');

  const navItems = [
      { text: "Arabic Version", href: "arabicVersion.html" },
      { text: "Details", href: "detailsPage.html" },
      { text: "Contact Us", href: "contactUs.html" },
      { text: "Submit a job offer", href: "hireMe.html" },
      { text: "Play a Game", href: "game.html" },
      //Javascript 3 exercise 1
      { text: "ApiDog", href: "dogImages.html" }
  ];

  navItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.href;
      a.innerText = item.text;
      li.appendChild(a);
      navbar.appendChild(li);
  });

  // javaScript 3 Exercise 3
  let timeoutId;
  function resetScreensaverTimer() {
    clearTimeout(timeoutId);
    document.getElementById("screensaver").style.display = "none";
    timeoutId = setTimeout(showScreensaver, 60000);  // 1 minute
  }

  function showScreensaver() {
    const screensaverDiv = document.getElementById("screensaver");
    screensaverDiv.style.display = "block";

    // Three.js code for screensaver
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    screensaverDiv.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    camera.position.z = 30;

    function animate() {
      requestAnimationFrame(animate);
      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  }

  document.body.addEventListener("mousemove", resetScreensaverTimer);
  document.body.addEventListener("keypress", resetScreensaverTimer);
  resetScreensaverTimer();  // Init screensaver timer

});

// exercise 2 and i will change the navbar to not delay and transition
document.addEventListener("keydown", function(event) {
  if (event.key === 'h' || event.key === 'H') { // Press 'H' for help
      document.getElementById("helpPopup").classList.remove("hidden");
  }
});

function closePopup() {
  document.getElementById("helpPopup").classList.add("hidden");
}

