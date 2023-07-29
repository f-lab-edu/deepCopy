import { deepCopyArray } from "./array";
import { deepCopyMap } from "./map";
import { deepCopyObject } from "./object";
import { deepCopySet } from "./set";

const deepCopy = <T>(target: T): T => {
  if (typeof target !== "object" || target === null) {
    return target;
  }

  if (Array.isArray(target)) {
    return deepCopyArray(target, deepCopy);
  }

  if (target instanceof Map) {
    return deepCopyMap(target, deepCopy) as T;
  }

  if (target instanceof Set) {
    return deepCopySet(target, deepCopy) as T;
  }

  if (typeof target === "object" && target !== null) {
    return deepCopyObject(target, deepCopy);
  }

  return target;
};

export default deepCopy;
