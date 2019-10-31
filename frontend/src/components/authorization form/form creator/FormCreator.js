import Button from "../../button/Button.js";

export default class FormCreator {
  constructor(parent = document.body, formType = 'Sign In') {
    this._parent = parent;
    this._formType = formType;
    
    this._event = null;
    this._elements = {};

    this._buildForm();
  }

  _buildForm() {
    (this._formType === 'Sign Up') ? this._buildSignUpForm() : this._buildSignInForm();
    
    this._elements.password = this._buildField('Password', 'password');

    new Button(this._formType, 'success', this._parent, this._event);
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

  _buildField(labelText = 'Text', typeofFiled = 'text', parent = this._parent) {
    const label = document.createElement('label');
    const input = document.createElement('input');

    input.setAttribute('id', `${labelText.toLowerCase()}-input`);
    input.setAttribute('type', typeofFiled);
    label.innerHTML = labelText;
    label.setAttribute('for', input.id);
    parent.appendChild(label);
    parent.appendChild(input);

    return {label, input};
  }
}
