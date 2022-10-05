import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const myCardCss = "";

const MyCard$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("p", null, "My name is Stencil"));
  }
  static get style() { return myCardCss; }
}, [1, "my-card"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-card"];
  components.forEach(tagName => { switch (tagName) {
    case "my-card":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyCard$1);
      }
      break;
  } });
}

const MyCard = MyCard$1;
const defineCustomElement = defineCustomElement$1;

export { MyCard, defineCustomElement };
