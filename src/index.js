export function LinkedList() {
  let listHead = null;
  let listTail = null;

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

    if (listTail !== null) listTail.nextNode = node;
    if (listHead === null) listHead = node;
    listTail = node;
  }

  function prepend(value) {
    const node = newNode(value);

    if (listHead !== null) node.nextNode = listHead;
    if (listTail === null) listTail = node;
    listHead = node;
  }

  function size(current = listHead) {
    let counter = 1;
    if (current.nextNode === null) return counter;

    counter += size(current.nextNode);
    return counter;
  }

  function head() {
    if (listHead === null) return;
    return listHead.value;
  }

  function tail() {
    if (listTail === null) return;
    return listTail.value;
  }

  function at(index) {
    const node = getMatchingIndex(listHead, 0, index);

    return node === undefined ? node : node.value;
  }

  function getMatchingIndex(currentNode, currentIndex, targetIndex) {
    if (currentIndex > targetIndex || currentNode === null) return;
    if (currentIndex === targetIndex) return currentNode;

    return getMatchingIndex(
      currentNode.nextNode,
      currentIndex + 1,
      targetIndex,
    );
  }

  function pop() {
    if (listHead === null) return undefined;

    const currentNode = listHead;
    listHead = currentNode.nextNode;

    return currentNode.value;
  }

  function contains(value, currentNode = listHead) {
    if (currentNode.value === value) return true;
    if (currentNode.nextNode === null) return false;

    return contains(value, currentNode.nextNode);
  }

  function findIndex(value, currentNode = listHead, currentIndex = 0) {
    if (value === currentNode.value) return currentIndex;
    if (currentNode.nextNode === null) return -1;

    return findIndex(value, currentNode.nextNode, currentIndex + 1);
  }

  function toString(currentNode = listHead) {
    if (currentNode === null) return currentNode;
    return `( ${currentNode.value} ) -> ${toString(currentNode.nextNode)}`;
  }

  function reset() {
    listHead = null;
    listTail = null;
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    findIndex,
    toString,
    reset,
  };
}
