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
