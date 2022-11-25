// popups
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
const popupImage = document.querySelector('.popup__place-image');
const popupImageDescr = document.querySelector('.popup__place-descr');

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
const cardPlaceTemplate = document.querySelector('#card-place').content;
const cardElemGridContainer = document.querySelector('.elements__grid-container');


function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}


function renderEditInputFromPage() {

  nameEditInput.value = nameProfile.textContent;
  postEditInput.value = postProfile.textContent;
}

function formSubmitHandlerAboutUser(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameEditInput.value;
  postProfile.textContent = postEditInput.value;

  togglePopup(popupElementEdit);
}

function formSubmitHandlerNewPlace(evt) {
  evt.preventDefault();

  renderCard({name: namePlaceInput.value, link: linkPlaceInput.value}, cardElemGridContainer);

  namePlaceInput.value = '';
  linkPlaceInput.value = '';

  togglePopup(popupElementAdd);
}


formElementEdit.addEventListener('submit', formSubmitHandlerAboutUser);
formElementAdd.addEventListener('submit', formSubmitHandlerNewPlace);
popupAddOpenButton.addEventListener('click', () => togglePopup(popupElementAdd));
popupAddCloseButton.addEventListener('click', () => togglePopup(popupElementAdd));
popupEditOpenButton.addEventListener('click', () => {
  togglePopup(popupElementEdit);
  renderEditInputFromPage();
});
popupEditCloseButton.addEventListener('click', () => togglePopup(popupElementEdit));
popupImageCloseButton.addEventListener('click', () => togglePopup(popupElementZoomImage));



//Шесть карточек из коробки
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function displayCards(arr) {
  arr.forEach((item) => {
    renderCard(item, cardElemGridContainer);
  });

}

function createCard(cardData) {

    const cardElement = cardPlaceTemplate.querySelector('.card-place').cloneNode(true);

    cardElement.querySelector('.card-place__img').src = cardData.link;

    cardElement.querySelector('.card-place__name').textContent = cardData.name;

    cardElement.querySelector('.card-place__like').addEventListener('click', likeCard);

    cardElement.querySelector('.card-place__delete').addEventListener('click', deleteCard);

    cardElement.querySelector('.card-place__img').addEventListener('click', openPopupImage);

    return cardElement;
}

function renderCard(cardData, cardsContainer) {
  const cardElement = createCard(cardData);

  cardsContainer.prepend(cardElement);
}

displayCards(initialCards);


function likeCard(evt) {
  const target = evt.target;
  if (target.classList.contains('card-place__like_active')) {
    target.classList.remove('card-place__like_active');
  } else {
    target.classList.add('card-place__like_active');
  }
}

function openPopupImage(evt) {
  const target = evt.target;
  popupImage.src = target.src;
  popupImageDescr.textContent = target.nextElementSibling.nextElementSibling.textContent;
  togglePopup(popupElementZoomImage);
}


function deleteCard(evt) {
  const target = evt.target;
  target.closest('.card-place').remove();
}



