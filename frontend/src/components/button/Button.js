const TYPES = {
  Success: 'success',
  Primary: 'prymary',
  Secondary: 'secondary'
}

export default class Button {
  constructor(text = 'Button', typeOfButton = 'default', parentNode = document.body, clickAction = () => alert("I'm Button")) {
    this._text = text;
    this._typeOfButton = typeOfButton;
    this._parentNode = parentNode;
    this._clickAction = clickAction;

    this._button = null;
    
    this._createButton();
    this._setButtonStyle();
    this._setEvent();
  }

  static get TYPES() {
    return TYPES;
  }

  _createButton() {
    const container = document.createElement('div');
    const button = document.createElement('button');

    button.innerHTML = this._text;
    container.classList.add('button-wrapper')
    container.appendChild(button);
    this._parentNode.appendChild(container);

    this._button = button;
  }

  _setButtonStyle() {
    const defaultClassList = ['btn', 'btn-lg'];

    this._button.classList.add(...defaultClassList, `btn-${this._typeOfButton}`);
  }

  _setEvent() {
    this._button.addEventListener('click', this._clickAction.bind(this));
  }
}
