export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
    this._popupCloseButton = this._popup.querySelector('.popup__close');
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === 'Escape') {
      this.close();
    };
  }

  _handleOverlayClose(e) {
    if (e.currentTarget == e.target) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupCloseButton.addEventListener('click', () => this.close());
    this._popup.addEventListener('click', this._handleOverlayClose);
  }
}
