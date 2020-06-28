export {};
let main = document.getElementById("main") as HTMLButtonElement;
let addUserBtn = document.getElementById("add-user") as HTMLButtonElement;
let doubleBtn = document.getElementById("double") as HTMLButtonElement;
let showMillionairesBtn = document.getElementById(
  "show-millionaires"
) as HTMLButtonElement;
let sortBtn = document.getElementById("sort") as HTMLButtonElement;
let calculateWealthortBtn = document.getElementById(
  "calculate-wealthort"
) as HTMLButtonElement;

let data = [];

async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  console.log(res);
}

getRandomUser();
