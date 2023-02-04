(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function e(t){var r=t.baseUrl,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=r,this._headers=n}var r,n;return r=e,(n=[{key:"_checkRes",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._checkRes)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._checkRes)}},{key:"setProfileUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkRes)}},{key:"addNewUserCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkRes)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkRes)}},{key:"likeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkRes)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DElETE",headers:this._headers}).then(this._checkRes)}},{key:"changeUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkRes)}},{key:"getAllNeededData",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function e(t,r,n){var o=t.data,i=t.handleCardClick,u=t.handleLikeBtnClick,a=t.handleDeleteBtnClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=o.name,this._link=o.link,this._likes=o.likes,this._handleCardClick=i,this._handleLikeBtnClick=u,this._handleDeleteBtnClick=a,this._templateSelector=r,this._currentUserId=n,this._ownerUserId=o.owner._id,this._id=o._id}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card-place").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._elementLikeButton.addEventListener("click",(function(){e._handleLikeBtnClick(e._elementLikeButton,e._id)})),this._elementDeleteButton&&this._elementDeleteButton.addEventListener("click",(function(){e._handleDeleteBtnClick(e._id)})),this._elementImage.addEventListener("click",(function(){e._handleCardClick()}))}},{key:"_handleDeleteClick",value:function(){this._element.remove()}},{key:"updateCountLikesForCard",value:function(e){this._elementCountLikes.textContent=e.length}},{key:"_isShowLike",value:function(){var e=this;this._likes.forEach((function(t){t._id==e._currentUserId&&e._elementLikeButton.classList.add("card-place__like_active")}))}},{key:"_isShowDeleteBtn",value:function(){this._currentUserId!==this._ownerUserId&&this._elementDeleteButton.remove()}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementLikeButton=this._element.querySelector(".card-place__like"),this._elementCountLikes=this._element.querySelector(".card-place__like-count"),this._elementImage=this._element.querySelector(".card-place__img"),this._elementName=this._element.querySelector(".card-place__name"),this._elementDeleteButton=this._element.querySelector(".card-place__delete"),this.updateCountLikesForCard(this._likes),this._isShowDeleteBtn(),this._isShowLike(),this._setEventListeners(),this._elementCountLikes.textContent=this._likes.length,this._elementImage.src=this._link,this._elementImage.alt="Изображение ".concat(this._name),this._elementName.textContent=this._name,this._element}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var l=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=document.querySelector(r)}var t,r;return t=e,(r=[{key:"_findFormErrorElement",value:function(e){this._errorElement=this._form.querySelector(".".concat(e.id,"-error"))}},{key:"_showInputError",value:function(e){e.classList.add(this._inputErrorClass)}},{key:"_showInputErrorMessage",value:function(e){this._findFormErrorElement(e),this._errorElement.textContent=e.validationMessage,this._errorElement.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){e.classList.remove(this._inputErrorClass)}},{key:"_hideInputErrorMessage",value:function(e){this._findFormErrorElement(e),this._errorElement.classList.remove(this._errorClass),this._errorElement.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?(this._hideInputError(e),this._hideInputErrorMessage(e)):(this._showInputError(e),this._showInputErrorMessage(e))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"disableSubmitButton",value:function(){this._submitButtonElement.classList.add(this._inactiveButtonClass),this._submitButtonElement.setAttribute("disabled",!0)}},{key:"_enableSubmitButton",value:function(){this._submitButtonElement.classList.remove(this._inactiveButtonClass),this._submitButtonElement.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this._enableSubmitButton()}},{key:"_setInputsEventListeners",value:function(){var e=this;this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButtonElement=this._form.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setInputsEventListeners()}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this),this._popupCloseButton=this._popup.querySelector(".popup__close"),this._popupFormBtn=this._popup.querySelector(".popup__button-form")}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.currentTarget==e.target&&this.close()}},{key:"setButtonText",value:function(e){this._popupFormBtn.textContent=e}},{key:"setEventListeners",value:function(){var e=this;this._popupCloseButton.addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("click",this._handleOverlayClose)}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=_(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},h.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function m(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(o){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return m(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupForm=t._popup.querySelector(".popup__form"),t}return t=u,(r=[{key:"setSubmitFunc",value:function(e){this._handleFormSubmit=e}},{key:"setEventListeners",value:function(){var e=this;h(v(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit()}))}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===S(o)?o:String(o)),n)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=w(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},g.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function C(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(n);if(o){var r=O(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return C(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._handleFormSubmit=t,r._popupForm=r._popup.querySelector(".popup__form"),r._inputList=r._popupForm.querySelectorAll(".popup__input"),r}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){return t.value=e[t.name]}))}},{key:"close",value:function(){g(O(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var e=this;g(O(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}}])&&k(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===P(o)?o:String(o)),n)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=I(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},B.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function q(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(n);if(o){var r=R(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return q(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__place-image"),t._popupDescr=t._popup.querySelector(".popup__place-descr"),t}return t=u,(r=[{key:"open",value:function(e){B(R(u.prototype),"open",this).call(this),this._popupImage.src=e.link,this._popupImage.alt="Изображение ".concat(e.name),this._popupDescr.textContent=e.name}}])&&L(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==U(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===U(o)?o:String(o)),n)}var o}var A=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&x(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==F(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===F(o)?o:String(o)),n)}var o}var V=function(){function e(t){var r=t.profileNameSelector,n=t.profilePostSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(r),this._profilePost=document.querySelector(n),this._profileAvatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return this._aboutUserData={name:this._profileName.textContent,about:this._profilePost.textContent},this._aboutUserData}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profilePost.textContent=e.about,e.hasOwnProperty("avatar")&&(this._profileAvatar.src=e.avatar)}},{key:"setUserId",value:function(e){this.id=e._id}},{key:"setUserAvatar",value:function(e){this._profileAvatar.src=e.avatar}}])&&N(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),M=(document.querySelector(".popup__place-image"),document.querySelector(".popup__place-descr"),document.querySelector(".popup_type_profile")),J=document.querySelector(".popup_type_add"),H=document.querySelector(".popup_type_image"),z=document.querySelector(".info__edit-button"),$=document.querySelector(".info__add-button"),G=document.querySelector(".info__profile-avatar-wrapper"),K=(M.querySelector(".popup__close"),J.querySelector(".popup__close"),H.querySelector(".popup__close"),document.querySelector(".popup__form_edit"),document.querySelector(".popup__form_add"),M.querySelector(".popup__input_field_name"),M.querySelector(".popup__input_field_post"),J.querySelector(".popup__input_field_place-name"),J.querySelector(".popup__input_field_place-link"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-form",inactiveButtonClass:"popup__button-form_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"});function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var W=new r({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-59",headers:{authorization:"85aaf06b-bad2-4dd5-8526-2a71ddd32563","Content-Type":"application/json"}});W.getAllNeededData().then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Q(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];ne.setUserInfo(o),ne.setUserId(o),re.renderItems(i)})).catch((function(e){return console.log(e)})),new l(K,".popup__form_edit").enableValidation();var X=new l(K,".popup__form_add");X.enableValidation();var Y=new l(K,".popup__form_edit-avatar");Y.enableValidation();var Z=new D(".popup_type_image");Z.setEventListeners();var ee=new b(".popup_type_approval");function te(e){var t=new i({data:e,handleCardClick:function(){Z.open(e)},handleLikeBtnClick:function(e,r){e.classList.contains("card-place__like_active")?W.dislikeCard(r).then((function(r){e.classList.remove("card-place__like_active"),t.updateCountLikesForCard(r.likes)})).catch((function(e){return console.log(e)})):W.likeCard(r).then((function(r){e.classList.add("card-place__like_active"),t.updateCountLikesForCard(r.likes)})).catch((function(e){return console.log(e)}))},handleDeleteBtnClick:function(e){ee.setSubmitFunc((function(){ee.setButtonText("Сохранить..."),W.deleteCard(e).then((function(){t._handleDeleteClick(),ee.close()})).catch((function(e){return console.log(e)})).finally((function(){return ee.setButtonText("Да")}))})),ee.open()}},"#card-place",ne.id);return t.generateCard()}ee.setEventListeners();var re=new A({renderer:function(e){var t=te(e);re.addItem(t)}},".elements__grid-container"),ne=new V({profileNameSelector:".info__profile-name",profilePostSelector:".info__profile-post",profileAvatarSelector:".info__profile-avatar"}),oe=new j(".popup_type_add",(function(e){oe.setButtonText("Сохранить..."),W.addNewUserCard(e).then((function(e){var t=te(e);re.addItem(t)})).catch((function(e){return console.log(e)})).finally((function(){return oe.setButtonText("Создать")}))}));oe.setEventListeners();var ie=new j(".popup_type_profile",(function(e){ie.setButtonText("Сохранить..."),W.setProfileUserInfo(e).then((function(){ne.setUserInfo(e)})).catch((function(e){return console.log(e)})).finally((function(){return ie.setButtonText("Сохранить")}))}));ie.setEventListeners();var ue=new j(".popup_type_edit-avatar",(function(e){ue.setButtonText("Сохранить..."),W.changeUserAvatar(e).then((function(){ne.setUserAvatar(e)})).catch((function(e){return console.log(e)})).finally((function(){return ue.setButtonText("Сохранить")}))}));ue.setEventListeners(),G.addEventListener("click",(function(){ue.open(),Y.disableSubmitButton()})),$.addEventListener("click",(function(){oe.open(),X.disableSubmitButton()})),z.addEventListener("click",(function(){var e=ne.getUserInfo();ie.setInputValues(e),ie.open()}))})();