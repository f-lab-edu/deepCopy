export const deepCloneMap = <T>(target: T): T => {
  if (target instanceof Map) {
    return deepCopyMap(target, deepCloneMap) as T;
  }
  return target;
};

export const deepCopyMap = <T, K extends T, V extends T>(
  target: Map<K, V>,
  deepCopy: (value: T) => T
) => {
  let clone = new Map();
  target.forEach((innerValue, key) => {
    clone.set(deepCopy(key), deepCopy(innerValue));
  });
  return clone;
};
