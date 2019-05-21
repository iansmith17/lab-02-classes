'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

List.prototype.shift = function() {
  let item = this.data[0];
  delete this.data[0];
  this.length--;
  return item;
}

List.prototype.unshift = function() {
  let args = arguments;
  for(let i = args.length + this.length - 1; i > -1; i--) {
    if (i > args.length - 1) {
      this.data[i] = this.data[i - args.length];
    }
    else {
      this.data[i] = args[i];
    }
  }
  this.length += args.length;
  return this.length;
}

List.prototype.forEach = function(stuff) {
  for (let i = 0; i < this.length; i++) {
    stuff(this.data[i], i);
  }
}

module.exports = List;
