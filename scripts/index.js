const popup = document.querySelectorAll('.popup');
const popupElementEdit = document.querySelector('.popup_edit_form');
const popupElementAdd = document.querySelector('.popup_add_form');


const editButton = document.querySelector('.info__edit-button');
const addButton = document.querySelector('.info__add-button');
const closePopupButton = document.querySelectorAll('.popup__close');


const formElementEdit = document.querySelector('.popup__form_edit');
const formElementAdd = document.querySelector('.popup__form_add');
const nameInput = popupElementEdit.querySelector('.popup__input_field_name');
const postInput = popupElementEdit.querySelector('.popup__input_field_post');
const namePlaceInput = popupElementAdd.querySelector('.popup__input_field_place-name');
const linkPlaceInput = popupElementAdd.querySelector('.popup__input_field_place-link');



const nameProfile = document.querySelector('.info__profile-name');
const postProfile = document.querySelector('.info__profile-post');



const cardPlaceTemplate = document.querySelector('#card-place').content;
const cardElemGridContainer = document.querySelector('.elements__grid-container');

function openPopupEdit() {
  popupElementEdit.classList.add('popup_opened');

  nameInput.value = nameProfile.textContent
  postInput.value = postProfile.textContent
}

function openPopupAdd() {
  popupElementAdd.classList.add('popup_opened');
}

function closePopup() {
  popup.forEach(pop => {
    pop.classList.remove('popup_opened');
  });
}

function formSubmitHandlerAboutUser(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  postProfile.textContent = postInput.value;

  closePopup();
}

function formSubmitHandlerNewPlace(evt) {
  evt.preventDefault();

  let objCard = {
    name: null,
    link: null
  }

  objCard['name'] = namePlaceInput.value;
  objCard['link'] = linkPlaceInput.value;

  cardElemGridContainer.prepend(createCard(objCard));

  namePlaceInput.value = '';
  linkPlaceInput.value = '';

  closePopup();

}



editButton.addEventListener('click', openPopupEdit);
addButton.addEventListener('click', openPopupAdd);
closePopupButton.forEach(btn => {
  btn.addEventListener('click', closePopup);
})
formElementEdit.addEventListener('submit', formSubmitHandlerAboutUser);
formElementAdd.addEventListener('submit', formSubmitHandlerNewPlace);


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
    cardElemGridContainer.append(createCard(item));
  });

}

function createCard(card) {

    const cardElement = cardPlaceTemplate.querySelector('.card-place').cloneNode(true);

    cardElement.querySelector('.card-place__img').src = card.link;

    cardElement.querySelector('.card-place__name').textContent = card.name;

    cardElement.querySelector('.card-place__like').addEventListener('click', likeCard);

    cardElement.querySelector('.card-place__delete').addEventListener('click', deleteCard);

    return cardElement;

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


function deleteCard(evt) {
  const target = evt.target;
  const card = target.closest('.card-place');
  card.remove();
}

