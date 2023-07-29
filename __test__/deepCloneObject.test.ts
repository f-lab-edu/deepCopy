import { deepCloneObject } from "../deepCopy/object";

describe("copyObjectDeep deep copy object", () => {
  test("copyObjectDeep test object of number value", () => {
    const objNumber = { a: 1, b: 2, c: 3 };
    const clonedObjNumber = deepCloneObject(objNumber);
    objNumber.a = 10;
    expect(objNumber.a).toBe(10);
    expect(clonedObjNumber.a).toBe(1);
  });

  test("copyObjectDeep test object of string value", () => {
    const objString = { a: "a", b: "b", c: "c" };
    const clonedObjString = deepCloneObject(objString);
    objString.a = "d";
    expect(objString.a).toBe("d");
    expect(clonedObjString.a).toBe("a");
  });
});
