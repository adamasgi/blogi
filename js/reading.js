const title = window.location.href;
const key = title + "|scrollPosition";

function getOffset(keyName) {
  let res = localStorage.getItem(keyName);
  if (res) {
	return res;
  } else {
	let offset = window.pageYOffset;
	localStorage.setItem(keyName, offset);
	return offset;
  }
}

function setOffset(keyName) {
  let offset = window.pageYOffset;
  localStorage.setItem(keyName, offset);
  return offset;
}
window.onload = (event) => {
  let savedOffset = getOffset(key);
  console.log(savedOffset, "last offset")
  window.scroll(0, savedOffset);
}

var last = 0;
document.addEventListener('scroll', (e) => {
  if(Date.now() - last > 500) {
	setOffset(key);
	last = Date.now();
  }
});

window.addEventListener("beforeunload", (e) => {
  setOffset(key);
});
