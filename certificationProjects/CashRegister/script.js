const cashInput = document.getElementById("cash");
const priceSpan = document.getElementById("price"); 
const confirmBtn = document.getElementById("purchase-btn");
const dueChangeDisplay = document.getElementById("change-due");
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

let currentChangeTotal;

cid.forEach((changeType) => {
  drawer.innerHTML += `
  <div class="change">${changeType[0]}: $${changeType[1]}</div>
  `;
  }
)

let hasExactChange = false;

const updateCurrentChangeTotal = () => {
  currentChangeTotal = 0;

  for (let i = 0; i < cid.length; i++) {
    currentChangeTotal += cid[i][1] * 100;
  }

  currentChangeTotal = currentChangeTotal / 100;
  console.log(currentChangeTotal);
  return currentChangeTotal;
}

const determineExactChange = (changeDue) => {
  

}


const calculateChange = (price, cash) => {
  const changeDue = (cash * 100 - price * 100) / 100;
  // console.log(change);
  const currentChangeInDrawer = updateCurrentChangeTotal();
  determineExactChange();
  if (currentChangeInDrawer < changeDue && !hasExactChange) {
    dueChangeDisplay.textContent = "Status: INSUFFICIENT_FUNDS";
  } 
  if (currentChangeInDrawer === changeDue) {
    dueChangeDisplay.textContent = "Status: CLOSED";
  }
  if (currentChangeInDrawer > changeDue) {
    dueChangeDisplay.textContent = "Status: OPEN";
  }
}

confirmBtn.addEventListener("click", () => {
  const cashInputFloat = parseFloat(cashInput.value);
  // console.log(totalPriceFloat, cashInputFloat);
  if (cashInputFloat < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (cashInputFloat === price) {
    dueChangeDisplay.textContent = "No change due - customer paid with exact cash";
    dueChangeDisplay.classList.toggle(".hidden");
    return;
  }

  calculateChange(price, cashInputFloat);
})