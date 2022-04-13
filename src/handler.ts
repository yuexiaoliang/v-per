import { VNode } from 'vue';
import { DirectiveBinding } from 'vue/types/options';

export function handler(
  userPermissions: string[],
  el: HTMLElement,
  binding: DirectiveBinding,
  vnode: VNode
) {
  const { value: permissions } = binding;
  const ctx = vnode.context;

  // 没有限制则不处理
  if (!permissions) return;

  // 是否有权限 -> true: 有权限 false: 无权限
  let isPermissioned
  if (typeof permissions === 'string') {
    isPermissioned = userPermissions.includes(permissions);
  }
  if (Array.isArray(permissions)) {
    isPermissioned = userPermissions.filter((item) => permissions.includes(item)).length > 0;
  }

  if (!isPermissioned) {
    ctx?.$nextTick(() => {
      el.parentNode?.removeChild(el);
    });
  }
}
