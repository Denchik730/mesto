function openPopup(popup) {
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', closePopupByKey);

  closePopupByOverlay(popup);

}

function closePopup(popup) {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', closePopupByKey);

}

function closePopupByOverlay(popup) {

  popup.addEventListener('click', (e) => {

    if (e.currentTarget == e.target) {

      closePopup(popup);
    }

  });

}

function closePopupByKey(e) {

  if (e.key === 'Escape') {

    const openPopup = document.querySelector('.popup_opened');

    closePopup(openPopup);

  };
}

export { openPopup, closePopup, closePopupByOverlay, closePopupByKey };
