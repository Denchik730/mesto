import './index.css';

import Card from '../components/Card.js';

import FormValidator from '../components/FormValidator.js';

import PopupWithForm from '../components/PopupWithForm.js';

import PopupWithImage from '../components/PopupWithImage.js';

import Section from '../components/Section.js';

import UserInfo from '../components/UserInfo.js';

import initialCards from '../utils/cards.js';

import {
  popupEditOpenButton,
  popupAddOpenButton,
  nameProfile,
  postProfile,
  cardElemGridContainer,
  popupEditProfileSelector,
  popupAddSelector,
  popupZoomImageSelector,
  cardTemplateSelector,
  formValidatorData
} from '../utils/constants.js';

const validateEditForm = new FormValidator(formValidatorData, '.popup__form_edit')

validateEditForm.enableValidation();

const validateAddForm = new FormValidator(formValidatorData, '.popup__form_add')

validateAddForm.enableValidation();

const popupZoomImage = new PopupWithImage(popupZoomImageSelector);
popupZoomImage.setEventListeners();

function createCard(item) {
  const card = new Card({
    data: item,
    handleCardClick: () => {
      popupZoomImage.open(item);
    }
  }, cardTemplateSelector)

  const cardElement = card.generateCard();

  return cardElement;
}

const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);

    cardsList.addItem(cardElement);
  }
}, cardElemGridContainer)

cardsList.renderItems();


const popupAddForm = new PopupWithForm(popupAddSelector, (addData) => {
  const cardElement = createCard(addData);

  cardsList.addItem(cardElement);
});

popupAddForm.setEventListeners();

const userInfo = new UserInfo({ profileNameSelector: nameProfile, profilePostSelector: postProfile });


const popupEditForm = new PopupWithForm(popupEditProfileSelector, (editData) => {
  userInfo.setUserInfo(editData);
});

popupEditForm.setEventListeners();

popupAddOpenButton.addEventListener('click', () => {
  popupAddForm.open();
  validateAddForm.disableSubmitButton();
});

popupEditOpenButton.addEventListener('click', () => {
  const inputEditFormValues = userInfo.getUserInfo();
  popupEditForm.setInputValues(inputEditFormValues);
  popupEditForm.open();
});

