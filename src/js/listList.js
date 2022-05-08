import createMoreBtn from "./moreBtn.js";

function createListList(title, type) {
    let list = document.createElement("div");
    let typeContainer = document.createElement("div");
    let typeName =  document.createElement("p");
    list.className = type;
    typeContainer.className = "type_container";
    typeName.className = "type_name";
    typeName.innerHTML = title;

    let moreBtn = createMoreBtn(type);
    typeContainer.append(moreBtn);
    typeContainer.append(typeName);
    list.append(typeContainer);

    return list;
}

export default createListList;



