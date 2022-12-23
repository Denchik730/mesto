// popups
// const popups = document.querySelectorAll('.popup');

const popupElementEdit = document.querySelector('.popup_edit_form');
const popupElementAdd = document.querySelector('.popup_add_form');
const popupElementZoomImage = document.querySelector('.popup_image');


// popups open button
const popupEditOpenButton = document.querySelector('.info__edit-button');
const popupAddOpenButton = document.querySelector('.info__add-button');


// popups close button
const popupEditCloseButton = popupElementEdit.querySelector('.popup__close');
const popupAddCloseButton = popupElementAdd.querySelector('.popup__close');
const popupImageCloseButton = popupElementZoomImage.querySelector('.popup__close');

// popup data
// const popupImage = document.querySelector('.popup__place-image');
// const popupImageDescr = document.querySelector('.popup__place-descr');

// popup forms and inputs
const formElementEdit = document.querySelector('.popup__form_edit');
const formElementAdd = document.querySelector('.popup__form_add');
const nameEditInput = popupElementEdit.querySelector('.popup__input_field_name');
const postEditInput = popupElementEdit.querySelector('.popup__input_field_post');
const namePlaceInput = popupElementAdd.querySelector('.popup__input_field_place-name');
const linkPlaceInput = popupElementAdd.querySelector('.popup__input_field_place-link');


// info profile data
const nameProfile = document.querySelector('.info__profile-name');
const postProfile = document.querySelector('.info__profile-post');

// template for cards and wrapper cards
// const cardPlaceTemplate = document.querySelector('#card-place').content.querySelector('.card-place');
const cardElemGridContainer = document.querySelector('.elements__grid-container');

export {
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
};
