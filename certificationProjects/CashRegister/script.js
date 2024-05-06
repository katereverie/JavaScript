const cashInput = document.getElementById("cash");
const priceSpan = document.getElementById("price"); 
const confirmBtn = document.getElementById("purchase-btn");
const dueChangeDisplay = document.getElementById("change-due");
const drawer = document.getElementById("cash-register-drawer");

let currentChangeTotal;
let hasExactChange = false;
let price = 24.95;
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

priceSpan.innerText = price;
cid.forEach((changeType) => {
  drawer.innerHTML += `
  <div class="change">${changeType[0]}: $${changeType[1]}</div>
  `;
  }
)

const updateChangeInDrawer = (updatedChangeInDrawer) => {
  drawer.innerHTML = `<label id="change-label" for="cash-register-drawer">Change Inventory</label>`;
  updatedChangeInDrawer.forEach((changeType) => {
    drawer.innerHTML += `
    <div class="change">${changeType[0]}: $${changeType[1]}</div>
    `;
    }
  )
}

const updateCurrentChangeTotal = () => {
  currentChangeTotal = 0;

  for (let i = 0; i < cid.length; i++) {
    currentChangeTotal += cid[i][1] * 100;
  }

  currentChangeTotal = currentChangeTotal / 100;
  return currentChangeTotal;
}

const updateChangeCount = () => {
  ctr.forEach((changeType) => {
    changeType[1] = 0;
  } );
}

const determineExactChange = (changeDue, currentChangeInDrawer) => {

  if (currentChangeInDrawer < changeDue) {
    dueChangeDisplay.innerHTML = `<span>Status: INSUFFICIENT_FUNDS</span>`;
  }

  if (currentChangeInDrawer === changeDue) {
    hasExactChange = true;
    dueChangeDisplay.innerHTML = `<span>Status: CLOSED </span>`;
    cid.forEach((changeType) => {
      if (changeType[1] !== 0) {
        dueChangeDisplay.innerHTML += `
        <div>${changeType[0]}: $${changeType[1]}</div>
        `;
      }} 
    )
    cid.forEach((changeType) => changeType[1] = 0);
    updateChangeInDrawer(cid);
    updateChangeCount();
    return;
  }

  // make a copy of cid in case there is not exact change;
  let cidCopy = cid.slice();
  // while each category is not exhausted, keep on going
  while (changeDue >= 100 && cidCopy[8][1] !== 0) {
    changeDue = (changeDue * 100 - 100 * 100) / 100;
    cidCopy[8][1] -= 100;
    ctr[8][1] += 100;
  }

  while (changeDue >= 20 && cidCopy[7][1] !== 0) {
    changeDue = Number((changeDue - 20).toFixed(2));
    cidCopy[7][1] = Number((cidCopy[7][1] - 20).toFixed(2));
    ctr[7][1] = Number((ctr[7][1] + 20).toFixed(2));
  }

  while (changeDue >= 10 && cidCopy[6][1] !== 0) {
    changeDue = Number((changeDue - 10).toFixed(2));
    cidCopy[6][1] = Number((cidCopy[6][1] - 10).toFixed(2));
    ctr[6][1] = Number((ctr[6][1] + 10).toFixed(2));
  }

  while (changeDue >= 5 && cidCopy[5][1] !== 0) {
    changeDue = Number((changeDue - 5).toFixed(2));
    cidCopy[5][1] = Number((cidCopy[5][1] - 5).toFixed(2));
    ctr[5][1] = Number((ctr[5][1] + 5).toFixed(2));
  }

  while (changeDue >= 1 && cidCopy[4][1] !== 0) {
    changeDue = Number((changeDue - 1).toFixed(2));
    cidCopy[4][1] = Number((cidCopy[4][1] - 1).toFixed(2));
    ctr[4][1] = Number((ctr[4][1] + 1).toFixed(2));
  }

  while (changeDue >= 0.25  && cidCopy[3][1] !== 0) {
    changeDue = Number((changeDue - 0.25).toFixed(2));
    cidCopy[3][1] = Number((cidCopy[3][1] - 0.25).toFixed(2));
    ctr[3][1] = Number((ctr[3][1] + 0.25).toFixed(2));
  }

  while (changeDue >= 0.1  && cidCopy[2][1] !== 0) {
    changeDue = Number((changeDue - 0.1).toFixed(2));
    cidCopy[2][1] = Number((cidCopy[2][1] - 0.1).toFixed(2));
    ctr[2][1] = Number((ctr[2][1] + 0.1).toFixed(2));
  }

  while (changeDue >= 0.05  && cidCopy[1][1] !== 0) {
    changeDue = Number((changeDue - 0.05).toFixed(2));
    cidCopy[1][1] = Number((cidCopy[1][1] - 0.05).toFixed(2));
    ctr[1][1] = Number((ctr[1][1] + 0.05).toFixed(2));
  }

  while (changeDue >= 0.01  && cidCopy[0][1] !== 0) {
    changeDue = Number((changeDue - 0.01).toFixed(2));
    cidCopy[0][1] = Number((cidCopy[0][1] - 0.01).toFixed(2));
    ctr[0][1] = Number((ctr[0][1] + 0.01).toFixed(2));
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
      }} 
    )
    updateChangeCount();
    return;
  }

  hasExactChange = false;
  dueChangeDisplay.innerHTML = `<span>Status: INSUFFICIENT_FUNDS</span>`;
  updateChangeCount();
  return;
}

const calculateChange = (price, cash) => {
  const changeDue = (cash * 100 - price * 100) / 100;
  console.log("Step 2: change due", changeDue);

  const currentChangeInDrawer = updateCurrentChangeTotal();
  console.log("Step 3: currentChangeInDrawer", currentChangeInDrawer);

  determineExactChange(changeDue, currentChangeInDrawer);
}

const clearInput = () => {
  cashInput.value = "";
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

cashInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
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
  }
})