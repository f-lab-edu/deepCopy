export const deepCloneMap = <T>(target: T): T => {
  if (target instanceof Map) {
    return deepCopyMap(target, deepCloneMap) as T;
  }
  return target;
};

export const deepCopyMap = <T>(
  target: Map<any, any>,
  deepCopy: (value: T) => T
) => {
  let clone = new Map();
  //* key: key로 넣은 값 반환
  //* innerValue: key로 넣은 값의 value 반환
  target.forEach((innerValue, key) => {
    clone.set(deepCopy(key), deepCopy(innerValue));
  });
  return clone;
};
