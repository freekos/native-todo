function createMoreBtn(type) {
    let buttonContainer = document.createElement("div");
    let buttonF = document.createElement("div");
    let buttonS = document.createElement("div");

    buttonContainer.className = "more_container";
    buttonF.classList.add("more_btn");
    buttonS.classList.add("more_btn");
    buttonF.classList.add("more_btn_1");
    buttonS.classList.add("more_btn_2");

    buttonContainer.append(buttonF);
    buttonContainer.append(buttonS);

    buttonContainer.addEventListener("click", (e) => {
        let target = e.target.closest(".more_container");
        let fullContainer = target.closest(`.${type}`);

        if(fullContainer.classList.contains("active")) {
            target.style.transition = ".7s";
            target.style.transform = "rotate(0deg)";

        }else {
            target.style.transition = ".7s";
            target.style.transform = "rotate(90deg)";
        }

        fullContainer.classList.toggle("active");
    })

    return buttonContainer;
}

export default createMoreBtn;