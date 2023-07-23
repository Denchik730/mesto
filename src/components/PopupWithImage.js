import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({ name, link }) {
    super.open();
    this._popupImage = this._popup.querySelector('.popup__place-image');
    this._popupDescr = this._popup.querySelector('.popup__place-descr');
    this._popupImage.src = link;
    this._popupImage.alt = `Изображение ${name}`;
    this._popupDescr.textContent = name;
  }
}
