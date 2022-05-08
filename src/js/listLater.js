import createListContainer from "./list.js";
import checkList from "./checkList.js";
import createListList from "./listList.js";
import checkScroll from "./checkScroll.js";

const list = document.querySelector(".list");

let listContainers = document.createElement("div");
listContainers.className = "list_containers";
const type = "later";



function createLaterList(content) {
    let listContainer = createListContainer(content, type);
    
    listContainers.append(listContainer);
}

window.addEventListener("load", () => {
    let later = createListList("Do Later", type);
    later.append(listContainers);
    list.append(later);
    let render = true;

    let localList = checkList(type);

    setInterval(() => {
        let newList = checkList(type);

        for(let i=0; i < newList.length; i++) {
            if(localList[i] !== newList[i]) {
                render = true;
                localList = newList;
            }
        }

        if(render) {
            if(later.classList.contains("active")) {
                if(localList.length > 2) {
                    document.body.style.overflow = "scroll";
                    list.style.height = "100%";
                    listContainers.innerHTML = "";

                    localList.forEach( ({value}) => {
                        createLaterList(value)
                    });
                    render = false;
                }
            }else {
                checkScroll()
                listContainers.innerHTML = "";
                let [ prevLast, last ] = localList.slice(-2);
                
                if(prevLast) {
                    createLaterList(prevLast.value);
                }
                if(last) {
                    createLaterList(last.value);
                }
                render = false;
            }
        }
    }, 1000)
});