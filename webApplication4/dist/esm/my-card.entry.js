import { r as registerInstance, h } from './index-e41f6d52.js';

const myCardCss = "";

const MyCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("p", null, "My name is Stencil"));
  }
};
MyCard.style = myCardCss;

export { MyCard as my_card };
