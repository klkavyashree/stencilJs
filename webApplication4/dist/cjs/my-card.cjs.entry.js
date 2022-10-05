'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c8360f34.js');

const myCardCss = "";

const MyCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("p", null, "My name is Stencil"));
  }
};
MyCard.style = myCardCss;

exports.my_card = MyCard;
