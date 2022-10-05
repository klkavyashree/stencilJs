'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c8360f34.js');

/*
 Stencil Client Patch Esm v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["my-card.cjs",[[1,"my-card"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
