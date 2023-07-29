export const deepCloneArray = (target: any): any => {
  if (Array.isArray(target)) {
    return deepCopyArray(target, deepCloneArray);
  }
  return target;
};

export const deepCopyArray = <T extends Array<T>>(
  target: T,
  deepCopy: (value: T) => T
): any => {
  let clone: T[] = [];
  target.forEach((value) => {
    clone.push(deepCopy(value));
  });
  return clone;
};
