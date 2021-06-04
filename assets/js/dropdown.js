function dropdown(section_container) {
  console.log(section_container)
  let dropdown_container = section_container.querySelector('.dropdown-nav');
  console.log(dropdown_container)
  dropdown_container.classList.toggle('hidden');

  /*
    let dropdown = section_container.children[0];
    let dropdown_items = section_container.children;
    for (let x=0; x<dropdown_items.length; x++) {
      dropdown_items[x].classList.toggle('hidden');
    }
  */
}
