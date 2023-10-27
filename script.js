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

