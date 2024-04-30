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

cid.forEach((changeType) => {
  drawer.innerHTML += `
  <div class="change">${changeType[0]}: $${changeType[1]}</div>
  `;
  }
)

let currentChangeTotal;

const updateChangeInDrawer = (updatedChangeInDrawer) => {
  drawer.innerHTML = `<label id="change-label" for="cash-register-drawer">Change Inventory</label>`;
  updatedChangeInDrawer.forEach((changeType) => {
    drawer.innerHTML += `
    <div class="change">${changeType[0]}: $${changeType[1]}</div>
    `;
    }
  )
}


// change to return
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
  // console.log(currentChangeTotal);
  return currentChangeTotal;
}

const determineExactChange = (changeDue) => {
  // make a copy of cid in case there is not exact change;
  const cidCopy = cid;
  // while each category is not exhausted, keep on going
  while (changeDue >= 100 && cidCopy[8][1] !== 0) {
    changeDue -= 100;
    cidCopy[8][1] -= 100;
    ctr[8][1] += 100;
  }

  while (changeDue >= 20 && cidCopy[7][1] !== 0) {
    changeDue -= 20;
    cidCopy[7][1] -= 20;
    ctr[7][1] += 20;
  }

  while (changeDue >= 10 && cidCopy[6][1] !== 0) {
    changeDue -= 10;
    cidCopy[6][1] -= 10;
    ctr[6][1] += 10;
  }

  while (changeDue >= 5 && cidCopy[5][1] !== 0) {
    changeDue -= 5;
    cidCopy[5][1] -= 5;
    ctr[5][1] += 5;
  }

  while (changeDue >= 1 && cidCopy[4][1] !== 0) {
    changeDue -= 1;
    cidCopy[4][1] -= 1;
    ctr[4][1] += 1;
  }

  while (changeDue >= 0.25  && cidCopy[3][1] !== 0) {
    changeDue = (changeDue * 100 - 25) / 100;
    cidCopy[3][1] = (cidCopy[3][1] * 100 - 25) / 100;
    ctr[3][1] = (ctr[3][1] * 100 + 25) / 100;
  }

  while (changeDue >= 0.1  && cidCopy[2][1] !== 0) {
    changeDue = (changeDue * 100 - 10) / 100;
    cidCopy[2][1] = (cidCopy[2][1] * 100 - 10) / 100;
    ctr[2][1] = (ctr[2][1] * 100 + 10) / 100;
  }

  while (changeDue >= 0.05  && cidCopy[1][1] !== 0) {
    changeDue = (changeDue * 100 - 5) / 100;
    cidCopy[1][1] = (cidCopy[1][1] * 100 - 5) / 100;
    ctr[1][1] = (ctr[1][1] * 100 + 5) / 100;
  }

  while (changeDue >= 0.01  && cidCopy[0][1] !== 0) {
    changeDue = (changeDue * 100 - 1) / 100;
    cidCopy[0][1] = (cidCopy[0][1] * 100 - 1) / 100;
    ctr[0][1] = (ctr[0][1] * 100 + 1) / 100;
  }

  if (changeDue === 0) {
    hasExactChange = true;
    cid = cidCopy;
    updateChangeInDrawer(cid);
    dueChangeDisplay.innerHTML = `<span>Status: Open </span>`
    ctr.forEach((changeType) => {
        if (changeType[1] !== 0) {
          dueChangeDisplay.innerHTML += `
          <div>${changeType[0]}: $${changeType[1]}</div>
          `;
        }
      } 
    )
    updateChangeCount();
    return;
  }

  hasExactChange = false;
  dueChangeDisplay.innerHTML = `<span>Status: INSUFFICIENT_FUNDS</span>`;
  updateChangeCount();
  return;
}

const updateChangeCount = () => {
  ctr.forEach((changeType) => {
    changeType[1] = 0;
  } );
}

const clearInput = () => {
  cashInput.value = "";
}

const calculateChange = (price, cash) => {
  const changeDue = (cash * 100 - price * 100) / 100;
  console.log("Step 2: change due", changeDue);

  const currentChangeInDrawer = updateCurrentChangeTotal();
  console.log("Step 3: currentChangeInDrawer", currentChangeInDrawer);
  
  if (currentChangeInDrawer < changeDue) {
    console.log("currentChangeInDrawer < changeDue");
    dueChangeDisplay.textContent = "Status: INSUFFICIENT_FUNDS";
  } 
  if (currentChangeInDrawer === changeDue) {
    dueChangeDisplay.textContent = "Status: CLOSED";
  }

  determineExactChange(changeDue);
}

confirmBtn.addEventListener("click", () => {
  const cashInputFloat = parseFloat(cashInput.value);
  console.log("Step 1", price, cashInputFloat);
  if (cashInputFloat < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (cashInputFloat === price) {
    dueChangeDisplay.textContent = "No change due - customer paid with exact cash";
    dueChangeDisplay.classList.toggle(".hidden");
    return;
  }

  calculateChange(price, cashInputFloat);
  clearInput();
})