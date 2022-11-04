import { getElement } from "./utils.js";

const sidebarOverlay = getElement(".sidebar-overlay");
const toggleNav = getElement(".toggle-nav");
const closeSIdebar = getElement(".sidebar-close");

toggleNav.addEventListener("click", function () {
  sidebarOverlay.classList.add('show');
})

closeSIdebar.addEventListener("click", function () {
  sidebarOverlay.classList.remove('show');
})