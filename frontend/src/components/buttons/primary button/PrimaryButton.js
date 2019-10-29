import BaseButton from "../BaseButton.js";

export default class PrimaryButton extends BaseButton {
  constructor(args) {
    super(args);

    this._setStyles();
  }

  _setStyles() {
    this._button.classList.add('btn', 'btn-primary', 'btn-lg', 'start');
  }

  render() {
    this._parentNode.appendChild(this._button);
  }
}