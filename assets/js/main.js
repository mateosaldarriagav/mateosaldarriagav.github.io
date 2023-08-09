/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', {
  delay: 400
});
sr.reveal('.home__social-icon', {
  interval: 200
});
sr.reveal('.skills__data, .work__img, .contact__input', {
  interval: 200
});



/* Inicio funcion boton subir arriba  */

const backGoToUpElement = document.querySelector(".scrollTop");

backGoToUpElement.addEventListener("click", backGoToUp, false);

function backGoToUp() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scrollTop > 0 ?
    (backGoToUpElement.style.transform = "scale(1)") :
    (backGoToUpElement.style.transform = "scale(0)");
});

/* Fin funcion boton subir arriba  */

// Función para abrir la ventana modal con los detalles correspondientes
function openModal(id) {
  var modal = document.getElementById("modal");
  var title = document.getElementById("modal-title");
  var details = document.getElementById("modal-details");

  switch (id) {
    case 1:
      title.textContent = "Corporación Universitaria Uniremington";
      details.textContent = "Desarrollador de software | Tecnología/Técnico de ingeniería informática (octubre de 2022 - junio de 2024)";
      break;
    case 2:
      title.textContent = "Servicio Nacional de Aprendizaje (SENA)";
      details.textContent = "Desarrollador de software | Tecnología/Técnico de ingeniería informática (septiembre de 2021 - diciembre de 2022)";
      break;
    case 3:
      title.textContent = "MAKAIA";
      details.textContent = "Desarrollador de software | Certificación en desarrollo frontend en ReactJS y aplicación de herramientas de Design Thinking (agosto de 2020 - diciembre de 2020)";
      break;
    case 4:
      title.textContent = "Universidad Católica Luis Amigó - Funlam";
      details.textContent = "Desarrollador de software | Ingeniería de sistemas (enero de 2019 - diciembre de 2019)";
      break;
    case 5:
      title.textContent = "Institución Universitaria Salazar y Herrera - IUSH";
      details.textContent = "Desarrollador de software | Ingeniería de sistemas (enero de 2018 - diciembre de 2018)";
      break;
    default:
      break;
  }
  modal.style.display = "block";

}



// Función para abrir la ventana modal con los detalles correspondientes
function openModalxp(id) {
  var modal = document.getElementById("modal");
  var title = document.getElementById("modal-title");
  var details = document.getElementById("modal-details");

  switch (id) {
    case 1:
      title.textContent = "1cero1 Software SAS";
      details.textContent = "Desarrollador de front-end | marzo de 2023 - Presente (3 meses) | Medellín, Antioquia, Colombia";
      break;
    case 2:
      title.textContent = "Desarrollador Full Stack";
      details.textContent = "Desarrollador full stack | noviembre de 2022 - enero de 2023 (3 meses) | Medellín, Antioquia, Colombia";
      break;
    case 3:
      title.textContent = "Arus SA";
      details.textContent = "Analista de desarrollo de software | julio de 2022 - diciembre de 2022 (6 meses) | Medellín, Antioquia, Colombia";
      break;
    default:
      break;
  }

  modal.style.display = "block";
}


function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

var modal = document.getElementById("modal");


function closeModal() {
  // Código para cerrar la ventana modal
  modal.style.display = "none";
}

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});