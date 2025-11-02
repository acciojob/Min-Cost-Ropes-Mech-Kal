function mincost(arr) { 
  // If there’s 0 or 1 rope, no cost is needed
  if (arr.length <= 1) return 0;

  // Convert array to a min-heap using a simple sort
  arr.sort((a, b) => a - b);

  let totalCost = 0;

  // Keep connecting ropes until only one rope remains
  while (arr.length > 1) {
    // Take the two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    // Cost to connect them
    let cost = first + second;
    totalCost += cost;

    // Insert the new rope back and keep array sorted
    arr.push(cost);
    arr.sort((a, b) => a - b);
  }

  return totalCost;
}

module.exports = mincost;
