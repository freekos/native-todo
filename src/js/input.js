
import listData from "./listData.js";

const input = document.querySelector(".input");
let i = 0;

let inject = document.createElement("input");
let inputAdd = document.createElement("div"); 
let crossF = document.createElement("div");
let crossS = document.createElement("div");

function createInput() {
    inject.className = "input_inject";
    inject.placeholder = "Add New Item";
    input.append(inject);
}

function createCross() {
    inputAdd.className = "input_add";
    crossF.classList.add("input_cross");
    crossF.classList.add("input_cross_1");
    crossS.classList.add("input_cross");
    crossS.classList.add("input_cross_2");

    inputAdd.append(crossF);
    inputAdd.append(crossS);

    input.append(inputAdd);
}

inject.addEventListener("input", (e) => {
    let target = e.target;
    let value = target.value;
    if(value.length <= 60) {
        listData.push(value);
    }else {
        target.value = value.slice(0 , 60);
    }
})

inputAdd.addEventListener("click", () => {
    let value = listData[listData.length - 1] === undefined ? "" : listData[listData.length - 1];
    listData.length = 0;

    if(value !== '') {
        let local = localStorage.getItem("list");
        if(local) {
            let localList = JSON.parse(local);
            localList.todo.push({value})
            let json = JSON.stringify(localList);
            localStorage.setItem("list", json);
        }else {
            let list = {
                todo: [{value}],
                later: [],
                completed: [],
            };
            let json = JSON.stringify(list);
            localStorage.setItem("list", json); 
        }

        setTimeout(() => {
            inject.value = "";
        }, 1000)
    }
});

window.addEventListener("load", () => {
    createInput();
    createCross();
});