const sidebar = document.querySelector(".sidebar");
const sidebarContent = document.querySelector(".sidebar-content");
const main = document.querySelector("main");
const icons = document.querySelectorAll(".icon-div i");
const contentContainers = document.querySelectorAll(".sidebar-content > div");

export function addSideBarEventListeners() {
  for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", () => {
      sidebarContent.style.display = "block";
      icons.forEach(icon => icon.classList.remove("icon-text"));
      icons.forEach(icon => icon.classList.remove("active"));
      icons[i].classList.add("active");
      setTimeout(() => {
        sidebarContent.style.width = "16vw";
      }, 50);
      setTimeout(() => {
        contentContainers.forEach(
          (container) => (container.style.display = "none")
        );
        contentContainers[i].style.display = "flex";
      }, 300);
    });
  }

  setTimeout(() => {
    main.addEventListener("mouseover", () => {
      sidebarContent.style.width = "0";

      for (let i = 0; i < icons.length; i++) {
        icons[i].classList.add("icon-text");
        icons[i].classList.remove("active");
      }

      setTimeout(() => {
        sidebarContent.style.display = "none";
      }, 300);
    });
  });
}
