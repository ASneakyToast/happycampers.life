let images = document.querySelectorAll("#post img");

let quickview_offclick = document.querySelector("#quickview > aside");
let quickview_container = document.querySelector("#quickview");
let quickview_image = document.querySelector("#quickview > main > img");

for (const image of images) {
  image.addEventListener("click", () => {
    console.log("test");
    quickview_container.classList.toggle("hidden");
    quickview_image.src = image.src;
  });
}

quickview_offclick.addEventListener("click", () => {
  quickview_container.classList.toggle("hidden");
  quickview_image.src = "";
});
