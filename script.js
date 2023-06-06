const nav = document.querySelector(".nav")
const navToggle = document.querySelector(".nav-button")
const menuButton = document.querySelectorAll(".line")

function toggleMenu() {
  nav.classList.toggle("active")
  for (let i = 0; i < menuButton.length; i++) {
    menuButton[i].classList.toggle("active")
  }
}

const header = document.querySelector("header")
const headerContainer = header.querySelector(".header-container")

const headerIo = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      headerContainer.classList.remove("active")
    } else {
      headerContainer.classList.add("active")
    }
  })
})

headerIo.observe(header)

navToggle.addEventListener('click', toggleMenu)