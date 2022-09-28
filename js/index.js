const plusMinusButton = document.querySelector(".plus-minus");
// console.log(plusMinusButton)
const moreSection = document.querySelector(".more-section");
const plus = document.querySelector(".plus-sign");
const minus = document.querySelector(".minus-sign");

const topSideBar = document.querySelector(".top-sidebar");
// console.log(topSideBar)
const SidebarBarBtn = document.querySelector(".btn-menu");
const topSidebarBarBtn = document.querySelector(".btn-topbar");



plusMinusButton.addEventListener("click", () => {

    if (moreSection.classList.toggle("show-more-section")) {
        plus.style.display = "none";
        minus.style.display = "flex";

    } else {
        plus.style.display = "flex";
        minus.style.display = "none";
    }
})


SidebarBarBtn.addEventListener("click", () => {
    topSideBar.classList.add("show-topSidebar");
    // console.log(topSideBar);
})

topSidebarBarBtn.addEventListener("click", () => {
    topSideBar.classList.remove("show-topSidebar");
})


