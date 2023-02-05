import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupFormBtn = this._popup.querySelector('.popup__button-form');

  }

  setSubmitFunc(action) {
    this._handleFormSubmit = action;
  }

  setButtonText(text) {
    this._popupFormBtn.textContent = text;
  }


  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleFormSubmit();
    })
  }

}
