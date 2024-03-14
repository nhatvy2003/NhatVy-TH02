   const form = document.querySelector("form");
const aInput = document.querySelector("#a");
const bInput = document.querySelector("#b");
const resultElement = document.querySelector("#result");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const a = parseFloat(aInput.value);
  const b = parseFloat(bInput.value);
  if (isNaN(a) || isNaN(b)) {
    resultElement.textContent = "Vui lòng nhập số hợp lệ";
    return;
  }
  const x = -b / a;
  if (a === 0) {
    if (b === 0) {
      resultElement.textContent = "Phương trình vô số nghiệm";
    } else {
      resultElement.textContent = "Phương trình vô nghiệm";
    }
  } else {
    resultElement.textContent = `Nghiệm x = ${x}`;
  }
});