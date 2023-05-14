# Disjoint Set (Union Find)

## Implementation

```cpp
// Theory
int N = 1e5;
int parent[N], size[N];

void init(int n){
  for(int i=0; i<n; i++) parent[i] = i, size[i] = 1;
}

int find(int node){
  if(parent[node] == node) return node;
  return parent[node] = find(parent[node]); // path compression
}

void join(int nodeA, int nodeB){
  nodeA = find(nodeA);
  nodeB = find(nodeB);
  if(size[nodeA] > size[nodeB]) swap(nodeA, nodeB);
  parent[nodeA] = nodeB;
  size[nodeB] += size[nodeA]; // union by size
}

// Time Complexity
Without optimization - O(n)
With optimizations - O(alpha(n)) where alpha is inverse Ackermann function which grows to atmax 4
```
