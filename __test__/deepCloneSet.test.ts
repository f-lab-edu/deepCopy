import { deepCloneSet } from "../deepCopy/set";

describe("copySetDeep deep copy Set", () => {
  test("copySetDeep test Set", () => {
    const originalSet = new Set<{ value: number }>();
    originalSet.add({ value: 1 });
    originalSet.add({ value: 2 });

    const clonedSet = deepCloneSet(originalSet);
    originalSet.forEach((item) => (item.value = 10));

    expect(originalSet.values().next().value.value).toBe(10);
    expect(clonedSet.values().next().value.value).toBe(1);
  });
});
