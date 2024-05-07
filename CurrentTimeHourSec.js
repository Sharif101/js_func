// find current day, time, hour, sec

let today = new Date();
let day = today.getDay();
let day_list = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();

const prepand = hour >= 12 ? "PM" : "AM";

hour = hour >= 12 ? hour - 12 : hour; //convert to 12 hour format

if (hour === 0 && prepand === "PM") {
  if (min === 0 && sec === 0) {
    hour = 12;
    prepand = "Noon";
  } else {
    hour = 12;
    // prepand = "PM";
  }
}

if (hour === 0 && prepand === "AM") {
  if (min === 0 && sec === 0) {
    hour = 12;
    prepand = "Midnight";
  } else {
    hour = 12;
    // prepand = "AM";
  }
}

console.log("Today:", day_list[day]);
console.log("Current Time: ", hour + "" + prepand + " :" + min + " :" + sec);
