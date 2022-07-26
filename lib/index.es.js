const o = (r) => {
  var e;
  return (e = r.parentNode) == null ? void 0 : e.removeChild(r);
}, s = (r, e) => r.some((t) => e.includes(t)), a = (r, e) => r.every((t) => e.includes(t)), f = (r) => {
  const e = localStorage.getItem(r);
  if (!e)
    return null;
  try {
    return JSON.parse(e);
  } catch (t) {
    return e;
  }
}, l = (r) => {
  if (typeof r == "string") {
    const e = f(r);
    return Array.isArray(e) ? e : (console.warn(`v-per: storage "${r}" \u4E0D\u662F\u4E00\u4E2A\u6570\u7EC4`), []);
  }
  return Array.isArray(r) ? r : typeof r == "function" ? r() : (console.warn(`v-per: ${r} \u914D\u7F6E\u7C7B\u578B\u4E0D\u6B63\u786E`), []);
}, y = (r) => (e, t) => {
  const u = l(r);
  console.log("\u{1F680} => return => store", u);
  const { value: n, modifiers: i } = t, { all: c } = i;
  if (typeof n == "string" && u.includes(n)) {
    o(e);
    return;
  }
  if (Array.isArray(n)) {
    if (!c) {
      s(n, u) && o(e);
      return;
    }
    a(n, u) && o(e);
  }
};
function v(r) {
  return {
    install(e) {
      e.directive("per", y(r));
    }
  };
}
export {
  v as default
};
