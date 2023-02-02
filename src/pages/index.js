import './index.css';

import Api from '../components/Api';

import Card from '../components/Card.js';

import FormValidator from '../components/FormValidator.js';

import PopupConsentDelete from '../components/PopupConsentDelete';

import PopupWithForm from '../components/PopupWithForm.js';

import PopupWithImage from '../components/PopupWithImage.js';

import Section from '../components/Section.js';

import UserInfo from '../components/UserInfo.js';

import initialCards from '../utils/cards.js';

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


const validateEditForm = new FormValidator(formValidatorData, '.popup__form_edit')

validateEditForm.enableValidation();

const validateAddForm = new FormValidator(formValidatorData, '.popup__form_add')

validateAddForm.enableValidation();

const validateEditAvatarForm = new FormValidator(formValidatorData, '.popup__form_edit-avatar')

validateEditAvatarForm.enableValidation();


const popupZoomImage = new PopupWithImage(popupZoomImageSelector);
popupZoomImage.setEventListeners();


const popupConsentDelete = new PopupConsentDelete('.popup_type_approval')
popupConsentDelete.setEventListeners();


function createCard(item) {
  const card = new Card({
    data: item,
    handleCardClick: () => {
      popupZoomImage.open(item);
    },
    handleLikeBtnClick: (likeButton) => {
      // console.log('like')
      // card._handleLikeClick();
      if (likeButton.classList.contains('card-place__like_active')) {
        api.dislikeCard(item._id)
          .then((data) => {
            likeButton.classList.remove('card-place__like_active');
            card.updateCountLikesForCard(data.likes)
          })
          .catch((err) => console.log(err));
      } else {
        api.likeCard(item._id)
          .then((data) => {
            likeButton.classList.add('card-place__like_active');
            card.updateCountLikesForCard(data.likes)
          })
          .catch((err) => console.log(err));
      }
    },
    handleDeleteBtnClick: () => {
      popupConsentDelete.setSubmitFunc(() => {
        popupConsentDelete.isLoadingData(true);
        api.deleteCard(item._id)
          .then(() => {
            card._handleDeleteClick();
            popupConsentDelete.close();
          })
          .catch((err) => console.log(err))
          .finally(() => popupConsentDelete.isLoadingData(false))
      });
      popupConsentDelete.open()
    }
  },
  cardTemplateSelector,
  userInfo.id,
  )

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




const popupAddForm = new PopupWithForm(popupAddSelector, (addData) => {
  popupAddForm.isLoadingData(true);
  api.addNewUserCard(addData)
    .then(res => {
      console.log(res);
      const cardElement = createCard(res);
      cardsList.addItem(cardElement);
    })
    .catch((err) => console.log(err))
    .finally(() => popupAddForm.isLoadingData(false))

});

popupAddForm.setEventListeners();

const userInfo = new UserInfo({ profileNameSelector: nameProfile, profilePostSelector: postProfile, profileAvatarSelector: avatarProfile });

const popupEditForm = new PopupWithForm(popupEditProfileSelector, (editData) => {
  popupEditForm.isLoadingData(true);
  api.setProfileUserInfo(editData)
    .then(res => {
      console.log(res)
      userInfo.setUserInfo(editData);
    })
    .catch((err) => console.log(err))
    .finally(() => popupEditForm.isLodingData(false))
});

popupEditForm.setEventListeners();

const popupAvatarEdit = new PopupWithForm('.popup_type_edit-avatar', (addData) => {
  popupAvatarEdit.isLoadingData(true);
  api.changeUserAvatar(addData)
    .then(res => {
      userInfo.setUserAvatar(addData)
    })
    .catch(err => console.log(err))
    .finally(() => popupAvatarEdit.isLoadingData(false))
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

api.getAllNeededData()
  .then(data => {
    const [userData, cardData] = data;
    console.log(userData)
    userInfo.setUserInfo(userData);
    cardsList.renderItems(cardData);
  })
  .catch(err => console.log(err))
