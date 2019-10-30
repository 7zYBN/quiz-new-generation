import SuccessButton from "../../buttons/success button/SuccessButton.js";

export default class FormCreator {
  constructor({parent, formType}) {
    this._parent = parent;
    this._formType = formType;
    this._event = null;

    this._elements = {};

    this._buildForm();
  }

  _buildForm() {

    (this._formType === 'Sign Up') ? this._buildSignUpForm() : this._buildSignInForm();
    
    this._elements.password = this._buildField('Password', 'password');

    new SuccessButton({text: this._formType, clickHeandle: this._event, parentNode: this._parent}).render();
  }

  _buildSignInForm() {
    this._elements.login = this._buildField('Username or Email');
    this._event = () => alert('Sign In clicked');
  }

  _buildSignUpForm() {
    this._elements.login = this._buildField('Username');
    this._elements.email = this._buildField('Email');
    this._event = () => alert('Sign Up clicked');
  }

  _buildField(labelText = 'Text', typeofFiled = 'text', parent = this._parent || document.body) {
    const container = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    container.classList.add('field-container')

    input.setAttribute('id', `${labelText.toLowerCase()}-input`);
    input.setAttribute('type', typeofFiled);
    label.innerHTML = labelText;
    label.setAttribute('for', input.id);
    container.appendChild(label);
    container.appendChild(input);
    parent.appendChild(container);

    return {label, input};
  }
}