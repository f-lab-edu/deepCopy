export const deepCloneArray = (target: any): any => {
  if (Array.isArray(target)) {
    return deepCopyArray(target, deepCloneArray);
  }
  return target;
};

export const deepCopyArray = <T>(
  target: any,
  deepCopy: (value: T) => T
): any => {
  let clone = [];
  for (let i = 0; i < target.length; i++) {
    clone[i] = deepCopy(target[i]);
  }
  return clone;
};
