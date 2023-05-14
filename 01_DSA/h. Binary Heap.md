# Binary Heap

## Implementation

```cpp
// Theory
A binary heap is a complete binary tree and follows a heap property.

Based on that there are 2 types of binary heap :-
1. Min Heap (a parent node is always larger than or equal to its children nodes.)
2. Max Heap (a parent node is always smaller than or equal to its children nodes.)

It has height of log(n) for n nodes and hence all operations in heap takes log(n) time.
It can be constructed using array to store the nodes in a level order fashion.

For a node at position i
- parent = (i-1)/2
- left child = 2*i + 1
- right child = 2*i + 2

There are 3 main operations
1. Push => Inserts an element in heap and reorganizes it to follow heap property.
2. Top  => Returns the top element of the heap
3. Pop  => Removes the top element of heap and reorganizes it to follow heap property.

// Max Heap Implementaion //
class MaxHeap {

  private:

    int size, capacity;
    int *heap;
    int parent(int node){return (node-1)/2;}
    int leftChild(int node){return 2*node + 1;}
    int rightChild(int node){return 2*node + 2;}

  public:

    MaxHeap(int n){
      size = 0; capacity = n; heap = new int(n);
    }

    void push(int value){
      if(size == capacity){ cout << "Heap is full!\n"; return;}
      heap[size] = value; size++;
      int idx = size - 1;
      while(idx>0 && heap[idx] > heap[parent(idx)]){
        swap(heap[idx], heap[par]);
        idx = parent(idx);
      }
    }

    void pop(){
      if(size == 0){cout << "Heap is empty!\n"; return;}
      swap(heap[0], heap[size-1]); --size;
      int idx = 0;
      while(true){
        int largest = idx;
        int left = leftChild(idx);
        int right = rightChild(idx);
        if(left < size && heap[left] > heap[largest]) largest = left;
        if(right < size && heap[right] > heap[largest]) largest = right;
        if(largest != idx){
          swap(heap[idx], heap[largest]);
          idx = largest;
        } else break;
      }
    }

    int top(){
      if(size == 0){cout << "Heap is empty!\n"; return;}
      return heap[0];
    }

    bool empty(){
    	return (size == 0);
    }

    int heapSize(){
      return size;
    }
};

```
