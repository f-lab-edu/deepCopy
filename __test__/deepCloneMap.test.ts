import { deepCloneMap } from "../deepCopy/map";

describe("copyMapDeep deep copy Map", () => {
  test("copyMapDeep test Map", () => {
    const originalMap = new Map();
    originalMap.set("key1", { value: 1 });
    originalMap.set("key2", { value: 2 });

    const clonedMap = deepCloneMap(originalMap);
    originalMap.set("key1", { value: 10 });

    expect(originalMap.get("key1")?.value).toBe(10);
    expect(clonedMap.get("key1")?.value).toBe(1);
  });
});
