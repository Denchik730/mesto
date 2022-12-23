import  { openPopup } from "./utils.js";

export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector) // используем this._templateSelector
    .content
    .querySelector('.card-place')
    .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._elementLikeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._elementDeleteButton.addEventListener('click', () => {
      this._handleDeleteClick();
    });

    this._elementImage.addEventListener('click', () => {
      this._handleClickImage();
    });
  }

  _handleLikeClick() {

    this._elementLikeButton.classList.toggle('card-place__like_active');
  }

  _handleDeleteClick() {
    this._element.remove();
  }

  _handleClickImage() {
    const popupImage = document.querySelector('.popup__place-image');
    const popupImageDescr = document.querySelector('.popup__place-descr');
    const popupElementZoomImage = document.querySelector('.popup_image');


    popupImage.src = this._elementImage.src;
    popupImage.alt = this._elementImage.alt;
    popupImageDescr.textContent = this._elementImage.nextElementSibling.nextElementSibling.textContent;

    openPopup(popupElementZoomImage);
  }

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

