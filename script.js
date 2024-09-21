let currentIndex = 0;

function showSlide(index) {
  const sliderItems = document.getElementById("slider-items");
  const totalItems = document.querySelectorAll(".slider-item").length;

  if (index >= totalItems) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalItems - 1;
  } else {
    currentIndex = index;
  }

  sliderItems.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// let dark = document.querySelector(".hello");
// dark.addEventListener("click", () => {
//   document.body.style.backgroundColor = "#000";
//   document.body.style.color = "#fff";
// });
