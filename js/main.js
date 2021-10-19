"use strict";
{
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  const ul = document.querySelector("ul");
  const slides = ul.children;
  let currentIndex = 0;

  const updateButtons = () => {
    prev.classList.remove("hidden");
    next.classList.remove("hidden");
    if (currentIndex === 0) {
      prev.classList.add("hidden");
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add("hidden");
    }
  };

  const moveSlides = () => {
    updateButtons();
    const slideWidth = slides[0].getBoundingClientRect().width;
    // -を付ける理由はもともと左端中心から始まっているのでそれを負にずらすと右の要素が左に来る
    ul.style.transform = `translateX(${-(slideWidth * currentIndex)}px)`;
  };

  updateButtons();

  next.addEventListener("click", () => {
    currentIndex++;
    moveSlides();
  });

  prev.addEventListener("click", () => {
    currentIndex--;
    moveSlides();
  });
}
