import Home from "./pages/Home.js";
import Portfoilo from "./pages/Portfoilo.js";
import Group from "./pages/Group.js";
import AboutUs from "./pages/AboutUs.js";
import ContactUs from "./pages/ContactUs.js";
import NotFound from "./pages/NotFound.js";

const mainsection = document.querySelector("#app");

function router(params) {
  const route = [
    { path: "/", view: Home },
    { path: "/portfoilo", view: Portfoilo },
    { path: "/group", view: Group },
    { path: "/aboutUs", view: AboutUs },
    { path: "/contactUs", view: ContactUs },
  ];

  const potentialRoute = route.map((item) => {
    return { route: item, isMath: location.pathname === item.path };
  });

  let match = potentialRoute.find((route) => route.isMath);

  if (!match) {
    match = {
      route: { path: "/not-found", view: NotFound },
      isMatch: true,
    };
  }

  mainsection.innerHTML = match.route.view();
}

// navigate to
function navigatTo(url) {
  history.pushState("null", "null", url);
  router();
}

window.addEventListener("popstate", router);

//page loaded
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigatTo(e.target.href);
    }
  });
  router();
});

// toggler

const togglere = document.querySelector(".nav__toggler");
const navBar = document.querySelector(".nav");
togglere.addEventListener("click", () => {
  navBar.classList.toggle("mini-sidebar");
  if (navBar.classList.contains("mini-sidebar")) {
    document.documentElement.style.setProperty("--nav-width", "50" + "px");
  } else {
    document.documentElement.style.setProperty("--nav-width", "250" + "px");
  }
});
