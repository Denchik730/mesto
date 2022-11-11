// Открытие и закрытие попапа
const popupElement = document.querySelector('.popup');
const editButton = document.querySelector('.info__edit-button');
const closePopupButton = popupElement.querySelector('.popup__close');

function togglePopup() {
  popupElement.classList.toggle('popup_opened');
}

editButton.addEventListener('click', togglePopup)
closePopupButton.addEventListener('click', togglePopup)


const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__name-input');
const postInput = formElement.querySelector('.popup__post-input');
const nameProfile = document.querySelector('.info__profile-name');
const postProfile = document.querySelector('.info__profile-post');

//Данные до изменений

// nameProfile.textContent = nameInput.getAttribute('value');
// postProfile.textContent = postInput.getAttribute('value');

nameInput.setAttribute('value', `${nameProfile.textContent}`)
postInput.setAttribute('value', `${postProfile.textContent}`)

// Изменение данных
function formSubmitHandler(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  postProfile.textContent = postInput.value;

  togglePopup()
}

formElement.addEventListener('submit', formSubmitHandler);
