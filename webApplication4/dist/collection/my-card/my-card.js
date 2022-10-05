import { Component, h } from '@stencil/core';
export class MyCard {
  render() {
    return (h("p", null, "My name is Stencil"));
  }
  static get is() { return "my-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["my-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["my-card.css"]
  }; }
}
