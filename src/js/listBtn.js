function createDaggerButton() {
    let daggerR = document.createElement("div");
    let daggerF = document.createElement("div");
    let daggerS = document.createElement("div");

    daggerR.classList.add("list_button_container");
    daggerR.classList.add("list_dagger_r")
    daggerF.classList.add("list_dagger");
    daggerS.classList.add("list_dagger");
    daggerF.classList.add("list_dagger_1");
    daggerS.classList.add("list_dagger_2");

    daggerR.addEventListener("click", (e) => {
        let target = e.target.closest(".list_dagger_r");
        let container = target.closest(".list_container");
        let content = container.dataset.content;
        let type = container.dataset.type;
        let localJson = localStorage.getItem("list");
        let localList = JSON.parse(localJson);
        let arr = localList[type];
        let index = arr.findIndex(item => item.value === content);
        arr.splice(index, 1);
        let newJson = JSON.stringify(localList);
        localStorage.setItem("list", newJson)
        container.remove();
    })

    daggerR.append(daggerF);
    daggerR.append(daggerS);
    return daggerR;
}

function createLaterButton() {
    let laterAdd = document.createElement("div");
    let laterF = document.createElement("div");
    let laterS = document.createElement("div");

    laterAdd.classList.add("list_button_container");
    laterAdd.classList.add("list_later_add");
    laterF.classList.add("list_later");
    laterS.classList.add("list_later");
    laterF.classList.add("list_later_1")
    laterS.classList.add("list_later_2");

    laterAdd.addEventListener("click", (e) => {
        let target = e.target.closest(".list_later_add");
        let container = target.closest(".list_container");
        let content = container.dataset.content;
        let type = container.dataset.type;
        let localJson = localStorage.getItem("list");
        let localList = JSON.parse(localJson);
        let arr = localList[type];
        let index = arr.findIndex(item => item.value === content);
        let deleteValue = arr.splice(index, 1);

        let later = localList["later"];
        later.push(deleteValue[0]);

        let newJson = JSON.stringify(localList);
        localStorage.setItem("list", newJson)
        container.remove();
    })

    laterAdd.append(laterF);
    laterAdd.append(laterS);
    return laterAdd;
}

function createCompletedButton() {
    let completedAdd = document.createElement("div");
    let completedF = document.createElement("div");
    let completedS = document.createElement("div");

    completedAdd.classList.add("list_button_container");
    completedAdd.classList.add("list_completed_add");
    completedF.classList.add("list_completed");
    completedS.classList.add("list_completed");
    completedF.classList.add("list_completed_1")
    completedS.classList.add("list_completed_2")

    completedAdd.addEventListener("click", (e) => {
        let target = e.target.closest(".list_completed_add");
        let container = target.closest(".list_container");
        let content = container.dataset.content;
        let type = container.dataset.type;
        let localJson = localStorage.getItem("list");
        let localList = JSON.parse(localJson);
        let arr = localList[type];
        let index = arr.findIndex(item => item.value === content);
        let deleteValue = arr.splice(index, 1);

        let completed = localList["completed"];
        completed.push(deleteValue[0]);

        let newJson = JSON.stringify(localList);
        localStorage.setItem("list", newJson)
        container.remove();
    })

    completedAdd.append(completedF);
    completedAdd.append(completedS);
    return completedAdd;
}

export { createDaggerButton, createLaterButton, createCompletedButton };