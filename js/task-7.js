
const fontSizeRef = document.querySelector("#font-size-control");
const TextRef = document.querySelector("#text");

const fontSizeChange = function () {
  TextRef.style.fontSize = `${fontSizeRef.value}px`;
};

TextRef.style.fontSize = `${fontSizeRef.value}px`;
fontSizeRef.addEventListener("input", fontSizeChange);

