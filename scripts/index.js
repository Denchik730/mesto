const popupElement = document.querySelector('.popup');
const editButton = document.querySelector('.info__edit-button');
const closePopupButton = popupElement.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_field_name');
const postInput = formElement.querySelector('.popup__input_field_post');
const nameProfile = document.querySelector('.info__profile-name');
const postProfile = document.querySelector('.info__profile-post');
const cardPlaceTemplate = document.querySelector('#card-place').content;
const cardElemGridContainer = document.querySelector('.elements__grid-container');

function openPopup() {
  popupElement.classList.add('popup_opened');

  nameInput.value = nameProfile.textContent
  postInput.value = postProfile.textContent
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  postProfile.textContent = postInput.value;

  closePopup()
}

editButton.addEventListener('click', openPopup)
closePopupButton.addEventListener('click', closePopup)
formElement.addEventListener('submit', formSubmitHandler);


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



function displayCardsFromArray() {
  initialCards.forEach(item => {
    const cardElement = cardPlaceTemplate.querySelector('.card-place').cloneNode(true);

    cardElement.querySelector('.card-place__img').src = item.link;

    cardElement.querySelector('.card-place__name').textContent = item.name;

    cardElemGridContainer.append(cardElement);
  });
}

displayCardsFromArray();
