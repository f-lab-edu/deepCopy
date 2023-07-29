export const deepCloneObject = <T>(target: T): T => {
  if (typeof target !== "object" || target === null) {
    return target;
  }
  return deepCopyObject(target, deepCloneObject) as T;
};

export const deepCopyObject = <T>(target: T, deepCopy: (value: any) => T) => {
  //* Object.getPrototypeOf() 메서드는 지정된 객체의 프로토타입(가령 내부 [[Prototype]] 속성값)을 반환합니다.
  const clone = Object.create(Object.getPrototypeOf(target));
  for (let key in target) {
    if (target?.hasOwnProperty && target.hasOwnProperty(key)) {
      clone[key] = deepCopy(target[key]);
    }
  }
  return clone;
};
