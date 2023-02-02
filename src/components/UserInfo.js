export default class UserInfo {
  constructor({ profileNameSelector, profilePostSelector, profileAvatarSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profilePost = document.querySelector(profilePostSelector);
    this._profileAvatar = document.querySelector(profileAvatarSelector);
  }

  getUserInfo() {
    this._aboutUserData = {
      name: this._profileName.textContent,
      about: this._profilePost.textContent
    }

    return this._aboutUserData;
  }

  setUserInfo(data) {
    console.log(data)
    this._profileName.textContent = data.name;
    this._profilePost.textContent = data.about;
    if (data.hasOwnProperty('avatar')) {
      this._profileAvatar.src = data.avatar;
    }
    this.id = data._id;
  }

  setUserAvatar(data) {
    this._profileAvatar.src = data.avatar;
  }
}
