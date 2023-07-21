import { deepCopyObject } from "./object";

export const deepCloneSet = <T>(target: T): T => {
  if (target instanceof Set) {
    return deepCopySet(target, deepCloneSet);
  }

  if (typeof target === "object" && target !== null) {
    return deepCopyObject(target, deepCloneSet);
  }

  return target;
};

export const deepCopySet = <T, V extends T>(
  target: Set<V>,
  deepCopy: (value: T) => T
): T => {
  let clone = new Set();
  target.forEach((value) => {
    clone.add(deepCopy(value));
  });
  return clone as T;
};
