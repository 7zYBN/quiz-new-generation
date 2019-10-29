import BaseButton from "../BaseButton.js";

export default class SuccessButton extends BaseButton {
  constructor(args) {
    super(args);

    this._setStyles();
  }

  _setStyles() {
    this._button.classList.add('btn', 'btn-success', 'btn-lg', 'start');
  }

  render() {
    this._parentNode.appendChild(this._button);
  }
}