import Popup from "./Popup.js";

export default class PopupConsentDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupFormBtn = this._popup.querySelector('.popup__button-form');
    this._popupFormBtnText = this._popup.querySelector('.popup__button-form').textContent;
  }

  setSubmitFunc(action) {
    this._handleFormSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleFormSubmit();
    })
  }

  isLoadingData(isLoading) {
    if (isLoading) {
      this._popupFormBtn.textContent = 'Cохранение...'
    } else {
      this._popupFormBtn.textContent = this._popupFormBtnText;
    }
  }
}
