import { p as promiseResolve, b as bootstrapLazy } from './index-e41f6d52.js';

/*
 Stencil Client Patch Esm v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["my-card",[[1,"my-card"]]]], options);
  });
};

export { defineCustomElements };
