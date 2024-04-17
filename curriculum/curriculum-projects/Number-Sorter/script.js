const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));

  const sortedValues = inputValues.sort((a, b) => {
    return a - b;
  });
  // const sortedValues = bubbleSort(inputValues);
  // const sortedValues = selectionSort(inputValues);
  // const sortedValues = insertionSort(inputValues);

  updateUI(sortedValues);
}

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++ ) {
      // console.log(array, array[j], array[j + 1]);

      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i; j < array.length; j ++) {
      // console.log(array, array[j], array[minIndex]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i]; // current value (for comparision) starts with the second element (index = 1)
    let j = i - 1; // j starts at the beginning index (0);

    // the basic idea is to push the smallest element of the array to the beginning of the array at index 0;
    // the bigger value should be pushed to the right side of the array;
    while (j >= 0 && array[j] > currValue) { //if the right value (currValue = i ) is bigger than the left value (j = i - 1), it is where it should be;
      array[j + 1] = array[j]; // if the left value (array[j]) is bigger than the right value (currValue = array[i = j + 1])), assign the left value to the right value (pushing the left value after the right value)
      j--;
    }
    // since we found the bigger value on the right, make it the current value by assigning it to currValue, so that the for loop iterates to the next index;
    array[j + 1] = currValue;
  }

  return array;
}

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
}

sortButton.addEventListener("click", sortInputArray);