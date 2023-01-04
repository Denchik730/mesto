import { popupImage, popupImageDescr, popupElementZoomImage } from '../utils/constants.js'
import  { openPopup } from "../utils/utils.js";

export default class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {

    return document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.card-place')
    .cloneNode(true);

  }

  _setEventListeners() {
    this._elementLikeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._elementDeleteButton.addEventListener('click', () => {
      this._handleDeleteClick();
    });

    this._elementImage.addEventListener('click', () => {
      // this._handleClickImage();
      this._handleCardClick();
    });
  }

  _handleLikeClick() {

    this._elementLikeButton.classList.toggle('card-place__like_active');
  }

  _handleDeleteClick() {
    this._element.remove();
  }

  // _handleClickImage() {

  //   popupImage.src = this._elementImage.src;
  //   popupImage.alt = this._elementImage.alt;
  //   popupImageDescr.textContent = this._elementImage.nextElementSibling.nextElementSibling.textContent;

  //   openPopup(popupElementZoomImage);
  // }

  generateCard() {
    this._element = this._getTemplate();
    this._elementLikeButton = this._element.querySelector('.card-place__like');
    this._elementImage = this._element.querySelector('.card-place__img');
    this._elementName = this._element.querySelector('.card-place__name');
    this._elementDeleteButton = this._element.querySelector('.card-place__delete');

    this._setEventListeners();

    this._elementImage.src = this._link;
    this._elementName.textContent = this._name;

    return this._element;
  }
}

