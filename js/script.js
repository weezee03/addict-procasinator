function toggle() {
  const navs = document.querySelectorAll(".navlink");
  
  navs.forEach(nav => nav.classList.toggle("navlink_toggle_show"));
}


document.querySelector(".navlink_toggle").addEventListener("click", toggle)