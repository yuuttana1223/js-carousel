"use strict";
{
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  const ul = document.querySelector("ul");
  const slides = [...ul.children];
  // dotsのステート
  const dots = [];

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
    updateDots();
    // slides[0].clientWidthよりも小数点があり正確
    const slideWidth = slides[0].getBoundingClientRect().width;
    // -を付ける理由はもともと左端中心から始まっているのでそれを負にずらすと右の要素が左に来る
    ul.style.transform = `translateX(${-(slideWidth * currentIndex)}px)`;
  };

  const setupDots = () => {
    slides.forEach((slide, index) => {
      const button = document.createElement("button");
      button.addEventListener("click", () => {
        currentIndex = index;
        moveSlides();
      });
      dots.push(button);
      document.querySelector("nav").appendChild(button);
    });
    dots[0].classList.add("current");
  };

  const updateDots = () => {
    dots.forEach((dot) => {
      dot.classList.remove("current");
    });
    dots[currentIndex].classList.add("current");
  };

  updateButtons(); /* 最初は左のボタンが見えない */
  setupDots(); /* 最初は左のドットが濃い */

  next.addEventListener("click", () => {
    currentIndex++;
    moveSlides();
  });

  prev.addEventListener("click", () => {
    currentIndex--;
    moveSlides();
  });

  window.addEventListener("resize", () => {
    moveSlides();
  });
}
