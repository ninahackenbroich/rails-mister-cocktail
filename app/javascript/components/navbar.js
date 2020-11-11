const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector(".navbar-lewagon");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add("navbar-lewagon-white");
        navbar.style.top = "0";
      } else {
        navbar.classList.remove("navbar-lewagon-white");
        navbar.style.top = "-100px";
      }
    });
  }
};

export { initUpdateNavbarOnScroll };
