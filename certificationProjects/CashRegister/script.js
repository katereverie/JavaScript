const cashInput = document.getElementById("cash");
const priceSpan = document.getElementById("price"); 
const confirmBtn = document.getElementById("purchase-btn");
const dueChange = document.getElementById("change-due");
const drawer = document.getElementById("cash-register-drawer");

let price = 1.87;
priceSpan.innerText = price;
// short for "change in drawer"
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

cid.forEach((changeType) => {
  drawer.innerHTML += `
  <div class="change">${changeType[0]}: $${changeType[1]}</div>
  `;
  }
)

confirmBtn.addEventListener("click", () => {
  const cashInputFloat = parseFloat(cashInput.value);
  // console.log(totalPriceFloat, cashInputFloat);
  if (cashInputFloat < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (cashInputFloat === price) {
    dueChange.textContent = "No change due - customer paid with exact cash";
    dueChange.classList.toggle(".hidden");
    return;
  } 
})