const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector(".navbar-lewagon");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.classList.add("navbar-lewagon-white");
        navbar.style.top = "0";
      } else {
        navbar.classList.remove("navbar-lewagon-white");
        navbar.style.top = "-80px";
      }
    });
  }
};

export { initUpdateNavbarOnScroll };
