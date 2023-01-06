export default class UserInfo {
  constructor({ profileNameSelector, profilePostSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profilePost = document.querySelector(profilePostSelector);
  }

  getUserInfo() {
    this._aboutUserData = {
      name: this._profileName.textContent,
      post: this._profilePost.textContent
    }

    return this._aboutUserData;
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profilePost.textContent = data.post;
  }
}
