document.addEventListener("DOMContentLoaded", function() {
  // Initialize Vue instance for the navbar
    new Vue({
      el: '#vueNavbar',
      data: {
      navItems: [
          { text: "Arabic Version", href: "arabicVersion.html" },
          { text: "Details", href: "detailsPage.html" },
          { text: "Contact Us", href: "contactUs.html" },
          { text: "Submit a job offer", href: "hireMe.html" },
          { text: "Play a Game", href: "game.html" },
          { text: "ApiDog", href: "dogImages.html" }
      ]
  }
    });


  let timeoutId;

  const resetScreensaverTimer = () => {
      clearTimeout(timeoutId);
      document.getElementById("screensaver").style.display = "none";
      timeoutId = setTimeout(showScreensaver, 60000); // 1 minute
  }

  const showScreensaver = () => {
      
      const screensaverDiv = document.getElementById("screensaver");
      screensaverDiv.style.display = "block";

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
  resetScreensaverTimer(); // Init screensaver timer

  // Javascript4 Exercise 2: Using function expressions and arrow functions
  const closePopup = () => {
      document.getElementById("helpPopup").classList.add("hidden");
  }

  document.addEventListener("keydown", (event) => {
      if (event.key.toLowerCase() === 'h') { // Press 'H' for help
          document.getElementById("helpPopup").classList.remove("hidden");
      }
  });
});
