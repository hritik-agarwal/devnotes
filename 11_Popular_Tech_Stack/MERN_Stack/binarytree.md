- Image
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a087416e-ae45-429f-a965-fc1e2ec0f202/Untitled.png)
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a2defbf2-fe2d-46e9-86d4-e16be0b35d8c/Untitled.png)
- Traversal
  - Inorder Traversal (Recursive, Iterative & Morris)
    ```cpp
    /*
    In inorder traversal -
    1. Visit left subtree
    2. Visit root node
    3. Visit right subtree
    In given tree the order would be -> 4 2 6 5 7 1 3
    */

    vector<int> order;

    // Recursive Way - TC O(n) and SC O(1)
    void inorder(Node* root){
    	if(!root) return;
    	inorder(root->left);
    	order.push_back(root->data);
    	inorder(root->right);
    }

    // Iterative Way - TC O(n) and SC O(n)
    /*
    Algorithms
    1. If node is valid, push it in stack & go to left subtree
    2. If node is invalid, assign it to node at top of stack, visit the node, and go to right subtree of node
    */
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

    // Morris Way - TC O(n) and SC O(1)
    /*
    It uses the concept of threaded binary tree in which we connect the rightmost node of left subtree to current node so that when we finish visiting the left subtree, we directly come back to current node.

    Algorithm
    1. If there is no left subtree, visit curr node and then go to right subtree.
    2. If there is left subtree, find rightmost node in the left subtree
    	a. If rightmost node is not connected to curr node, connect it and then move curr to left subtree.
    	b. If it is already connected, then break the connection, visit the curr node and go to right subtree.

    Note: While finding right most node, also check if either node->right is null or is root.
    */
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
  - Preorder Traversal (Recursive, Iterative & Morris)
    ```cpp
    /*
    In preorder traversal -
    1. Visit root node
    2. Visit left subtree
    3. Visit right subtree
    In given tree the order would be -> 1 2 4 5 6 7 3
    */

    vector<int> order;

    // Recursive Way - TC O(n) and SC O(1)
    void preorder(Node* root){
    	if(!root) return;
    	order.push_back(root->data);
    	preorder(root->left);
    	preorder(root->right);
    }

    // Iterative Way - TC O(n) and SC O(n)
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

    // Morris Way - TC O(n) and SC O(1)
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
  - Postorder Traversal (Recursive, Iterative & Morris)
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
  - Preorder Inorder Postorder in Single Traversal
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
  - Vertical Order Traversal
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
  - Level Order Traversal (Normal & ZigZag)
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
  - Boundary Traversal
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
  - Root to Node Path Traversal
    ```cpp
    bool solve(Node* node, int target, vector<int> &ans){
        ans.push_back(node->val);
        if(node->val == target) return true;
        if(node->left && solve(node->left,target,ans)) return true;
        if(node->right && solve(node->right,target,ans)) return true;
        ans.pop_back();
        return false;
    }
    vector<int> findRootToNodePath(Node* A, int B) {
        vector<int> ans;
        solve(A,B,ans);
        return ans;
    }
    ```
- Views
  - Left
    ```cpp
    vector<int> leftView(Node *root){
       vector<int> ans;
       if(!root) return ans;
       queue<Node*> q; q.push(root);
       while(!q.empty()){
           int sz = q.size();
           ans.push_back(node->data);
           while(sz--){
               Node* node = q.front(); q.pop();
               if(node->left) q.push(node->left);
               if(node->right) q.push(node->right);
           }
       }
       return ans;
    }
    ```
  - Right
    ```cpp
    vector<int> rightView(Node *root){
       vector<int> ans;
       if(!root) return ans;
       queue<Node*> q; q.push(root);
       while(!q.empty()){
           int sz = q.size();
           ans.push_back(q.back()->data);
           while(sz--){
               Node* node = q.front(); q.pop();
               if(node->left) q.push(node->left);
               if(node->right) q.push(node->right);
           }
       }
       return ans;
    }
    ```
  - Top
    ```cpp
    map<int,pair<int,int>> mp;
    void traverse(Node*root, int row, int col){
        if(!root) return;
        if(mp.find(col) == mp.end() || row < mp[col].second)
        mp[col] = make_pair(root->data, row);
        traverse(root->left, row+1, col-1);
        traverse(root->right, row+1, col+1);
    }
    vector <int> bottomView(Node *root) {
        vector<int> ans;
        traverse(root,0,0,mp);
        for(auto p : mp)ans.push_back(p.second.first);
        return ans;
    }
    ```
  - Bottom
    ```cpp
    map<int,pair<int,int>> mp;
    void traverse(Node*root, int row, int col){
        if(!root) return;
        if(mp.find(col) == mp.end() || row >= mp[col].second)
        mp[col] = make_pair(root->data, row);
        traverse(root->left, row+1, col-1);
        traverse(root->right, row+1, col+1);
    }
    vector <int> bottomView(Node *root) {
        vector<int> ans;
        traverse(root,0,0,mp);
        for(auto p : mp)ans.push_back(p.second.first);
        return ans;
    }
    ```
- Properties
  - Height
    ```cpp
    int height(Node* root) {
        if(!root) return 0;
    		int left = height(root->left);
    		int right = height(root->right);
    		return 1 + max(left, right);
    }
    ```
  - Diameter
    ```cpp
    int ans = 0;
    int height(Node* root) {
        if(!root) return 0;
    		int left = height(root->left);
    		int right = height(root->right);
    		ans = max(ans, left+right);
    		return 1 + max(left, right);
    }
    int diameter(Node* root){
    	height(root);
    	return ans;
    }
    ```
  - Max Width
    ```cpp
    typedef long long ll;
    int widthOfBinaryTree(Node* root) {
        if(!root) return 0;
        queue<pair<Node*,ll>> q;
        q.push({root,0LL});
        ll ans = 0LL;
        while(!q.empty()){
            int sz = q.size();
            ll mini = q.front().second;
            ll start = q.front().second - mini;
            ll end = q.back().second - mini;
            ans = max(ans, end - start + 1LL);
            while(sz--){
                auto p = q.front(); q.pop();
    						ll leftIdx = 2LL * (p.second - mini) + 1LL;
    						ll rightIdx = 2LL * (p.second - mini) + 2LL;
                if(p.first->left) q.push({p.first->left, leftIdx});
                if(p.first->right) q.push({p.first->right, rightIdx});
            }
        }
        return ans;
    }
    ```
  - Max PathSum
    ```cpp
    int ans = 0;
    int height(Node* root) {
        if(!root) return 0;
    		int left = height(root->left);
    		int right = height(root->right);
    		int data = root->data;
    		int sum = max({data, data+left, data+right});
        ans = max({ans, sum, data+left+right});
        return sum;
    }
    int maxPathSum(Node* root){
    	height(root);
    	return ans;
    }
    ```
  - Is Symmetric?
    ```cpp
    bool isSame(Node* p, Node* q){
        if(!p && !q) return true;
        if(!p || !q || p->data != q->data) return false;
    		bool side1 = isSame(p->left, q->right);
    		bool side2 = isSame(p->right, q->left);
        return side1 && side2;
    }
    bool isSymmetric(Node* root) {
        if(!root) return true;
        return isSame(root->left, root->right);
    }
    ```
  - Is Height Balanced?
    ```cpp
    int height(Node* root){
        if(!root) return 0;
        int left = height(root->left);
        int right = height(root->right);
        if(left == -1 || right == -1) return -1;
        if(abs(left - right) > 1) return -1;
        return 1 + max(left, right);
    }
    bool isBalanced(Node* root) {
        return height(root) != -1;
    }
    ```
  - Is BinarySearchTree?
  - Children Sum Propery
    ```cpp
    void changeTree(Node* root, int maxValue = 0) {
        if(!root) return;
        if(root->data < maxValue) root->data = maxValue;
        maxValue = max(root->data, maxValue);
        changeTree(root->left, maxValue);
        changeTree(root->right, maxValue);
        if(!root->left && !root->right) return;
        root->data = (root->left ? root->left->data : 0) + (root->right ? root->right->data : 0);
    }
    ```
- Operations
  - Invert
    ```cpp
    void mirror(Node* node) {
        if(!node) return;
        mirror(node->left);
        mirror(node->right);
        swap(node->left, node->right);
    }
    ```
- Construct
  - From Inorder & Preorder
    ```cpp
    unordered_map<int,int> posn;
    Node* solve(vector<int>& preorder, int preLeft, int preRight, int inLeft, int inRight){
        if(preLeft > preRight || inLeft > inRight) return nullptr;
        Node* root = new Node(preorder[preLeft]);
        int idx = posn[preorder[preLeft]], numsLeft = idx - inLeft;
        root->left = solve(preorder, preLeft+1, preLeft+numsLeft, inLeft, idx-1);
        root->right = solve(preorder, preLeft+numsLeft+1, preRight, idx+1, inRight);
        return root;
    }
    Node* buildTree(vector<int>& preorder, vector<int>& inorder) {
        int n = preorder.size(); posn.clear();
        for(int i=0; i<n; i++) posn[inorder[i]] = i;
        return solve(preorder,0,n-1,0,n-1);
    }
    ```
  - From Inorder & Postorder
    ```cpp
    unordered_map<int,int> posn;
    Node* solve(vector<int>& postorder, int postLeft, int postRight, int inLeft, int inRight){
        if(postLeft > postRight || inLeft > inRight) return nullptr;
        Node* root = new Node(postorder[postRight]);
        int idx = posn[postorder[postRight]], numsRight = inRight - idx;
        root->right = solve(postorder, postRight-numsRight, postRight-1, idx+1, inRight);
        root->left = solve(postorder, postLeft, postRight-numsRight-1, inLeft, idx-1);
        return root;
    }
    Node* buildTree(vector<int>& inorder, vector<int>& postorder) {
        int n = postorder.size(); posn.clear();
        for(int i=0; i<n; i++) posn[inorder[i]] = i;
        return solve(postorder,0,n-1,0,n-1);
    }
    ```
- Convert
  - To Linked List
    ```cpp
    Node* prevNode = nullptr;
    void flatten(Node* currNode) {
        if(!currNode) return;
        // update previous node pointers & set it to current pointer
        if(prevNode){
            prevNode->right = currNode;
            prevNode->left = nullptr;
        }
        prevNode = currNode;
        // update left & right subtree of currNode
        // Since currNode right will be updated in next call, we keep a reference to it
        Node* currNodeRight = currNode->right;
        flatten(currNode->left);
        flatten(currNodeRight);
    }
    ```
  - To Double Linked List
    Node *startNode, *prevNode;

void convert(Node\* currNode){
if(!currNode) return;
convert(currNode->left);
if(prevNode){
prevNode->right = currNode;
currNode->left = prevNode;
}
prevNode = currNode;
if(!startNode) startNode = prevNode;
convert(currNode->right);
}

// startNode stores the beginning of linked list
