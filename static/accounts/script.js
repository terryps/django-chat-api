window.onload = () => {
  var signForm = {
    init: function() {
      this.buttonSignIn = document.getElementById("sign-in");
      this.buttonSignUp = document.getElementById("sign-up");
      this.inputEmail = document.getElementById("field-email");
      this.inputPassword = document.getElementById("field-password");
      this.inputPassword2 = document.getElementById("field-repeat-password");
      this.button = document.getElementsByTagName("button")[0];

      this.bindEvents();
    },
    bindEvents: function() {
      this.switchToSignIn();
      this.buttonSignIn.addEventListener('click', this.switchToSignIn.bind(this));
      this.buttonSignUp.addEventListener('click', this.switchToSignUp.bind(this));
      this.button.addEventListener('click', this.confirmRequest.bind(this));
    },
    switchToSignIn: function() {
      this.inputEmail.value = "";
      this.inputEmail.disabled = true;
      this.inputEmail.required = false;

      this.inputPassword2.value = "";
      this.inputPassword2.disabled = true;
      this.inputPassword2.required = false;
    },
    switchToSignUp: function() {
      this.inputEmail.disabled = false;
      this.inputEmail.required = true;

      this.inputPassword2.disabled = false;
      this.inputPassword2.required = true;
    },
    confirmRequest: function() {
      if (this.buttonSignIn.checked) {this.confirmIdPwCorrect();}
      else {this.confirmPWMatched();}
    },
    confirmIdPwCorrect: function() {

    },
    confirmPWMatched: function() {
      if (this.inputPassword.value != this.inputPassword2.value) {
        this.inputPassword2.setCustomValidity("Please make sure your passwords match.");
      } else {
        this.inputPassword2.setCustomValidity("");
      }
    },
  };
  signForm.init();
}
