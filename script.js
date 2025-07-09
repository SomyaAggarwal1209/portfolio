// Mobile Navigation Toggle
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Animate skill bars when they come into view
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll(".skill-progress")
      skillBars.forEach((bar) => {
        const width = bar.getAttribute("data-width")
        setTimeout(() => {
          bar.style.width = width + "%"
        }, 200)
      })
    }
  })
}, observerOptions)

// Observe skills section
const skillsSection = document.querySelector(".about")
if (skillsSection) {
  observer.observe(skillsSection)
}

// Add fade-in animation to sections
const fadeElements = document.querySelectorAll(".skill-card, .timeline-item, .project-card")

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  },
)

fadeElements.forEach((el) => {
  el.classList.add("fade-in")
  fadeObserver.observe(el)
})

// Form submission handler
const contactForm = document.querySelector(".contact-form form")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(this)
    const name = this.querySelector('input[type="text"]').value
    const email = this.querySelector('input[type="email"]').value
    const message = this.querySelector("textarea").value

    // Simple validation
    if (name && email && message) {
      // Simulate form submission
      const submitBtn = this.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent

      submitBtn.textContent = "Sending..."
      submitBtn.disabled = true

      setTimeout(() => {
        alert("Thank you for your message! I'll get back to you soon.")
        this.reset()
        submitBtn.textContent = originalText
        submitBtn.disabled = false
      }, 1500)
    } else {
      alert("Please fill in all fields.")
    }
  })
}

// Add navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgb(202, 232, 189, 0.94)"
  } else {
    navbar.style.background = "rgb(202, 232, 189, 0.94)"
  }
})

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect on page load
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const originalText = heroTitle.textContent
    // Uncomment the line below to enable typing effect
    // typeWriter(heroTitle, originalText, 80);
  }
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})
