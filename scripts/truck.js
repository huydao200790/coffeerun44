(function(window) {
  'use strict';
  var App = window.App || {};

  function Truck(truckID, db) {
    this.truckID = truckID;
    this.db = db;
  }

  Truck.prototype.createOrder = function(order) {
    console.log('Adding order for' + order.emailAddress);
    this.db.add(order.emailAddress, order);
  };

  Truck.prototype.deliverOrder = function(customerID) {
    console.log('Delievering order for' + customerID);
    this.db.remove(customerID);
  };

  Truck.prototype.printOrders = function() {
    var customerIdArray = Object.keys(this.db.getAll());

    console.log('Truck #' + this.truckId + ' has peding order: ');
    customerIdArray.forEach(function(id) {
      console.log(this.db.get(id));
    }.bind(this));
  };

  App.Truck = Truck;
  window.App = App;
})(window);
