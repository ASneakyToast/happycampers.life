let quickview_images = [];
document.querySelectorAll("#post img").forEach( ele => {quickview_images.push(ele)});
document.querySelectorAll("section.quickview > img").forEach( ele => {quickview_images.push(ele)});
let quickview_videos = document.querySelectorAll("section.quickview > video");

let quickview_offclick = document.querySelector("#quickview > aside");
let quickview_container = document.querySelector("#quickview");
let quickview_image = document.querySelector("#quickview > main > img");
let quickview_video = document.querySelector("#quickview > main > video");
let quickview_video_source = quickview_video.querySelector("source");

console.log(quickview_images);
for (const image of quickview_images) {
  image.addEventListener("click", () => {
    quickview_image.src = image.src;
    console.log("test");
    quickview_container.classList.toggle("hidden");
    quickview_image.classList.remove("hidden");
    quickview_video.classList.add("hidden");
  });
}

for (const video of quickview_videos) {
  video.addEventListener("click", () => {
    quickview_video.src = video.src;
    console.log("test");
    quickview_container.classList.toggle("hidden");
    quickview_image.classList.add("hidden");
    quickview_video.classList.remove("hidden");
  });
}

quickview_offclick.addEventListener("click", () => {
  quickview_container.classList.toggle("hidden");
  quickview_image.src = "";
  quickview_video.querySelector("source").src = "";
});
