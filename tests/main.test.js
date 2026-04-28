import { LinkedList } from "../src";

describe("Linked List", () => {
  const list = LinkedList();

  beforeEach(() => {
    list.reset();
    list.append("a");
    list.append("b");
  });

  test("should append c to the end of the list", () => {
    list.append("c");
    expect(list.tail()).toBe("c");
  });
  test("should prepend c to the beginning of the list", () => {
    list.prepend("c");
    expect(list.head()).toBe("c");
  });
  test("should count the list", () => {
    expect(list.size()).toBe(2);

    list.append("c");
    list.prepend("c");
    expect(list.size()).toBe(4);

    list.reset();
    expect(list.size()).toBe(0);
  });
  test("should find the value of the specified index", () => {
    expect(list.at(0)).toBe("a");
    expect(list.at(1)).toBe("b");
    expect(list.at(2)).toBe(undefined);

    list.prepend("c");
    expect(list.at(2)).toBe("b");

    list.append("c");
    expect(list.at(3)).toBe("c");
  });
  test("should pop and return the head node", () => {
    expect(list.pop()).toBe("a");
    expect(list.at(0)).toBe("b");
  });
  test("should return true if the list contains a value, and false if not", () => {
    expect(list.contains("a")).toBeTruthy();
    expect(list.contains("b")).toBeTruthy();
    expect(list.contains("c")).toBeFalsy();

    list.pop();
    expect(list.contains("a")).toBeFalsy();
  });
  test("should return the correct index", () => {
    expect(list.findIndex("b")).toBe(1);
    expect(list.findIndex("c")).toBe(-1);
    expect(list.findIndex("a")).toBe(0);

    list.prepend("c");
    expect(list.findIndex("a")).toBe(1);
  });
  test("should return a string containing the elements of the list", () => {
    expect(list.toString()).toBe("( a ) -> ( b ) -> null");

    list.prepend("c");
    expect(list.toString()).toBe("( c ) -> ( a ) -> ( b ) -> null");

    list.append("c");
    expect(list.toString()).toBe("( c ) -> ( a ) -> ( b ) -> ( c ) -> null");
  });
  test("should throw an error when out of range", () => {
    expect(() => list.insertAt(3, "c", "d", "e")).toThrow();
    expect(() => list.insertAt(-1, "c", "d", "e")).toThrow();
  });
  test("should insert 3 values in the middle when the list is not empty", () => {
    list.insertAt(1, "c", "d", "e");
    expect(list.toString()).toBe(
      "( a ) -> ( c ) -> ( d ) -> ( e ) -> ( b ) -> null",
    );
  });
  test("should insert 3 values in the end when the list is not empty", () => {
    list.insertAt(2, "c", "d", "e");
    expect(list.toString()).toBe(
      "( a ) -> ( b ) -> ( c ) -> ( d ) -> ( e ) -> null",
    );
  });
  test("should insert 3 values in the beginning when the list is not empty", () => {
    list.insertAt(0, "c", "d", "e");
    expect(list.toString()).toBe(
      "( c ) -> ( d ) -> ( e ) -> ( a ) -> ( b ) -> null",
    );
    expect(list.head()).toBe("c");
    expect(list.tail()).toBe("b");
  });
  test("should insert 3 values on an empty list", () => {
    list.reset();
    list.insertAt(0, "c", "d", "e");
    expect(list.toString()).toBe("( c ) -> ( d ) -> ( e ) -> null");

    expect(list.head()).toBe("c");
    expect(list.tail()).toBe("e");
  });
});
