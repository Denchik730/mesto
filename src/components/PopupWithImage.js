import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__place-image');
    this._popupDescr = this._popup.querySelector('.popup__place-descr');
  }

  open(popupZoomData) {
    super.open();

    this._popupImage.src = popupZoomData.link;
    this._popupImage.alt = `Изображение ${popupZoomData.name}`;
    this._popupDescr.textContent = popupZoomData.name;

  }

}
