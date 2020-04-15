document.addEventListener("DOMContentLoaded", function(event) {

  // Toggles mobile menu
  function toggleMenu() {
    document.getElementById('button_menu').addEventListener('click', function(event) {
      var asideElement = document.querySelector('body');

      asideElement.classList.toggle('-open-menu');
    })
  }

  const links = document.querySelectorAll('[data-target-section]')

  // Adds scroll animation on click
  function addClickBehaviorToMenuLinks() {
    links.forEach((link) => link.addEventListener('click', (event) => {
      event.preventDefault()
      const id = link.dataset.targetSection
      const section = document.getElementById(id)

      var asideElement = document.querySelector('body');
      asideElement.classList.remove('-open-menu');

      section.scrollIntoView({ behavior: 'smooth' })
    }))
  }

  toggleMenu()
  addClickBehaviorToMenuLinks()
});

