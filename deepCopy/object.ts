export const deepCloneObject = <T>(target: T): T => {
  if (typeof target !== "object" || target === null) {
    return target;
  }
  return deepCopyObject(target, deepCloneObject) as T;
};

export const deepCopyObject = <T extends Object>(
  target: T,
  deepCopy: (value: any) => T
) => {
  const clone = Object.create(Object.getPrototypeOf(target));
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      clone[key] = deepCopy(target[key]);
    }
  }
  return clone;
};
