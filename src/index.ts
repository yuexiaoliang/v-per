import type { PluginObject } from 'vue';
import { handler } from './handler';
import { KEY_NAME } from './consts';

interface Store {
  getters: {
    [key: string]: any;
  };
}

export interface Options {
  store: Store;
  getterName: string;
}

const VPer: PluginObject<Options> = {
  install(Vue, options) {
    const { store, getterName } = options as Options;

    Vue.directive('per', {
      bind: (el, binding, vnode) => {
        const { context: ctx } = vnode;

        ctx?.$watch(
          KEY_NAME,
          (val) => {
            handler(val, el, binding, vnode);
          },
          { immediate: true, deep: true }
        );
      }
    });

    Vue.mixin({
      computed: {
        [KEY_NAME]: () => store.getters[getterName]
      }
    });
  }
};

export default VPer;
