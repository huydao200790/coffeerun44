(function(window) {
  'use strict';
  var FORM_PAYMENT = '[card="payment"]';
  var App = window.App;

  var FormHandler = App.FormHandler;
  var formHandler1 = new FormHandler(FORM_PAYMENT);
  formHandler1.addSubmitHandler(function(data) {});
})(window);
