export default class Card {
  constructor({ data, handleCardClick, handleLikeBtnClick, handleDeleteBtnClick}, templateSelector, currentUserId) {
    console.log(data)
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._handleCardClick = handleCardClick;
    this._handleLikeBtnClick = handleLikeBtnClick;
    this._handleDeleteBtnClick = handleDeleteBtnClick;
    this._templateSelector = templateSelector;
    this._currentUserId = currentUserId;
    this._ownerUserId = data.owner._id;
    this._id = data._id;
  }

  _getTemplate() {

    return document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.card-place')
    .cloneNode(true);

  }

  _setEventListeners() {
    this._elementLikeButton.addEventListener('click', () => {
      // this._handleLikeClick();
      this._handleLikeBtnClick(this._elementLikeButton);
    });

    this._elementDeleteButton.addEventListener('click', () => {
      this._handleDeleteBtnClick();
    });

    this._elementImage.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  // _handleLikeClick() {
  //   if (this._elementLikeButton.classList.contains('card-place__like_active')) {
  //     this._api.dislikeCard(this._id)
  //       .then((data) => {
  //         this._elementLikeButton.classList.remove('card-place__like_active');
  //         this._elementCountLikes.textContent = data.likes.length
  //       })
  //       .catch((err) => console.log(err));
  //   } else {
  //     this._api.likeCard(this._id)
  //     .then((data) => {
  //       this._elementLikeButton.classList.add('card-place__like_active');
  //       this._elementCountLikes.textContent = data.likes.length
  //     })
  //     .catch((err) => console.log(err));
  //   }
  // }

  _handleDeleteClick() {
    this._element.remove();
  }

  updateCountLikesForCard(data) {
    this._elementCountLikes.textContent = data.length;
    this._isShowLike();
  }

  _isShowLike() {
    this._likes.forEach(item => {
      item._id == this._currentUserId ? this._elementLikeButton.classList.add('card-place__like_active') : this._elementLikeButton.classList.remove('card-place__like_active');
    });

  }

  _isShowDeleteBtn() {
    if (this._currentUserId !== this._ownerUserId) {
      this._elementDeleteButton.classList.add('card-place__delete_hidden');
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementLikeButton = this._element.querySelector('.card-place__like');
    this._elementCountLikes = this._element.querySelector('.card-place__like-count');
    this._elementImage = this._element.querySelector('.card-place__img');
    this._elementName = this._element.querySelector('.card-place__name');
    this._elementDeleteButton = this._element.querySelector('.card-place__delete');

    this.updateCountLikesForCard(this._likes);

    this._isShowDeleteBtn();

    this._isShowLike();

    this._setEventListeners();

    this._elementCountLikes.textContent = this._likes.length;
    this._elementImage.src = this._link;
    this._elementImage.alt = `Изображение ${this._name}`;
    this._elementName.textContent = this._name;

    return this._element;
  }
}

