const initAnchorToHIW = () => {
  const hiwbutton = document.querySelector("#hiw-button");
  if (hiwbutton) {
    hiwbutton.addEventListener("click", function () {
      hiw.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    });
  }
};

export { initAnchorToHIW };
