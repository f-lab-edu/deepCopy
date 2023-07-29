import deepCopy from "../deepCopy";

describe("deepClone test", () => {
  test("Array test", () => {
    const originalArray = [1, 2, 3];
    const clonedArray = deepCopy(originalArray);
    originalArray[0] = 10;
    expect(originalArray[0]).toBe(10);
    expect(clonedArray[0]).toBe(1);
  });

  test("Map test", () => {
    const originalMap: Map<"key1" | "key2", { value: number }> = new Map();
    originalMap.set("key1", { value: 1 });
    originalMap.set("key2", { value: 2 });

    const clonedMap = deepCopy(originalMap);
    originalMap.set("key1", { value: 10 });

    expect(originalMap.get("key1")?.value).toBe(10);
    expect(clonedMap.get("key1")?.value).toBe(1);
  });

  test("Set test", () => {
    const originalSet: Set<{ data: number }> = new Set();
    originalSet.add({ data: 1 });
    originalSet.add({ data: 2 });

    const clonedSet: Set<{ data: number }> = deepCopy(originalSet);
    originalSet.forEach((item) => (item.data = 10));

    expect(originalSet.values().next().value.data).toBe(10);
    expect(clonedSet.values().next().value.data).toBe(1);
  });

  test("Object test", () => {
    const originalObject = {
      a: 1,
      b: 2,
      c: 3,
    };

    const clonedObject = deepCopy(originalObject);
    originalObject.a = 10;
    expect(originalObject.a).toBe(10);
    expect(clonedObject.a).toBe(1);
  });
});
