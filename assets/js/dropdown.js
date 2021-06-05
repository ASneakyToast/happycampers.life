const addOffClick = (e, cb) => {
  const offClick = (evt) => {
    if (e !== evt) {
      cb();
      document.removeEventListener('click', offClick);
    }
  }
  document.addEventListener('click', offClick);
}

const handleDropdown = (e, section_container, state="toggle") => {
  let dropdown_container = section_container.querySelector('.dropdown-nav');

  const toggleMenu = () => dropdown_container.classList.toggle('hidden');
  if (dropdown_container.classList.contains('hidden')) {
    toggleMenu();
    addOffClick(e, toggleMenu);
  }
}

let dropdowns = document.querySelectorAll('.dropdown');
for (let i=0; i<dropdowns.length; i++) {
  addHoverHandler(dropdowns[i]);
}

function addHoverHandler(section_container) {
  let dropdown_container = section_container.querySelector('.dropdown-nav');
  section_container.addEventListener('mouseenter', () => {
    dropdown_container.classList.toggle('hidden');
  });
  section_container.addEventListener('mouseleave', () => {
    dropdown_container.classList.toggle('hidden');
  });
}
