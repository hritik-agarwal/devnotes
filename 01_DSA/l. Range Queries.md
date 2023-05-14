# Segment Tree

## Implementation

```cpp
// Theory
Segment trees are trees which are used for range queries questions on arrays.
It does it by storing some value at each node and then combining values at multiple nodes to reach answer.
It has 3 main methods :-
1. build  => It converts an array into a tree based on type of queries.
2. query  => It finds the result of a given query.
3. update => It updates the tree with newer values.

There are 2 types of range queries questions
1. Range-Update Point-Query [We update a subarray and find value at a specific location in array]
2. Range-Query Point-Update [We update a specific index in array and find value over a subarray]

// Sum Range Query
class SegmentTree {

  private:

    int n;
    int *tree;

    int build(int arr[], int left, int right, int idx){
      if(left == right){
        tree[idx] = arr[left];
        return arr[left];
      }
      int mid = left + (right - left)/2;
      return tree[idx] = bulid(arr, left, mid, 2*idx+1) + build(arr, mid+1, right, 2*idx+2);
    }

    int queryUtil(int idx, int left, int right, int ql, int qr){
      if(qr<left || ql>right) return 0;
      if(ql<=left && sr<=right) return tree[idx];
      int mid = left + (right - left)/2;
      return queryUtil(2*idx+1, left, mid, ql, qr) + queryUtil(2*idx+2, mid+1, right, ql, qr);
    }

    int updateUtil(int idx, int left, int right, int i, int v){
      if(i<left || i>right) return;
      if(left == right){tree[idx] += v; return;}
      int mid = left + (right - left)/2;
      tree[idx] = updateUtil(2*idx+1, left, mid, i, v) + updateUtil(2*idx+2, mid+1, right, i, v);
    }

  public:

    SegmentTree(int arr[], int n){
      this.n = n;
      tree = new int(2*n-1);
      build(arr, 0, n-1, 0);
    }

    int query(int l, int r){
      if(l<0 || l>=n || r<0 || r>=n){cout<<"Invalid Input\n"; return;}
      return queryUtil(0, 0, n-1, l, r);
    }

    void update(int i, int v){
      if(l<0 || l>=n || r<0 || r>=n){cout<<"Invalid Input\n"; return;}
      updateUtil(0, 0, n-1, i, v);
    }
}
```
