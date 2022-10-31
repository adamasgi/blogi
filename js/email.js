function randomEmailAddress(prefix, address) {
  const rand = Math.floor(Math.random() * 2000000);
  return "mailto:" + rand + "." + prefix +"@" + address
}

const address = "adamasgi.com";
const emailEl = document.getElementById("email");
const randAddress = randomEmailAddress("contact", address);
emailEl.href = randAddress;
const leetAddress = randomEmailAddress("leet", address);
console.log("If you went to the trouble to check the console, you know I am currently lying about storing the randomly generated email address.");
console.log("Here is a special address just for you:", leetAddress);
