'use strict';

// These 2 should be interchangeable!
const List = require('../list.js');
//const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('Removes the first item in the list and returns the removed item', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    let item = stuff.shift();
    expect(item).toEqual('a');
    expect(stuff.length).toEqual(1);
  });

  it('Adds provided elements to the beginning of the list and returns the new length of the list', () => {
    let stuff = new List();
    stuff.push(1);
    stuff.push(2);
    stuff.push(3);
    let result = stuff.unshift(4);
    expect(result).toEqual(4);
    expect(stuff.data).toEqual({"0": 4, "1": 1, "2": 2, "3": 3});
  })

  it('Executes the provided function for each item in the list', () => {
    let stuff = new List();
    stuff.push(1);
    stuff.push(2);
    stuff.push(3);
    stuff.forEach(function(item, i) {
      stuff.data[i]++
    });
    expect(stuff.data).toEqual({"0": 2, "1": 3, "2": 4})
  })
});
