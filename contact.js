const navbtn = document.querySelector(".burger");
const navbody = document.querySelector(".nav-links");
const body = document.querySelector("body");
navbtn.addEventListener("click", () => {
  navbody.classList.toggle("nav-active");
  navbtn.classList.toggle("navbtn-active");
  body.classList.toggle("no-scroll");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    entry.target.style.transform = intersecting
      ? "translateY(0px)"
      : "translateY(100px)";
    entry.target.style.opacity = intersecting ? 1 : 0;
  });
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    entry.target.style.opacity = intersecting ? 1 : 0;
    entry.target.style.transform = intersecting
      ? "translateX(0px)"
      : "translateX(-20px)";
  });
});

observer.observe(document.querySelector(".form-section"));

observer2.observe(document.querySelector(".social-icons > i:nth-child(1)"));
observer2.observe(document.querySelector(".social-icons > i:nth-child(2)"));
observer2.observe(document.querySelector(".social-icons > i:nth-child(3)"));
observer2.observe(document.querySelector(".social-icons > i:nth-child(4)"));
observer2.observe(document.querySelector(".social-icons > i:nth-child(5)"));
