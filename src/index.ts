import { App, Directive, createApp, Plugin } from 'vue';

import { everyArray, getStorage, removeSelfElement, someArray } from './utils';
import { KEY_NAME } from './constants';

import { AnyArray, Options } from './types';

export declare type VPerOptions = Options;

const getStore = (opts: Options): AnyArray => {
  if (typeof opts === 'string') {
    const store = getStorage(opts);
    if (!Array.isArray(store)) {
      console.warn(`v-per: storage "${opts}" 不是一个数组`);
      return [];
    }
    return store;
  }

  if (Array.isArray(opts)) return opts as AnyArray;

  if (typeof opts === 'function') return opts();

  console.warn(`v-per: ${opts} 配置类型不正确`);
  return [];
};

const directive = (opt: Options): Directive => {
  return (el, binding) => {
    const store = getStore(opt);
    console.log(`🚀 => return => store`, store);
    const { value, modifiers } = binding;
    const { all } = modifiers;

    if (typeof value === 'string' && store.includes(value)) {
      removeSelfElement(el);
      return;
    }

    if (Array.isArray(value)) {
      if (!all) {
        if (someArray(value, store)) removeSelfElement(el);
        return;
      }

      if (everyArray(value, store)) removeSelfElement(el);
    }
  };
};

export default function createVPer(opts: Options): Plugin {
  return {
    install(app: App) {
      app.directive('per', directive(opts));
    }
  };
}
