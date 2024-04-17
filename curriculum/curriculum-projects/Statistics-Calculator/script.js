const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  // if el is not a number, Number(el) returns NaN. 
  // if it is true that Number(el) is not NaN, meaning if Number(el) is a number, filter it out (and store it in the numbers array)
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
  
}

const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);

  // multiple formulations possible
  const median = 
    array.length % 2 === 0
    ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
    : sorted[Math.floor(array.length / 2)];

  return median;
}

const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  })
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  // this sorts the most frequently occuring value by pushing it to the beginning of the counts array
  const highest = Object.keys(counts).sort(
    (a, b) => counts[b] - counts[a]
  )[0];
  // check if there are more than one value that occur the most frequently 
  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );
  return mode.join(", ");
}
  