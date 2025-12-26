document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year-now");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 10px 15px -3px rgba(0,0,0,0.1)";
    } else {
      header.style.boxShadow = "none";
    }
  });

  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease-out";
    observer.observe(section);
  });

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".site-header").style.top = "0";
    } else {
      document.querySelector(".site-header").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  };
});
