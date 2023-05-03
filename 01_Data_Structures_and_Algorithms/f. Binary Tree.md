# Binary Tree

## Traversal

<details>
<summary>Inorder Traversal</summary>

1. Recursive TC O(n) and SC O(1) [left, root, right]

```cpp
vector<int> order;
void inorder(Node* root){
	if(!root) return;
	inorder(root->left);
	order.push_back(root->data);
	inorder(root->right);
}
```

2. Iterative TC O(n) and SC O(n)

```cpp
void inorder(Node* root){
	stack<Node*> st;
	Node* node = root;
	while(true){
		if(node){
			st.push(node):
			node = node->left;
		} else{
			if(st.empty()) break;
			node = st.top(); st.pop();
			order.push_back(node->data);
			node = node->right;
		}
	}
}
```

3. Morris TC O(n) and SC O(1)

```cpp
void inorder(Node* root){
	Node* node = root;
	while(true){
		if(!node) break;
		else if(!node->left){
			order.push_back(node->data);
			node = node->right;
		} else{
			Node* temp = node->left;
			while(true){
				if(!temp->right || temp->right == node) break;
				temp = temp->right;
			}
			if(!temp->right){
				temp->right = node;
				node = node->left;
			} else{
				temp->right = nullptr;
				order.push_back(node->data);
				node = node->right;
			}
		}
	}
}
```

</details>

<details>
<summary>Preorder Traversal</summary>
1. Recursive TC O(n) and SC O(1) [left, root, right]

```cpp
vector<int> order;
void preorder(Node* root){
	if(!root) return;
	order.push_back(root->data);
	preorder(root->left);
	preorder(root->right);
}
```

2. Iterative TC O(n) and SC O(n)

```cpp
void preorder(Node* root){
	stack<Node*> st;
	Node* node = root;
	while(true){
		if(node){
			order.push_back(node->data);
			st.push(node);
			node = node->left;
		} else{
			if(st.empty()) break;
			node = st.top(); st.pop();
			node = node->right;
		}
	}
}
```

3. Morris TC O(n) and SC O(1)

```cpp
void preorder(Node* root){
	Node* node = root;
	while(true){
		if(!node) break;
		else if(!node->left){
			order.push_back(node->data);
			node = node->right;
		} else{
			Node* temp = node->left;
			while(true){
				if(!temp->right || temp->right == node) break;
				temp = temp->right;
			}
			if(!temp->right){
				temp->right = node;
				order.push_back(node->data);
				node = node->left;
			} else{
				temp->right = nullptr;
				node = node->right;
			}
		}
	}
}
```

</details>

### Postorder Traversal (Recursive, Iterative & Morris)

```cpp
/*
In postorder traversal -
1. Visit left subtree
2. Visit right subtree
3. Visit root node
In given tree the order would be -> 4 6 7 5 2 3 1
*/

vector<int> order;

// Recursive Way - TC O(n) and SC O(1)
void postorder(Node* root){
	if(!root) return;
	postorder(root->left);
	postorder(root->right);
	order.push_back(root->data);
}

// Iterative Way - TC O(n) and SC O(n)
void postorder(Node* root){
	stack<pair<Node*,int>> st;
	Node* node = root;
	while(true){
		if(node){
			st.push({node,1});
			node = node->left;
		} else{
			if(st.empty()) break;
			auto p = st.top(); st.pop();
			node = p.first;
			if(p.second == 1){
				st.push({p.first,2});
				node = node->right;
			} else{
				order.push_back(node->data);
				node = nullptr;
			}
		}
	}
}

// Morris Way - TC O(n) and SC O(1)
/*
The idea is to find the order - Root, Right, Left and then reverse the answer.
*/
void postorder(Node* root){
	Node* node = root;
	while(true){
		if(!node) break;
		else if(!node->right){
			order.push_back(node->data);
			node = node->left;
		} else{
			Node* temp = node->right;
			while(temp->left && temp->left!=node){
				temp = temp->left;
			}
			if(!temp->left){
				temp->left = node;
				order.push_back(node->data);
				node = node->right;
			} else{
				temp->left = nullptr;
				node = node->left;
			}
		}
	}
	reverse(order.begin(), order.end());
}
```

### Preorder Inorder Postorder in Single Traversal

```cpp
// Iterative Way - TC O(n) and SC O(n)
vector<int> preorder, inorder, postorder;
void allorder(Node* root){
  if(!root) return;
  stack<pair<TreeNode*,int>> st;
  st.push({root,1});
  while(!st.empty()){
      auto p = st.top(); st.pop();
      if(p.second == 1){
          preorder.push_back(p.first->val);
          st.push({p.first,2});
          if(p.first->left) st.push({p.first->left, 1});
      } else if(p.second == 2){
          inorder.push_back(p.first->val);
          st.push({p.first,3});
          if(p.first->right) st.push({p.first->right, 1});
      } else{
          postorder.push_back(p.first->val);
      }
  }
}
```

### Vertical Order Traversal

```cpp
map<int,map<int,multiset<int>>> mp;

void traverse(TreeNode* root, int row, int col){
    if(!root) return;
    mp[col][row].push_back(root->val);
    traverse(root->left, row+1, col-1);
    traverse(root->right, row+1, col+1);
}

vector<vector<int>> verticalTraversal(TreeNode* root) {
    vector<vector<int>> ans;
    traverse(root,0,0);
    for(auto c : mp){
        vector<int> temp;
        for(auto r : c.second){
            for(auto n : r.second) temp.push_back(n);
        }
        ans.push_back(temp);
    }
    return ans;
}
```

### Level Order Traversal (Normal & ZigZag)

```cpp
// Normal
vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> ans;
    if(!root) return ans;
    queue<TreeNode*> q; q.push(root);
    while(!q.empty()){
        int sz = q.size();
        vector<int> temp;
        while(sz--){
            auto node = q.front(); q.pop();
            temp.push_back(node->val);
            if(node->left) q.push(node->left);
            if(node->right) q.push(node->right);
        }
        ans.push_back(temp);
    }
    return ans;
}

// ZigZag
vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> ans;
    if(!root) return ans;
		bool leftToRight = true;
    queue<TreeNode*> q; q.push(root);
    while(!q.empty()){
        int sz = q.size();
        vector<int> temp;
        while(sz--){
            auto node = q.front(); q.pop();
            temp.push_back(node->val);
            if(node->left) q.push(node->left);
            if(node->right) q.push(node->right);
        }
				if(!leftToRight) reverse(temp.begin(), temp.end());
				leftToRight = !leftToRight;
        ans.push_back(temp);
    }
    return ans;
}
```

### Boundary Traversal

```cpp
void addLeft(Node*root, vector<int>&left){
    if(!root) return;
    if(root->left){
        left.push_back(root->data);
        addLeft(root->left, left);
    } else if(root->right){
        left.push_back(root->data);
        addLeft(root->right, left);
    }
}
void addRight(Node*root, vector<int>&right){
    if(!root) return;
    if(root->right){
        addRight(root->right, right);
        right.push_back(root->data);
    } else if(root->left){
        addRight(root->left, right);
        right.push_back(root->data);
    }
}
void addBottom(Node*root, vector<int>&leaf){
    if(!root) return;
    addBottom(root->left, leaf);
    if(!root->left && !root->right)
		leaf.push_back(root->data);
    addBottom(root->right, leaf);
}

vector <int> boundary(Node *root){
    vector<int> ans;
    if(!root) return ans;
    ans.push_back(root->data);
    addLeft(root->left, ans);
    if(root->left || root->right) addBottom(root, ans);
    addRight(root->right, ans);
    return ans;
}
```

### Root to Node Path Traversal

## Views

## Properties

## Operations

## Construct

## Convert
