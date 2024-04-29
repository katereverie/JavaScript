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

let ctr = [
  ["PENNY", 0],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
];

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
  // stop if changeDue === 0 or < 0
  while (changeDue > 0) {

    while (changeDue >= cid[8][1]) {
      changeDue -= 100;
      ctr[8][1] += 100;
      ctr[8][1] -= 100;
    }
    while (changeDue >= cid[7][1]) {
      changeDue -= 20;
      ctr[7][1] += 20;
      ctr[7][1] -= 20;
    }
    while (changeDue >= cid[6][1]) {
      changeDue -= 10;
      ctr[6][1] += 10;
      ctr[6][1] -= 10;
    }
    
    while (changeDue >= cid[5][1]) {
      changeDue -= 5;
      ctr[5][1] += 5;
      ctr[5][1] -= 5;
    }
    while (changeDue >= cid[4][1]) {
      changeDue -=1;
      ctr[4][1] += 1;
      ctr[4][1] -= 1;
    }
    while (changeDue >= cid[3][1]) {
      changeDue -= 0.25;
      ctr[3][1] += 0.25;
      cid[3][1] -= 0.25;
    }
    while (changeDue >= cid[2][1]) {
      changeDue -= 0.1;
      ctr[2][1] += 0.1;
      cid[2][1] -= 0.1;
    }
    while (changeDue >= cid[1][1]) {
      changeDue -= 0.05;
      ctr[1][1] += 0.05;
      cid[1][1] -= 0.05;
    }
    while (changeDue >= cid[0][1]) {
      changeDue -= 0.01;
      ctr[0][1] += 0.01;
      cid[0][1] -= 0.01;
    }

    if (changeDue === 0) {
      return hasExactChange = true;
    }

    return hasExactChange = false;
  }

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