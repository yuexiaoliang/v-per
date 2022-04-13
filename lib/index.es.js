function handler(userPermissions, el, binding, vnode) {
  const { value: permissions } = binding;
  const ctx = vnode.context;
  if (!permissions)
    return;
  let isPermissioned;
  if (typeof permissions === "string") {
    isPermissioned = userPermissions.includes(permissions);
  }
  if (Array.isArray(permissions)) {
    isPermissioned = userPermissions.filter((item) => permissions.includes(item)).length > 0;
  }
  if (!isPermissioned) {
    ctx == null ? void 0 : ctx.$nextTick(() => {
      var _a;
      (_a = el.parentNode) == null ? void 0 : _a.removeChild(el);
    });
  }
}
const KEY_NAME = "__v_per_permissions__";
const VPer = {
  install(Vue, options) {
    const { store, getterName } = options;
    Vue.directive("per", {
      bind: (el, binding, vnode) => {
        const { context: ctx } = vnode;
        ctx == null ? void 0 : ctx.$watch(KEY_NAME, (val) => {
          handler(val, el, binding, vnode);
        }, { immediate: true, deep: true });
      }
    });
    Vue.mixin({
      computed: {
        [KEY_NAME]: () => store.getters[getterName]
      }
    });
  }
};
export { VPer as default };
