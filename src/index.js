export function LinkedList() {
  let head = null;
  let tail = null;

  function newNode(val) {
    const value = val;
    let nextNode = null;

    return {
      value,
      nextNode,
    };
  }

  function append(value) {
    const node = newNode(value);

    if (tail !== null) tail.nextNode = node;
    if (head === null) head = node;

    tail = node;
  }

  return {
    append
  };
}
