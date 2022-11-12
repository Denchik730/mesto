const popupElement = document.querySelector('.popup');
const editButton = document.querySelector('.info__edit-button');
const closePopupButton = popupElement.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_field_name');
const postInput = formElement.querySelector('.popup__input_field_post');
const nameProfile = document.querySelector('.info__profile-name');
const postProfile = document.querySelector('.info__profile-post');

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
