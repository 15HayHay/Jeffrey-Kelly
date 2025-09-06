const moveCursor = (e) => {
  let cursorPointed = document.querySelector(".cursor-pointed");

  const mouseY = e.clientY;
  const mouseX = e.clientX;
  cursorPointed.style.transform = `translate3d(${mouseX + 10}px, ${
    mouseY - 85
  }px, 0)`;
};
window.addEventListener("mousemove", moveCursor);

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});
