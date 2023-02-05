import './index.css';

import Api from '../components/Api';

import Card from '../components/Card.js';

import FormValidator from '../components/FormValidator.js';

import PopupWithConfirmation from '../components/PopupWithConfirmation';

import PopupWithForm from '../components/PopupWithForm.js';

import PopupWithImage from '../components/PopupWithImage.js';

import Section from '../components/Section.js';

import UserInfo from '../components/UserInfo.js';

import {
  popupEditOpenButton,
  popupAddOpenButton,
  popupAvatarEditOpenButton,
  nameProfile,
  postProfile,
  avatarProfile,
  cardElemGridContainer,
  popupEditProfileSelector,
  popupAddSelector,
  popupZoomImageSelector,
  cardTemplateSelector,
  formValidatorData
} from '../utils/constants.js';


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '85aaf06b-bad2-4dd5-8526-2a71ddd32563',
    'Content-Type': 'application/json'
  }
});


api.getAllNeededData()
  .then(data => {

    const [userData, cardData] = data;
    userInfo.setUserInfo(userData);
    userInfo.setUserId(userData);
    cardsList.renderItems(cardData);

  })
  .catch(err => console.log(err))


const validateEditForm = new FormValidator(formValidatorData, '.popup__form_edit')
validateEditForm.enableValidation();

const validateAddForm = new FormValidator(formValidatorData, '.popup__form_add')
validateAddForm.enableValidation();

const validateEditAvatarForm = new FormValidator(formValidatorData, '.popup__form_edit-avatar')
validateEditAvatarForm.enableValidation();


const popupZoomImage = new PopupWithImage(popupZoomImageSelector);
popupZoomImage.setEventListeners();


const popupWithConfirmation = new PopupWithConfirmation('.popup_type_approval')
popupWithConfirmation.setEventListeners();


function createCard(item) {
  const card = new Card({
    data: item,
    handleCardClick: () => {

      popupZoomImage.open(item);

    },
    handleLikeBtnClick: () => {
      card.handleLikeClick();
    },
    handleDeleteBtnClick: () => {

      popupWithConfirmation.setSubmitFunc(() => {

        popupWithConfirmation.setButtonText('Сохранить...');

        api.deleteCard(item._id)
          .then(() => {
            card.handleDeleteClick();
            popupWithConfirmation.close();
          })
          .catch((err) => console.log(err))
          .finally(() => popupWithConfirmation.setButtonText('Да'))
        });

        popupWithConfirmation.open()

    }
  },
  cardTemplateSelector,
  userInfo.id,
  api
  )

  const cardElement = card.generateCard();

  return cardElement;
}


const cardsList = new Section({

  renderer: (item) => {
    const cardElement = createCard(item);

    cardsList.addItem(cardElement);
  }

}, cardElemGridContainer)


const userInfo = new UserInfo({ profileNameSelector: nameProfile, profilePostSelector: postProfile, profileAvatarSelector: avatarProfile });


const popupAddForm = new PopupWithForm(popupAddSelector, (newCardData) => {

  popupAddForm.setButtonText('Сохранить...');

  api.addNewUserCard(newCardData)
    .then(newApiCardData => {
      const cardElement = createCard(newApiCardData);
      cardsList.addItem(cardElement);
      popupAddForm.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupAddForm.setButtonText('Создать'))

});

popupAddForm.setEventListeners();


const popupEditForm = new PopupWithForm(popupEditProfileSelector, (editUserProfileData) => {

  popupEditForm.setButtonText('Сохранить...');

  api.setProfileUserInfo(editUserProfileData)
    .then((userDataFromApi) => {
      userInfo.setUserInfo(userDataFromApi);
      popupEditForm.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupEditForm.setButtonText('Сохранить'))

});

popupEditForm.setEventListeners();


const popupAvatarEdit = new PopupWithForm('.popup_type_edit-avatar', (editUserAvatarData) => {

  popupAvatarEdit.setButtonText('Сохранить...');

  api.changeUserAvatar(editUserAvatarData)
    .then(() => {
      userInfo.setUserAvatar(editUserAvatarData)
      popupAvatarEdit.close();
    })
    .catch(err => console.log(err))
    .finally(() => popupAvatarEdit.setButtonText('Сохранить'))

});

popupAvatarEdit.setEventListeners();


popupAvatarEditOpenButton.addEventListener('click',() => {

  popupAvatarEdit.open();
  validateEditAvatarForm.disableSubmitButton();

});


popupAddOpenButton.addEventListener('click', () => {

  popupAddForm.open();
  validateAddForm.disableSubmitButton();

});


popupEditOpenButton.addEventListener('click', () => {

  const inputEditFormValues = userInfo.getUserInfo();
  popupEditForm.setInputValues(inputEditFormValues);
  popupEditForm.open();

});

