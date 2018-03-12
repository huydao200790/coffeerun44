(function(window) {
  'use strict';
  var FORM_PAYMENT = '[card="payment"]';
  var App = window.App;

  var FormHandler = App.FormHandler;
  var formHandler1 = new FormHandler(FORM_PAYMENT);
  formHandler1.addSubmitHandler(function(data) {
    $('[manual-ajax]').click(function(event) {
  event.preventDefault();
  this.blur(); // Manually remove focus from clicked link.
  $.get(this.href, function(html) {
    $(html).appendTo('body').modal();
  });
});
  });
})(window);
