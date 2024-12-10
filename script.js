const input = document.getElementById("input");

input.addEventListener('input', transformNumber);

function transformNumber (e) {
   let value = e.target.value;
   let numStr = extractNumber(value);
   input.value = numStr.length > 3 ? '+(' + numStr.slice(0, 3) + ') - ' + numStr.slice(3) : numStr;
}

function extractNumber(str) {
    return [...str].filter((s) => Number.isInteger(+s) && s !== " ").join('');
}