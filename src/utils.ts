import { AnyArray } from './types';

export const removeSelfElement = (el: Element) => el.parentNode?.removeChild(el);

export const someArray = (arr1: AnyArray, arr2: AnyArray) => arr1.some((item) => arr2.includes(item));

export const everyArray = (arr1: AnyArray, arr2: AnyArray) => arr1.every((item) => arr2.includes(item));

export const getStorage = (key: string) => {
  const val = localStorage.getItem(key);
  if (!val) return null;

  try {
    return JSON.parse(val);
  } catch (error) {
    return val;
  }
};
