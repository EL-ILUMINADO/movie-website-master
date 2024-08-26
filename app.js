const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index) => {
  const movieList = movieLists[index];
  const images = movieList.querySelectorAll("img");
  let clickCounter = 0;

  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerwidth / 270);
    clickCounter++;
    const maxSlides = images.length - 4; // assuming 4 images are visible at a time
    const currentTransform = getComputedStyle(movieList).transform;
    const matrix = currentTransform.match(/^matrix\((.+)\)$/);
    let x = 0;

    if (matrix) {
      x = parseFloat(matrix[1].split(", ")[4]);
    }

    if (clickCounter <= maxSlides) {
      movieList.style.transform = `translateX(${x - 300}px)`;
    } else {
      movieList.style.transform = "translateX(0)";
      clickCounter = 0; // reset counter
    }
  });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle");

ball.addEventListener("click", () => {
    items.forEach(item=>{
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");
})