let drawer_container = document.querySelector("#drawer");
let drawer_button = document.querySelector("#drawer-button");
let drawer_offclick = document.querySelector("#drawer > .offclick");

drawer_button.addEventListener("click", () => {
  drawer_container.classList.toggle("hidden");
});

drawer_offclick.addEventListener("click", () => {
  drawer_container.classList.toggle("hidden");
});
