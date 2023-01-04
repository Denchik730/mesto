import Card from '../components/Card.js';

import FormValidator from '../components/FormValidator.js';

import PopupWithForm from '../components/PopupWithForm.js';

import PopupWithImage from '../components/PopupWithImage.js';

import Section from '../components/Section.js';

import UserInfo from '../components/UserInfo.js';

import initialCards from '../utils/cards.js';

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
  cardElemGridContainer,
  popupEditProfileSelector,
  popupAddSelector,
  popupZoomImageSelector,
  cardTemplateSelector,
  formValidatorData
} from '../utils/constants.js';

import {
  openPopup,
  closePopup,
  closePopupByOverlay,
  closePopupByKey,
  fillEditPopupInputsFromPage
} from '../utils/utils.js';


const validateEditForm = new FormValidator(formValidatorData, '.popup__form_edit')

validateEditForm.enableValidation();

const validateAddForm = new FormValidator(formValidatorData, '.popup__form_add')

validateAddForm.enableValidation();

const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card({
      data: item,
      handleCardClick: () => {
        const popupZoomImage = new PopupWithImage(popupZoomImageSelector);
        popupZoomImage.setEventListeners();
        popupZoomImage.open(item);
      }
    }, cardTemplateSelector)

    const cardElement = card.generateCard();


    cardsList.addItem(cardElement);
  }
}, cardElemGridContainer)

cardsList.renderItems();


const popupAddForm = new PopupWithForm(popupAddSelector, (addData) => {
  const card = new Card({
    data: addData,
    handleCardClick: () => {
      const popupZoomImage = new PopupWithImage(popupZoomImageSelector);
      popupZoomImage.setEventListeners();
      popupZoomImage.open(addData);
    }
  }, cardTemplateSelector)

  const cardElement = card.generateCard();

  cardsList.addItem(cardElement);
  validateAddForm.disableSubmitButton();

});

popupAddForm.setEventListeners();

const userInfo = new UserInfo({ profileNameSelector: nameProfile, profilePostSelector: postProfile });


const popupEditForm = new PopupWithForm(popupEditProfileSelector, (editData) => {
  userInfo.setUserInfo(editData);
});

popupEditForm.setEventListeners();

popupAddOpenButton.addEventListener('click', () => popupAddForm.open());

popupEditOpenButton.addEventListener('click', () => {
  fillEditPopupInputsFromPage();
  popupEditForm.open();
});


export {userInfo};
