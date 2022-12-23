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

// function openPopup(popup) {
//   popup.classList.add('popup_opened');

//   document.addEventListener('keydown', closePopupByKey);

//   closePopupByOverlay(popup);

// }

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');

//   document.removeEventListener('keydown', closePopupByKey);

// }

// function closePopupByOverlay(popup) {

//   popup.addEventListener('click', (e) => {

//     if (e.currentTarget == e.target) {

//       closePopup(popup);
//     }

//   });

// }

// function closePopupByKey(e) {

//   if (e.key === 'Escape') {

//     const openPopup = document.querySelector('.popup_opened');

//     closePopup(openPopup);

//   };
// }


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
  // renderCard({name: namePlaceInput.value, link: linkPlaceInput.value}, cardElemGridContainer);

  formElementAdd.reset();

  closePopup(popupElementAdd);

  const buttonSubmitNewPlace = evt.target.querySelector('.popup__button-form');

  // disableSubmitButton(buttonSubmitNewPlace, 'popup__button-form_inactive');
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
    // const card = new Card(item, '#card-place');

    // const cardElement = card.generateCard();

    // cardElemGridContainer.append(cardElement);
    createCard(item, '#card-place', cardElemGridContainer);
  });

}


function createCard(objData, templateSelector, ParentSelector) {
  const card = new Card(objData, templateSelector);

  const cardElement = card.generateCard();

  ParentSelector.prepend(cardElement);
}

// function createCard(cardData) {

//     const cardElement = cardPlaceTemplate.cloneNode(true);

//     const cardElemImage = cardElement.querySelector('.card-place__img');

//     cardElemImage.src = cardData.link;

//     cardElemImage.alt = `Изображение ${cardData.name}`;

//     cardElement.querySelector('.card-place__name').textContent = cardData.name;

//     cardElement.querySelector('.card-place__like').addEventListener('click', likeCard);

//     cardElement.querySelector('.card-place__delete').addEventListener('click', deleteCard);

//     cardElemImage.addEventListener('click', openPopupImage);

//     return cardElement;
// }

// function renderCard(cardData, cardsContainer) {
//   const cardElement = createCard(cardData);

//   cardsContainer.prepend(cardElement);
// }

displayCards(initialCards);


// function likeCard(evt) {
//   const target = evt.target;

//   target.classList.toggle('card-place__like_active');
// }

// function openPopupImage(evt) {
//   const target = evt.target;
//   popupImage.src = target.src;
//   popupImage.alt = target.alt;

//   popupImageDescr.textContent = target.nextElementSibling.nextElementSibling.textContent;
//   openPopup(popupElementZoomImage);
// }


// function deleteCard(evt) {
//   const target = evt.target;
//   target.closest('.card-place').remove();
// }


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


// export default FormValidator;

// export { openPopup };
