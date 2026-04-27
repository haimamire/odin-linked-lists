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

  function head() {
    if (listHead === null) return;
    return listHead.value;
  }

  function tail() {
    if (listTail === null) return;
    return listTail.value;
  }

  function reset() {
    listHead = null;
    listTail = null;
  }

  return {
    append,
    prepend,
    head,
    tail,
    reset,
  };
}
