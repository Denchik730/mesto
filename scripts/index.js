import Card from './Card.js';

import FormValidator from './FormValidator.js';

import initialCards from './cards.js';

import {
  popupElementEdit,
  popupElementAdd,
  popupElementZoomImage,
  popupEditOpenButton,
  popupAddOpenButton,
  popupEditCloseButton,
  popupAddCloseButton,
  popupImageCloseButton,
  formElementEdit,
  formElementAdd,
  nameEditInput,
  postEditInput,
  namePlaceInput,
  linkPlaceInput,
  nameProfile,
  postProfile,
  cardElemGridContainer
} from './constants.js';

import {
  openPopup,
  closePopup,
  closePopupByOverlay,
  closePopupByKey
} from './utils.js';


function fillEditPopupInputsFromPage() {

  nameEditInput.value = nameProfile.textContent;
  postEditInput.value = postProfile.textContent;

}

function formAboutUserSubmitHandler(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameEditInput.value;
  postProfile.textContent = postEditInput.value;

  closePopup(popupElementEdit);

}

function formNewPlaceSubmitHandler(evt) {

  evt.preventDefault();

  createCard({name: namePlaceInput.value, link: linkPlaceInput.value}, '#card-place', cardElemGridContainer);

  formElementAdd.reset();

  closePopup(popupElementAdd);

  validateAddForm.enableValidation();

}

formElementEdit.addEventListener('submit', formAboutUserSubmitHandler);
formElementAdd.addEventListener('submit', formNewPlaceSubmitHandler);
popupAddOpenButton.addEventListener('click', () => openPopup(popupElementAdd));
popupAddCloseButton.addEventListener('click', () => closePopup(popupElementAdd));
popupEditOpenButton.addEventListener('click', () => {
  openPopup(popupElementEdit);
  fillEditPopupInputsFromPage();
});
popupEditCloseButton.addEventListener('click', () => closePopup(popupElementEdit));
popupImageCloseButton.addEventListener('click', () => closePopup(popupElementZoomImage));



// //Шесть карточек из коробки
function displayCards(arr) {
  arr.forEach((item) => {

    createCard(item, '#card-place', cardElemGridContainer);

  });

}

function createCard(objData, templateSelector, ParentSelector) {
  const card = new Card(objData, templateSelector);

  const cardElement = card.generateCard();

  ParentSelector.prepend(cardElement);
}

displayCards(initialCards);

const validateEditForm = new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-form',
  inactiveButtonClass: 'popup__button-form_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}, '.popup__form_edit')

validateEditForm.enableValidation();

const validateAddForm = new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-form',
  inactiveButtonClass: 'popup__button-form_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}, '.popup__form_add')

validateAddForm.enableValidation();
