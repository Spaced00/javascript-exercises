const inviteList = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

// loop starts here

let isAllowed;
let notAllowed;

isAllowed = inviteList.filter((firstName) => firstName !== ("Phil") || firstName !== ("Lola"));
isNotAllowed = inviteList.filter((firstName) => firstName === ("Phil") || firstName === ("Lola"));

console.log(isAllowed);
console.log(isNotAllowed[0] + " & " + isNotAllowed[1] + " are not coming to this party!")


// refused.textContent += ...;
// admitted.textContent += ...;
