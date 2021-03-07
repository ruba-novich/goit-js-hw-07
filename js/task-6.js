
const inputRef = document.querySelector('#validation-input');


const onInputFocusChange = () => {
  
  if (
    inputRef.value.length !== Number(inputRef.dataset.length)
  ) {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  } else {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
  
}
inputRef.addEventListener('change', onInputFocusChange);
