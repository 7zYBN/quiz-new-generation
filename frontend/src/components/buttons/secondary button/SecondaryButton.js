import BaseButton from "../BaseButton.js";

export default class SecondaryButton extends BaseButton {
  constructor(args) {
    super(args);

    this._setStyles();
  }

  _setStyles() {
    this._button.classList.add('btn', 'btn-secondary', 'btn-lg');
  }

  render() {
    this._parentNode.appendChild(this._button);
  }
}