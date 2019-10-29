export default class BaseButton {
  constructor({text = 'Button', clickHeandle = () => alert("I'm Button"), parentNode = document.body}) {

    this._text = text;
    this._clickHeandle = clickHeandle;
    this._parentNode = parentNode;

    this._button = this._createButton();
    this._setClickEvent();
  }

  _createButton() {
    const button = document.createElement('button');

    button.innerHTML = this._text;

    return button;
  }

  _setClickEvent() {
    this._button.addEventListener('click', this._clickHeandle.bind(this));
  }
}