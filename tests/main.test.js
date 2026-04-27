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
});
