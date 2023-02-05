import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;

    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popupForm.querySelectorAll('.popup__input')
    this._popupFormBtn = this._popup.querySelector('.popup__button-form');

  }

  _getInputValues() {

    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);

    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach(input => input.value = data[input.name]);
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  setButtonText(text) {
    this._popupFormBtn.textContent = text;
  }


  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  }

}
