export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (!section) return;

  if (id === "home") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }

  const nav = document.querySelector("header");
  const navHeight = nav ? nav.getBoundingClientRect().height : 0;

  const top =
    section.getBoundingClientRect().top +
    window.scrollY -
    navHeight;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};