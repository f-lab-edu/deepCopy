import { deepCloneArray } from "../deepCopy/array";

describe("copyArrayDeep deep copy array", () => {
  test("copyArrayDeep test number array", () => {
    const arrNumber = [1, 2, 3];
    const clonedArrNumber = deepCloneArray(arrNumber);
    arrNumber[0] = 10;
    expect(arrNumber[0]).toBe(10);
    expect(clonedArrNumber[0]).toBe(1);
  });

  test("copyArrayDeep test string array", () => {
    const arrString = ["a", "b", "c"];
    const clonedArrString = deepCloneArray(arrString);
    arrString[0] = "d";
    expect(arrString[0]).toBe("d");
    expect(clonedArrString[0]).toBe("a");
  });

  test("copyArrayDeep test object array", () => {
    const arrObject = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const clonedArrObject = deepCloneArray(arrObject);
    arrObject[0] = { a: 3 };
    expect(arrObject[0]).toEqual({ a: 3 });
    expect(clonedArrObject[0]).toEqual({ a: 1 });
  });

  test("copyArrayDeep test boolean array", () => {
    const arrBoolean = [true, false, true];
    const clonedArrBoolean = deepCloneArray(arrBoolean);
    arrBoolean[0] = false;
    expect(arrBoolean[0]).toEqual(false);
    expect(clonedArrBoolean[0]).toEqual(true);
  });
});
