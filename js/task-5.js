const inputRef = document.querySelector('#name-input');
let outputRef = document.querySelector('#name-output');

inputRef.addEventListener ("input", () =>
    (outputRef.textContent = inputRef.value.length > 0 ? inputRef.value : "незнакомец")
);



