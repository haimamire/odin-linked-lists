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
  })
});
