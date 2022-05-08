import createListContainer from "./list.js";
import checkList from "./checkList.js"
import createListList from "./listList.js";
import checkScroll from "./checkScroll.js";

const list = document.querySelector(".list");

let listContainers = document.createElement("div");
listContainers.className = "list_containers";
const type = "todo";

function createTodoList(content) {
    let listContainer = createListContainer(content, type);
    
    listContainers.append(listContainer);
}

window.addEventListener("load", () => {
    let todo = createListList("Do", type);
    todo.append(listContainers);
    list.append(todo);
    let render = true;

    let localList = checkList(type);

    setInterval(() => {
        let newList = checkList(type);

        for(let i=0; i < newList.length; i++) {
            if(!Object.is(localList[i]  , newList[i])) {
                render = true;
                localList = newList;
                break;
            }
        }

        if(render) {
            if(todo.classList.contains("active")) {
                if(localList.length > 2) {
                        document.body.style.overflow = "scroll";
                        list.style.height = "100%";

                    listContainers.innerHTML = "";

                    localList.forEach( ({value}) => {
                        createTodoList(value);
                    });
                    render = false;
                }
            }else {
                checkScroll()
                listContainers.innerHTML = "";

                let [ prevLast, last ] = localList.slice(-2);

                if(last) {
                    createTodoList(last.value);
                }
                if(prevLast) {
                    createTodoList(prevLast.value);
                }

                render = false;
            }

            if(localList.length === 0) {

            }
        }
    }, 1000)
})