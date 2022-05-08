import { Week, Month } from "./dateData.js";

const dateD = document.querySelector(".date_d");
const dateW = document.querySelector(".date_week");

function AllDate() {
    this.date = new Date();
    this.day = this.date.getDate();
    this.month = this.date.getMonth();
    this.year = this.date.getFullYear();
    this.week = this.date.getDay();
}

function createDate(date) {
    let dateYear = document.createElement("p");
    let dateMonth = document.createElement("p");
    let dateWeek = document.createElement("p");
    let dateDate = document.createElement("p");
    let dateItem = document.createElement("div");
    let dateWItem = document.createElement("div");
    
    let year = date.year;
    let month = Month[date.month];
    let week = (date.week - 1) !== -1 ? Week[date.week - 1] : Week[6];
    let day = date.day >= 10 ? date.day : "0" + date.day;

    dateWeek.className = "date_p";
    dateYear.className = "date_p";
    dateMonth.className = "date_m_p";
    dateDate.className = "date_d_p";
    dateItem.className = "date_item";
    dateWItem.className = "date_w_item";

    dateYear.innerHTML = `${year}`;
    dateMonth.innerHTML = `${month}`;
    dateWeek.innerHTML = `${week}`;
    dateDate.innerHTML = `${day}`;

    dateD.innerHTML = "";
    dateW.innerHTML = "";

    dateItem.append(dateMonth);
    dateItem.append(dateYear);
    dateWItem.append(dateWeek);
    dateW.append(dateWItem);
    dateD.append(dateDate);
    dateD.append(dateItem);
}

window.addEventListener("load", () => {
    let date = new AllDate();
    createDate(date);

    setInterval(() => {
        let newDate = new AllDate();

        if(newDate.day !== date.day || newDate.week !== date.week || newDate.year !== date.year) {
            date = newDate;
            createDate(date);
        }
    }, 4000)
});