// General case & Base Case

// GC - condition that allows to keep running of recursion
// BC - Halting point (end point to stop recursion)

// Simple recursive function using counter

let counter = 0;

function recursion() {
  console.log("Running the function & printing it!");
  counter++; // general case

  // base case
  if (counter >= 3) {
    return;
  }

  recursion();
}

recursion();
