import { LinkedList } from "../src";

const list = LinkedList();

describe("Linked List", () => {
  test("should append 3 nodes in the correct order", () => {
    list.append("a");
    list.append("b");
    list.append("c");
  })
})