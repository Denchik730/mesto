import Popup from "./Popup.js";
import { popupImage, popupImageDescr, popupElementZoomImage } from '../utils/constants.js'


export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__place-image');
    this._popupDescr = this._popup.querySelector('.popup__place-descr');
  }

  open(cardData) {
    super.open();

    this._popupImage.src = cardData.link;
    this._popupImage.alt = cardData.name;
    this._popupDescr.textContent = cardData.name;

  }
}
