const cashInput = document.getElementById("cash");
const priceSpan = document.getElementById("price"); 
const confirmBtn = document.getElementById("purchase-btn");
const dueChangeDisplay = document.getElementById("change-due");
const drawer = document.getElementById("cash-register-drawer");

let price = 19.5;
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
  let cidCopy = cid.slice();
  console.log("This is a copy of cid", cidCopy);
  // while each category is not exhausted, keep on going
  while (changeDue >= 100 && cidCopy[8][1] !== 0) {
    changeDue = (changeDue * 100 - 100 * 100) / 100;
    cidCopy[8][1] -= 100;
    ctr[8][1] += 100;
  }

  console.log("After drawing 100s", changeDue);

  while (changeDue >= 20 && cidCopy[7][1] !== 0) {
    changeDue = Number((changeDue - 20).toFixed(2));
    cidCopy[7][1] -= 20;
    ctr[7][1] += 20; 
  }

  console.log("After drawing 20s", changeDue);

  while (changeDue >= 10 && cidCopy[6][1] !== 0) {
    changeDue = Number((changeDue - 10).toFixed(2));
    cidCopy[6][1] -= 10;
    ctr[6][1] += 10;
  }

  console.log("After drawing 10s", changeDue);

  while (changeDue >= 5 && cidCopy[5][1] !== 0) {
    changeDue = Number((changeDue - 5).toFixed(2));
    cidCopy[5][1] -= 5;
    ctr[5][1] += 5;
  }

  console.log("After drawing 5s", changeDue);

  while (changeDue >= 1 && cidCopy[4][1] !== 0) {
    changeDue = Number((changeDue - 1).toFixed(2));
    cidCopy[4][1] -= 1;
    ctr[4][1] += 1;
  }

  console.log("After drawing 1s", changeDue);

  while (changeDue >= 0.25  && cidCopy[3][1] !== 0) {
    changeDue = Number((changeDue - 0.25).toFixed(2));
    cidCopy[3][1] -= 0.25;
    ctr[3][1] += 0.25; 
  }

  console.log("After drawing quarters", changeDue);

  while (changeDue >= 0.1  && cidCopy[2][1] !== 0) {
    changeDue = Number((changeDue - 0.1).toFixed(2));
    cidCopy[2][1] -= 0.1; 
    ctr[2][1] += 0.1;
  }

  console.log("After drawing dimes", changeDue);

  while (changeDue >= 0.05  && cidCopy[1][1] !== 0) {
    changeDue = Number((changeDue - 0.05).toFixed(2));
    cidCopy[1][1] -= 0.05;
    ctr[1][1] += 0.05;
  }

  console.log("After drawing nickles", changeDue);
  
  while (changeDue >= 0.01  && cidCopy[0][1] !== 0) {
    changeDue = Number((changeDue - 0.01).toFixed(2));
    cidCopy[0][1] -= 0.01;
    ctr[0][1] += 0.01;
  }

  console.log("After drawing pennies, how much change is still due", changeDue);

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

//  this part needs modifying. Decide what to put in determineExactChange and what in calculateChange
const calculateChange = (price, cash) => {
  const changeDue = (cash * 100 - price * 100) / 100;
  console.log("Step 2: change due", changeDue);

  const currentChangeInDrawer = updateCurrentChangeTotal();
  console.log("Step 3: currentChangeInDrawer", currentChangeInDrawer);
  
  if (currentChangeInDrawer < changeDue) {
    console.log("currentChangeInDrawer < changeDue");
    dueChangeDisplay.innerHTML = `<span>Status: INSUFFICIENT_FUNDS</span>`;
  } 
  if (currentChangeInDrawer === changeDue) {
    dueChangeDisplay.innerHTML = `<span>Status: CLOSED </span>`;
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