const deepCopy = (target) => {
  if (Array.isArray(target)) {
    let clone = [];
    target.forEach((value) => {
      clone.push(deepCopy(value));
    });
    return clone;
  }

  if (target instanceof Map) {
    let clone = new Map();
    target.forEach((innerValue, key) => {
      clone.set(deepCopy(key), deepCopy(innerValue));
    });
    return clone;
  }

  if (target instanceof Set) {
    let clone = new Set();
    target.forEach((value) => {
      clone.add(deepCopy(value));
    });
    return clone;
  }

  if (typeof target === 'object') {
    let clone = Object.create(Object.getPrototypeOf(target));
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        clone[key] = deepCopy(target[key]);
      }
    }
    return clone;
  }

  return target;
};

export default deepCopy;
