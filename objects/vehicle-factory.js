
'use strict';

function CarFactory(name) {
  return {
    name: name,
    wheels: 4,
    drive: function() {
      return 'Moving Forward';
    },
    stop: function() {
      return 'Stopping';
    },
  }
}

function MotorcycleFactory(name) {
  return {
    name: name,
    wheels: 2,
    drive: function() {
      return 'Moving Forward';
    },
    stop: function() {
      return 'Stopping';
    },
    wheelie: function() {
      return 'Wheee!';
    }
  }
}

module.exports = {CarFactory, MotorcycleFactory};