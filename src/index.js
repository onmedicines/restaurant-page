import displayHome from "./Home";
import displayAbout from "./About";
import displayMenu from "./Menu";

const UI = (function (doc) {
  const nav = doc.querySelector("nav");

  nav.addEventListener("click", (e) => {
    if (e.target.id === "home") {
      displayHome();
    } else if (e.target.id === "about") {
      displayAbout();
    } else if (e.target.id === "menu") {
      displayMenu();
    }
  });
})(document);
