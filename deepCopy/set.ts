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

export const deepCopySet = <T>(
  target: Set<T>,
  deepCopy: (value: T) => T
): T => {
  let clone = new Set();
  target.forEach((value) => {
    if (value instanceof Object) {
      clone.add(deepCopy(value));
    } else {
      clone.add(value);
    }
  });
  return clone as T;
};
