import FormCreator from "./form creator/FormCreator.js";

export default class AuthorizationTemplate {
  constructor({parent = document.body}) {
    this._parent = parent;

    this._elements = {};

    this._state = null; //Sign In

    this._buildForm();
    
    this._setEvent();
  }

  _buildForm() {
    this._buildWrapper();
    this._buildFormToggle();
    this._createFormContainer();
    this._state = this._elements.signInToggle.innerHTML;

    new FormCreator({parent: this._elements.formContainer, formType: this._state});
  }

  _buildWrapper() {
    const wrapper = document.createElement('div');

    wrapper.classList.add('wrapper');
    this._parent.appendChild(wrapper);

    this._elements.wrapper = wrapper;
  }

  _buildFormToggle() {
    const toggleContainer = document.createElement('div');

    toggleContainer.classList.add('toggle-container');
    this._elements.wrapper.appendChild(toggleContainer);

    this._elements.toggleContainer = toggleContainer;
    
    this._createSignInToggle();
    this._createSignUpToggle();
  }

  _createSignInToggle() {
    const signInToggle = document.createElement('div');

    signInToggle.classList.add('sign-in-toggle');
    signInToggle.innerHTML = 'Sign In';
    this._elements.toggleContainer.appendChild(signInToggle);

    this._elements.signInToggle = signInToggle;
  }

  _createSignUpToggle() {
    
    const signUpToggle = document.createElement('div');

    signUpToggle.classList.add('sign-up-toggle', 'not-selected');
    signUpToggle.innerHTML = 'Sign Up';
    this._elements.toggleContainer.appendChild(signUpToggle);

    this._elements.signUpToggle = signUpToggle;
  }

  _createFormContainer() {
    const form = document.createElement('div');

    form.classList.add('form-container');
    this._elements.wrapper.appendChild(form);

    this._elements.formContainer = form;
  }

  _setEvent() {
    this._elements.toggleContainer.addEventListener('click', this._clickHandle.bind(this));
  }

  _clickHandle(event) {
    if (event.target.innerHTML !== this._state) {
      this._changeState(event.target.innerHTML);
    }
  }

  _changeState(newState) {
    this._elements.formContainer.innerHTML = '';
    this._elements.signInToggle.classList.toggle('not-selected');
    this._elements.signUpToggle.classList.toggle('not-selected');

    new FormCreator({parent: this._elements.formContainer, formType: newState});

    this._state = newState;
  }
}