import { createDaggerButton, createLaterButton, createCompletedButton } from "./listBtn.js";

// Create a container for Todo type : Made by Freekos
function createListContainer(content, type) {
    let container = document.createElement("div");
    let containerCont = document.createElement("div");
    let containerBtn = document.createElement("div");

    container.className = "list_container";
    container.dataset.type = type;
    container.dataset.content = content;
    containerCont.className = "list_container_cont"
    containerBtn.className = "list_container_btn";

    let contentElem = createContent(content);
    let { dagger=false, later=false, completed=false } = createSideButtons(type);

    if(dagger) {
        containerBtn.append(dagger);
    }
    if(later) {
        containerBtn.append(later);
    }
    if(completed) {
        containerBtn.append(completed);
    }

    containerCont.append(contentElem);
    container.append(containerCont)
    container.append(containerBtn);

    return container;
}

//Create content element for container
function createContent(content) {
    let contentElem = document.createElement("p");
    contentElem.className = "list_content";
    contentElem.innerText = content;

    return contentElem;
}

//Create buttons depending on container type
function createSideButtons(type) {
    let dagger = createDaggerButton();
    let later = createLaterButton();
    let completed = createCompletedButton();

    if(type === "todo") {
        return { dagger, later, completed };
    }

    if(type === "completed") {
        later.remove();
        completed.remove();
        return { dagger };
    }

    if(type === "later") {
        later.remove();
        return { dagger, completed };
    }
}

export default createListContainer;

