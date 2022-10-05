/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyCard {
        "userName": string;
    }
    interface SearchWorld {
        "searchText": string;
    }
}
export interface SearchWorldCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSearchWorldElement;
}
declare global {
    interface HTMLMyCardElement extends Components.MyCard, HTMLStencilElement {
    }
    var HTMLMyCardElement: {
        prototype: HTMLMyCardElement;
        new (): HTMLMyCardElement;
    };
    interface HTMLSearchWorldElement extends Components.SearchWorld, HTMLStencilElement {
    }
    var HTMLSearchWorldElement: {
        prototype: HTMLSearchWorldElement;
        new (): HTMLSearchWorldElement;
    };
    interface HTMLElementTagNameMap {
        "my-card": HTMLMyCardElement;
        "search-world": HTMLSearchWorldElement;
    }
}
declare namespace LocalJSX {
    interface MyCard {
        "userName"?: string;
    }
    interface SearchWorld {
        "onSelectOfTab"?: (event: SearchWorldCustomEvent<string>) => void;
        "searchText"?: string;
    }
    interface IntrinsicElements {
        "my-card": MyCard;
        "search-world": SearchWorld;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-card": LocalJSX.MyCard & JSXBase.HTMLAttributes<HTMLMyCardElement>;
            "search-world": LocalJSX.SearchWorld & JSXBase.HTMLAttributes<HTMLSearchWorldElement>;
        }
    }
}
