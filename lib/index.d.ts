import type { PluginObject } from 'vue';
interface Store {
    getters: {
        [key: string]: any;
    };
}
export interface Options {
    store: Store;
    getterName: string;
}
declare const VPer: PluginObject<Options>;
export default VPer;
