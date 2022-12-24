// картинка и ее описание зум попапа
const popupImage = document.querySelector('.popup__place-image');
const popupImageDescr = document.querySelector('.popup__place-descr');

// попапы
const popupElementEdit = document.querySelector('.popup_type_profile');
const popupElementAdd = document.querySelector('.popup_type_add');
const popupElementZoomImage = document.querySelector('.popup_type_image');

// кнопки открытия попапов
const popupEditOpenButton = document.querySelector('.info__edit-button');
const popupAddOpenButton = document.querySelector('.info__add-button');

// кнопки закрытия попапов
const popupEditCloseButton = popupElementEdit.querySelector('.popup__close');
const popupAddCloseButton = popupElementAdd.querySelector('.popup__close');
const popupImageCloseButton = popupElementZoomImage.querySelector('.popup__close');

// формы и инпуты попапов
const formElementEdit = document.querySelector('.popup__form_edit');
const formElementAdd = document.querySelector('.popup__form_add');
const nameEditInput = popupElementEdit.querySelector('.popup__input_field_name');
const postEditInput = popupElementEdit.querySelector('.popup__input_field_post');
const namePlaceInput = popupElementAdd.querySelector('.popup__input_field_place-name');
const linkPlaceInput = popupElementAdd.querySelector('.popup__input_field_place-link');

// Данные о пользователе которые показаны на странице
const nameProfile = document.querySelector('.info__profile-name');
const postProfile = document.querySelector('.info__profile-post');

// Обертка для краточек
const cardElemGridContainer = document.querySelector('.elements__grid-container');

// Данные для класса валидации
const formValidatorData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-form',
  inactiveButtonClass: 'popup__button-form_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export {
  popupImage,
  popupImageDescr,
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
  formValidatorData
};
