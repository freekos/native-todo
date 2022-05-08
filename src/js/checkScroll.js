import checkList from "./checkList.js";

const list = document.querySelector(".list");

function checkScroll() {
    let active = document.querySelector(".active");
    if(!active) {
        document.body.style.overflow = "hidden";
        list.style.height = "625px";
    }
}

export default checkScroll;