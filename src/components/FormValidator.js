export default class FormValidator {
  constructor(data, form) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._form = document.querySelector(form);
  }


  _findFormErrorElement(inputElement) {

    this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);

  }


  _showInputError(inputElement) {

    inputElement.classList.add(this._inputErrorClass);

  }

  _showInputErrorMessage(inputElement) {
    this._findFormErrorElement(inputElement);

    this._errorElement.textContent = inputElement.validationMessage;

    this._errorElement.classList.add(this._errorClass);

  }

  _hideInputError(inputElement) {

    inputElement.classList.remove(this._inputErrorClass);

  }

  _hideInputErrorMessage(inputElement) {

    this._findFormErrorElement(inputElement);

    this._errorElement.classList.remove(this._errorClass);

    this._errorElement.textContent = '';

  }


  _isValid(inputElement) {

    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
      this._showInputErrorMessage(inputElement);
    } else {
      this._hideInputError(inputElement);
      this._hideInputErrorMessage(inputElement);
    }

  }

  _hasInvalidInput() {

    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });

  }

  disableSubmitButton() {

    this._submitButtonElement.classList.add(this._inactiveButtonClass);
    this._submitButtonElement.setAttribute('disabled', true);

  }

  _enableSubmitButton() {
    this._submitButtonElement.classList.remove(this._inactiveButtonClass);
    this._submitButtonElement.removeAttribute('disabled');
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }

  }

  _setInputsEventListeners() {

    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));

    this._submitButtonElement = this._form.querySelector(this._submitButtonSelector);

    this._toggleButtonState();

    this._inputList.forEach(inputElement => {

      inputElement.addEventListener('input', () => {

        this._isValid(inputElement);

        this._toggleButtonState();

      });

    });

  }

  enableValidation() {

    this._setInputsEventListeners();

  }

}


