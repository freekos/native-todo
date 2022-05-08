import checkList from "./checkList.js";

const indicatorPlace = document.querySelector(".indicator");

const nowColor = "rgb(129, 216, 129)";
const laterColor = "rgb(221, 221, 94)";

function makeIndicator(now, later) {
    let firstColor = now >= later ? nowColor : laterColor;
    let secondColor = now < later ? nowColor : laterColor;
    let first = now >= later ? now * 20 : later * 20;
    let second = now < later ? now * 20 : later * 20;

    let firstIndicator = createIndicator(firstColor);
    animate(firstIndicator, first + second);

    setTimeout(() => {
        let secondIndicator = createIndicator(secondColor);
        animate(secondIndicator, second);
    }, 0);


    function animate(indicator, maxWidth) {
        let start = performance.now();
        
        requestAnimationFrame(function animate(time) {
            let timeFraction = time - start;
            const indicatorStyle = getComputedStyle(indicatorPlace);
            const indicatorWidth = parseFloat(indicatorStyle.width);
            let width = parseFloat(indicator.style.width);
            if(width >= maxWidth) width = maxWidth;
            if(width >= indicatorWidth) width = indicatorWidth;

            indicator.style.width = (width + 5 * (timeFraction / 3000)) + "px";

            if(width < maxWidth && width < indicatorWidth) {
                requestAnimationFrame(animate);
            }
        })
    }
}

function createIndicator(color) {
    let indicator = document.createElement("div");
    indicator.className = "indicator_item";
    indicator.style.left = "0px";
    indicator.style.width = "0px";
    indicator.style.background = color;
    indicatorPlace.append(indicator);
    
    return indicator;
}

window.addEventListener("load", () => {
    let localTodo = checkList("todo");
    let localLater = checkList("later");

    makeIndicator(localTodo.length, localLater.length);

    setInterval(() => {
        let newTodo = checkList("todo");
        let newLater = checkList("later");

        if(localTodo.length !== newTodo.length || localLater.length !== newLater.length) {
            indicatorPlace.innerHTML = "";
            localTodo = newTodo.slice();
            localLater = localLater.slice();
            makeIndicator(localTodo.length, localLater.length);
        }
    }, 2000)
});



// let afterWidth = parseFloat(after.style.width);

// function animate({ timing, draw, duration }) {
//     let start = performance.now();
    
//     requestAnimationFrame(function animate(time) {
//         let timeFraction = (time - start) / duration;

//         if(timeFraction > 1) timeFraction = 1;

//         let progress = timing(timeFraction);
//         draw(progress);

//         if(timeFraction < 1) {
//             requestAnimationFrame(animate);
//         }
//     })
// }

// animate({
//     timing: (timeFraction) => timeFraction,
//     draw: (progress) => {
//         afterWidth += progress * 0.5;
//         after.style.width = afterWidth + 'px';
//     },
//     duration: 5000
// });



