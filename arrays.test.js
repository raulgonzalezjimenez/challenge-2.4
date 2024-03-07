import { map, filter, find, findIndex, join, some } from "./arrays.js";

describe("map", () => {
  test("should return [] when arguments are [] and (element) => element * 2", () => {
    const x = [];
    const y = (element) => element * 2;
    const expected = [];
    const r = map(x, y);
    expect(r).toStrictEqual(expected);
  });

  test("should return [4,8,12] when arguments are [2, 4, 6] and (element) => element * 2", () => {
    const x = [2, 4, 6];
    const y = (element) => element * 2;
    const expected = [4, 8, 12];
    const r = map(x, y);
    expect(r).toStrictEqual(expected);
  });
});

describe("filter", () => {
  test("should return [] when arguments are [] and (element) => element === 2", () => {
    const x = [];
    const y = (element) => element === 2;
    const expected = [];
    const r = filter(x, y);
    expect(r).toStrictEqual(expected);
  });

  test("should return [8] when arguments are [4, 8, 2, 1] and (element) => element % 2 === 0", () => {
    const x = [4, 8, 2, 1];
    const y = (element) => element % 2 === 0;
    const expected = [4, 8, 2];
    const r = filter(x, y);
    expect(r).toStrictEqual(expected);
  });
});

describe("find", () => {
  test("should return 'perro' when arguments are [] and (element) => element === 2", () => {
    const x = [4, "perro", 2];
    const y = (element) => element === "perro";
    const expected = "perro";
    const r = find(x, y);
    expect(r).toBe(expected);
  });

  test("should return undefined when arguments are [6, 'paloma', undefined] and (element) => element === 8", () => {
    const x = [6, "paloma", undefined];
    const y = (element) => element === undefined;
    const expected = undefined;
    const r = find(x, y);
    expect(r).toBe(expected);
  });
});

describe("findIndex", () => {
  test("should return -1 when arguments are [4, 'gorro', 'pato'] and 'coche'", () => {
    const x = [4, "gorro", "pato"];
    const y = (element) => element === "perro";
    const expected = -1;
    const r = findIndex(x, y);
    expect(r).toBe(expected);
  });

  test("should return undefined when arguments are [6, 'paloma', 5, undefined] and (element) => element === 5", () => {
    const x = [6, "paloma", 5, undefined];
    const y = (element) => element === 5;
    const expected = 2;
    const r = findIndex(x, y);
    expect(r).toBe(expected);
  });
});

describe("join", () => {
  test("should return '4,gorro,pato' when the only argument is [4, 'gorro', 'pato']", () => {
    const x = [4, "gorro", "pato"];
    const expected = "4,gorro,pato";
    const r = join(x);
    expect(r).toStrictEqual(expected);
  });

  test("should return '6 - paloma - 5 - undefined' when arguments are [6, 'paloma', 5, undefined] and ' - ", () => {
    const x = [6, "paloma", 5, undefined];
    const y = " - ";
    const expected = "6 - paloma - 5 - undefined";
    const r = join(x, y);
    expect(r).toBe(expected);
  });

  test("should return 'perro , 0, undefined, 2' when arguments are ['perro', 0, undefined, 2] and ', ", () => {
    const x = ["perro", 0, undefined, 2];
    const y = ", ";
    const expected = "perro, 0, undefined, 2";
    const r = join(x, y);
    expect(r).toBe(expected);
  });
});

describe("some", () => {
  test("should return false when arguments are [] and (element) => element / 2 === 2", () => {
    const x = [];
    const y = (element) => element / 2 === 2;
    const expected = false;
    const r = some(x, y);
    expect(r).toBe(expected);
  });

  test("should return true when arguments are [3, 5, 8, 1] and (element) => element % 2 === 0", () => {
    const x = [3, 5, 8, 1];
    const y = (element) => element % 2 === 0;
    const expected = true;
    const r = some(x, y);
    expect(r).toBe(expected);
  });
});
