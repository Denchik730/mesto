
function findFormErrorElement(formElement, inputElement) {

  errorElement = formElement.querySelector(`.${inputElement.id}-error`);

}


function showInputError({inputElement, inputErrorClass}) {

  inputElement.classList.add(inputErrorClass);

}



function showInputErrorMessage({formElement, inputElement, errorClass}) {
  findFormErrorElement(formElement, inputElement);

  errorElement.textContent = inputElement.validationMessage;

  errorElement.classList.add(errorClass);

}

function hideInputError({inputElement, inputErrorClass}) {

  inputElement.classList.remove(inputErrorClass);

}

function hideInputErrorMessage({formElement, inputElement, errorClass}) {
  findFormErrorElement(formElement, inputElement);

  errorElement.classList.remove(errorClass);

  errorElement.textContent = '';
}



function isValid({formElement, inputElement, ...otherValdationProperties}) {
  if (!inputElement.validity.valid) {
    showInputError({inputElement, ...otherValdationProperties});
    showInputErrorMessage({formElement, inputElement, ...otherValdationProperties});
  } else {
    hideInputError({inputElement, ...otherValdationProperties});
    hideInputErrorMessage({formElement, inputElement, ...otherValdationProperties});
  }

}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState({inputList, submitButtonElement, inactiveButtonClass}) {
  if (hasInvalidInput(inputList)) {
    submitButtonElement.classList.add(inactiveButtonClass);
    submitButtonElement.setAttribute('disabled', true);
  } else {
    submitButtonElement.classList.remove(inactiveButtonClass);
    submitButtonElement.removeAttribute('disabled');
  }

}

function setInputsEventListeners({formElement, inputSelector, submitButtonSelector, ...otherValdationProperties}) {


  const inputList = Array.from(formElement.querySelectorAll(inputSelector));


  const submitButtonElement = formElement.querySelector(submitButtonSelector);

  toggleButtonState({inputList, submitButtonElement, ...otherValdationProperties});


  inputList.forEach(inputElement => {

    inputElement.addEventListener('input', () => {
      isValid({formElement, inputElement, ...otherValdationProperties});

      toggleButtonState({inputList, submitButtonElement, ...otherValdationProperties});

    });

  });

}



function enableValidation({formSelector, ...otherValdationProperties}) {

  const formList = Array.from(document.querySelectorAll(formSelector));


  formList.forEach(formElement => {

    setInputsEventListeners({formElement, ...otherValdationProperties});

  });



}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-form',
  inactiveButtonClass: 'popup__button-form_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});


