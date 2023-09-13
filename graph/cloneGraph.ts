class Node {
  val: number;
  neighbors: Node[];
  constructor(val = 0, neighbors: Node[] = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

function cloneGraph(node: Node | null): Node | null {
  if (node === null) return null;

  let nodeMap: Map<Node, Node> = new Map();

  return dfs(node);

  function dfs(node: Node): Node {
    let newNode = new Node();
    newNode.val = node.val;

    nodeMap.set(node, newNode);

    node.neighbors.forEach(neighbor => {
      if (nodeMap.has(neighbor)) {
        newNode.neighbors.push(nodeMap.get(neighbor)!);
      } else {
        newNode.neighbors.push(dfs(neighbor));
      }
    });

    return newNode;
  }
}


// function cloneGraph(node: Node | null): Node | null {
//   let visited: Set<number> = new Set();

//   return dfs(node);

//   function dfs(node: Node): Node {
//     let newNode = new Node();
//     newNode.val = node.val;

//     visited.add(newNode.val);

//     node.neighbors.forEach(neighbor => {
//       if (!visited.has(newNode.val)) {
//         newNode.neighbors.push(dfs(neighbor));
//       } else {
//         let n = new Node();
//         n.val = neighbor.val;
//         newNode.neighbors.push(n);
//       }
//     })

  
//     return newNode;
//   }
// };

/*

recursively build the deep copy with DFS.

dfs(node)

  make a new node.

  set new node value == node.value.

  for each neighbor:
    node.neighbors.append(dfs(neighbor))

  return node


base case (node w/ no neighbors):

  returns itself.

how to make this not cyclical?

  at beginning of dfs call, mark node as visited?

*/