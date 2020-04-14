document.addEventListener("DOMContentLoaded", function(event) {

  const links = document.querySelectorAll('[data-target-section]')

  // Adds scroll animation on click
  function addClickBehaviorToMenuLinks() {
    links.forEach((link) => link.addEventListener('click', (event) => {
      event.preventDefault()
      const id = link.dataset.targetSection
      const section = document.getElementById(id)

      section.scrollIntoView({ behavior: 'smooth' })
    }))
  }

  addClickBehaviorToMenuLinks()
});

