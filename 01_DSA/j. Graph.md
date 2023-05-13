## Basic definitions before moving on :-

1. Graph: _A graph is a set of nodes and edges._
2. Undirected Graph: _A graph in which edges are bidrectional._
3. Directed Graph: _A graph in which edges are unidirectional._
4. Unweighted Graph: _A graph in which edges do not have any weight._
5. Weighted Graph: _A graph in which edges do have weights._
6. Transpose Graph: _A graph in which edges are reversed of the original graph._
7. Condensation Graph: _A graph in which each node is a strongly connected component in the original graph._
8. Bipartite Graph: _A graph which can be divided into 2 sets of nodes such that every edge in graph is from one set to another._
9. Connected Components: _A subgraph in graph in which for any pair of node u & v, there is a path from u to v and v to u._
10. Strongly Connected Components: _It is connected components in the directed graph._
11. Bridges: _Edges in graph which if removed divides the graph in 2 or more disjoint subgraphs._
12. Articulation points: _Vertices in graph which if removed along with their edges divides the graph in 2 or more disjoint subgraphs._
13. Topological Sorting: _Linear ordering of nodes s.t. for every edge u to v in graph, u occurs before v in the ordering._
14. Cycle in Graph: _A cycle is a path of nodes in graph such that starting from any node we will end up at the same node._
15. Tree diameter: _It is the largest path between any pair of nodes in the tree._
16. Hamiltonian Path: _It is a path which visits each vertext once in an undirected graph._
17. Eulerian Path: _It is a path which visits each vertext once in an directed graph._

## List of algorithms mentioned below :-

1.  BFS/DFS Traversal
2.  BFS/DFS Traversal in Grid
3.  Connected Components in Graph
4.  Bipartite Graph Test
5.  Cycle Detection in Undirected Graph
6.  In/Out Time of Nodes
7.  Finding Tree Diameter
8.  Bridges in Graph
9.  Articulation Points in Graph
10. Topological Sorting of DAG - Kahn`s Algorithm
11. Strongly Connected Components - Kosaraju`s Algorithm
12. Strongly Connected Components - Tarzan`s Algorithm
13. Least Common Ancestor of Tree - Binary Lifting Approach
14. Minimum/Maximum Spanning Tree - Kruskal`s Algorithm
15. Minimum/Maximum Spanning Tree - Prim`s Algorithm
16. Single Source Shortest Path - Dijkstra`s Algorithm
17. Single Source Shortest Path - Bellman Ford Algorithm
18. All Pairs Shortest Path - Floyd Warshall Algorithm
19. Centroid Decomposition of Graph
20. Minimum/Maximum Flow - Ford Fulkerson`s Algorithm
21. Hamiltonian Path & Hamiltonian Cycle
22. Eulerian Path & Eulerian Cycle
23. Maximum Bipartite Matching
24. Multi-source BFS Algorithm

### Imports, Variables & Adjacency List

```cpp
#include<iostream>
#include<vector>
#include<queue>
using namespace std;
int n,e,u,v,w;
const int N = 1e5;
vector<int> adj[N];
vector<bool> vis(N,false);
while(e--){
    cin>>u>>v;
    adj[u].push_back(v);
    adj[v].push_back(u);
}
```

### DFS/BFS TRAVERSAL

```cpp
void dfs(int node){
	vis[node] = true;
	for(int adjNode : adj[node]) if(!vis[adjNode]) dfs(adjNode);
}
void bfs(int source){
	vis[source] = true;
	queue<int> q; q.push(source);
	while(!q.empty()){
		int node = q.front(); q.pop();
		for(int adjNode : adj[node]){
			if(!vis[adjNode]) vis[adjNode] = true, q.push(adjNode);
		}
	}
}
```

### DFS/BFS TRAVERSAL IN GRID

```cpp
int visi[N][N];
int grid[N][N];
int dx[] = {0,0,1,-1};
int dy[] = {1,-1,0,0};
bool isValidCell(int i, int j){
    return i>=0 && i<n && j>=0 && j<m && !visi[i][j] && grid[i][j] == 1;
}
void dfs(int x, int y){
	visi[x][y] = true;
    for(int i=0; i<4; i++){
        int xx = x + dx[i], yy = y + dy[i];
        if(isValidCell(xx, yy)) dfs(xx, yy);
    }
}
void bfs(int x, int y){
    queue<pair<int,int>> q;
    q.push(make_pair(x,y));
	visi[x][y] = true;
    while(!q.empty()){
        int r = q.front().first;
        int c = q.front().second;
        for(int i=0; i<4; i++){
            int xx = r + dx[i], yy = c + dy[i];
            if(isValidCell(xx, yy)){
                visi[xx][yy] = true;
                q.push(make_pair(xx,yy));
            }
        }
    }
}
```

### CONNECTED COMPONENTS

To find it, we simply need to check for each node if its visited & if its not, then we visit it along with all the nodes it can reach i.e. its connected component.

```cpp
int cc_count = 0;
for(int i=0; i<n; i++) if(!vis[i]) cc_count++, dfs(i);
for(int i=0; i<n; i++){
    for(int j=0; j<m; j++){
        if(!vis[i][j] && grid[i][j]) cc_count++, dfs(i,j);
    }
}
```

### BIPARTITE GRAPH TEST

To check if a graph is bipartite or not, paint the graph with 2 colors & if a childrent is already painted with the same color as node, then graph is not bipartite.

```cpp
vector<int> color(N);
bool isBipartite(int node, int c = 0){
	vis[node] = true;
	color[node] = c;
	for(int adjNode : adj[node]){
        if(vis[adjNode] && color[adjNode] == color[node]) return false;
		if(!vis[adjNode] && !isBipartite(adjNode, 1 - c)) return false;
	}
	return true;
}
```

### CYCLE DETECTION IN UNDIRECTED GRAPH

To find it, we traverse graph & if a node finds a visited child which is not its parent then we have a cycle becuase from child there are 2 paths to node.

```cpp
bool hasCycle(int node, int parent = -1){
	vis[node] = true;
	for(int adjNode : adj[node]){
		if(vis[adjNode] && adjNode != parent) return true;
		if(!vis[adjNode] && hasCycle(adjNode)) return true;
	}
	return false;
}
```

### IN/OUT TIME OF NODES

Just store these times when entering and exiting the nodes with the help of a timer variable.

```cpp
vector<int> inTime(N), outTime(N);
void dfs(int node){
	vis[node] = true;
	inTime[node] = timer++;
	for(int adjNode : adj[node]) if(!vis[adjNode]) dfs(adjNode);
	outTime[node] = timer++;
}
```

### TREE DIAMETER

First DFS traversals finds first endpoint of the largest path and the seconds find the second endpoint.

```cpp
int maxDepth = 0, maxDepthNode = 0;
void dfs(int node, int depth = 0){
	vis[node] = true;
	if(maxDepth < depth) maxDepth = depth, maxDepthNode = node;
	for(int adjNode : adj[node]) if(!vis[adjNode]) dfs(adjNode, depth + 1);
}
int main(){
	dfs(0); maxDepth = 0;
	dfs(maxDepthNode);
	cout<<maxDepthNode<<endl;
}
```

### BRIDGES IN GRAPH

For an edge, node --- children => It is a bridge when the children subtree is not connected to any ancestor of node.
lowTime of children indicates the lowest inTime node a children is connected to & hence it can be used to find the bridge.
when we update lowTime from already visited nodes we use its inTime and when we visit it then we use its lowTime.

```cpp
vector<int> inTime(N), lowTime(N);
void dfs(int node, int parent = -1){
	vis[node] = true;
	inTime[node] = lowTime[node] = timer++;
	for(int adjNode : adj[node]){
		if(adjNode == parent) continue;
		if(vis[adjNode]) lowTime[node] = min(lowTime[node], inTime[adjNode]);
		else {
			dfs(adjNode, node);
			if(inTime[node] < lowTime[adjNode]) cout<<node<<"->"<<adjNode<<" is a bridge."<<endl;
			lowTime[node] = min(lowTime[node], lowTime[adjNode]);
		}
	}
}
```

### ARTICULATION POINTS IN GRAPH

These are the endpoint of a bridge except for the root node for which we have to check its no. of children.

```cpp
vector<int> inTime(N), lowTime(N);
void dfs(int node, int parent = -1){
	vis[node] = true;
	inTime[node] = lowTime[node] = timer++;
    int children = 0;
	for(int adjNode : adj[node]){
		if(adjNode == parent) continue;
		if(vis[adjNode]) lowTime[node] = min(lowTime[node], inTime[adjNode]);
		else {
            children++;
			dfs(adjNode, node);
			if(inTime[node] < lowTime[adjNode] && parent != -1) {
                cout<<node<<" is an articulation point."<<endl;
            }
			lowTime[node] = min(lowTime[node], lowTime[adjNode]);
		}
	}
    if(children > 1 && parent == -1){
        cout<<node<<" is an articulation point"<<endl;
    }
}
```

### TOPOLOGICAL ORDERING OF DAG - KAHN'S ALGORITHM

Iterate on basis of in-degree of nodes & if ordering isn't complete that means the graphy contain cycle.

```cpp
vector<int> inDeg(N,0);
void kahn(int n){
    queue<int> q;
    // store indegree while inputting graph
    for(int i=0; i<n; i++) if(inDeg[i]==0) q.push(i);
    vector<int> topo;
    while(!q.empty()){
        int node = q.front(); q.pop();
        topo.push_back(node);
        for(int adjNode : adj[node]){
            inDeg[adjNode]--;
            if(inDeg[adjNode] == 0) q.push(adjNode);
        }
    }
    if(topo.size() != n) cout<<"Graph contain cycle"<<endl;
}
```

### STROGNGLY CONNECTED COMPONENTS - KOSARAJU'S ALGORITHM

There are 3 steps to it -

1. create order of nodes based on out time,
2. create transpose graph and then
3. do dfs traversal on each SCC

```cpp
stack<int> out;
void dfs(int node, vector<int> adj[], bool findOutOrder){
    vis[node] = true;
    for(int adjNode : adj[node]) if(!vis[adjNode]) dfs(adjNode, adj, findOutOrder);
    if(findOutOrder) out.push(node);
}
int main(){
    vector<int> adj[n];
    for(int i=0; i<n; i++) if(!vis[i]) dfs(i,adj,true);
    vector<int> adjT[n];
    for(int i=0; i<n; i++) for(int j: adj[j]) adjT[j].push_back(i);
    memset(vis,false,sizeof(vis));
    int scc_count = 0;
    while(!out.empty()){
        int node = out.top(); out.pop();
        if(!vis[node]){
            scc_count++;
            dfs(node, adjT, false);
        }
    }
}
```

### STROGNGLY CONNECTED COMPONENTS - TARZAN'S ALGORITHM

Use lowTime to find SCCs in graph. Tarzan's gives a special restriction on when to update lowtime of nodes which is if the node is in an active stack.
Now, when the lowTime of node is equal to its inTime, we find an SCC, and we just have to print the values on stack from top until we reach the current node.

```cpp
int timer = 0;
stack<int> st;
vector<bool> inStack(N, false);
vector<int> inTime(N,0), lowTime(N,0);

void dfs(int node){
    // visit node, add it to stack and init its intime and lowtime
    vis[node] = true;
    st.push(node); inStack[node] = true;
    inTime[node] = lowTime[node] = timer++;
    // traverse the subtree and update the lowtime of current node according to restriction
    for(int adjNode : adj[node]){
        if(vis[adjNode] && inStack[adjNode]) lowTime[node] = min(lowTime[node], inTime[adjNode]);
        if(!vis[adjNode]){
            dfs(adjNode);
            if(inStack[adjNode]) lowTime[node] = min(lowTime[node], lowTime[adjNode]);
        }
    }
    // check if we have found an SCC
    if(inTime[node] == lowTime[node]){
        cout<<"Found a SCC: ";
        while(true){
            int temp = st.top(); st.pop();
            cout<<temp+1<<" ";
            inStack[temp] = false;
            if(temp == node) break;
        }
        cout<<endl;
    }
}
int main(){
    int n,m; cin>>n>>m;
	int x,y;
	while(m--) cin>>x>>y, adj[x-1].push_back(y-1);
    for(int i=0; i<n; i++) if(!vis[i]) dfs(i);
    return 0;
}
```

### MINIMUM SPANNING TREE - KRUSKAL'S ALGORITHM

We can also detect cycles using it i.e. if we are adding an edge but the nodes are already connected that means there is a cycle in graph.

```cpp
struct edge {int u,v,w;};
edge edges[M];
vector<int> parent(N,-1);

bool comp(edge a, edge b){ return a.w <= b.w;}
bool find(int a){
    if(parent[a] == -1) return a;
    return parent[a] = find(parent[a]);
}
int main(){
    // take edge input along with their weights
    int n,m; cin>>n>>m;
    for(int i=0; i<m; i++) cin>>edges[i].u>>edges[i].v>>edges[i].w;
    // sort edges based on their weights in ascending order
    sort(edges, edges+m, comp);
    // start adding edges until you have a connected graph
    int minWeight = 0;
    for(edge e : edges){
        int u = find(e.u);
        int v = find(e.v);
        if(u != v){
            parent[pb] = pa;
            minWeight += e.w;
        }
    }
}
```

### MINIMUM SPANNING TREE - PRIM'S ALGORITHM

```cpp

```

### LOWEST COMMON ANCESTOR - NOVICE APPROACH

TC - O(N) SC - O(N)

```cpp
int level[N];
int parent[N];

void dfs(int node, int par = -1, int lev = 0){
    level[node] = lev;
    parent[node] = par;
    for(int adjNode : adj[node]){
        if(adjNode != par){
            dfs(adjNode, node, lev + 1);
        }
    }
}
int lca(int u, int v){
    if(level[u] < level[v]) swap(u,v);
    int diff = level[u] - level[v];
    while(diff > 0){
        u = parent[u];
        diff--;
    }
    while(u != v){
        u = parent[u];
        v = parent[v];
    }
    return u;
}
```

### LOWEST COMMON ANCESTOR - OPTIMAL APPROACH

```cpp
int maxN = log2(N)+1;
int par[N][maxN];
int lev[N];

void dfs(int node, int p, int l){
    lev[node] = l;
    par[node][0] = p;
    for(int adjNode : adj[node]){
        if(adjNode != p) dfs(adjNode, nod e, l+1);
    }
}

void init(){
    memset(par,-1,sizeof(par));
    dfs(0,-1,0);
    for(int i=1; i<maxN; i++){
        for(int j=0; j<N; j++){
            if(par[j][i-1] != -1) par[j][i] = par[par[j][i-1]][i-1];
        }
    }
}

int lca(int u, int v){
    if(lev[u] < lev[v]) swap(u,v);
    int diff = lev[u] - lev[v];
    while(diff > 0){
        int jump = log2(diff);
        u = par[u][jump];
        diff -= (1<<jump)
    }
    if(u == v) return u;
    for(int i=maxN-1; i>=0; i--){
        if(par[u][i] == par[v][i]) continue;
        u = par[u][i];
        v = par[v][i];
    }
    return par[u][0];
}
```

### SHORTEST PATH ALGORITHM - DIJKSTRA'S ALGORITHM

```cpp
typedef pair<int,int> pii;

const int N = 1e5;
vector<pii> adj[N];
vector<int> dis(N,INT_MAX);

void dijkstra(int source){
    // add source node in min heap and update its distance to zero
    priority_queue<pii, vector<pii>, greater<pii>> minHeap;
    minHeap.push({0,source});
    dis[source] = 0;
    // minimise distances of other nodes from source node
    while(!minHeap.empty()){
        auto p = minHeap.top();
        minHeap.pop();
        int node = p.second;
        int dist = p.first;
        for(auto x : adj[node]){
            int adjNode = x.first;
            int adjEdge = x.second;
            if(dist + adjEdge < dis[adjNode]){
                dis[adjNode] = dist + adjEdge;
                minHeap.push({dis[adjNode], adjNode});
            }
        }
    }
}

void main(){
    int n,e,u,v,w;
    cin>>n>>e;
    while(e--) cin>>u>>v>>w, adj[u].push_back({v,w}), adj[v].push_back({u,w});
    dijkstra(0);
}
```

### SHORTEST PATH ALGORITHM - BELLMAN FORD ALGORITHM

```cpp

```

### SHORTEST PATH ALGORITHM - FLOYD WARSHALL ALGORITHM

```cpp
const int INF = 1e8;
vector<vector<int>> graph[N][N];

void floydWarshall(){
    // Going from i->j via k i.e. i->k-j for all possible i,j,k
    for(int k=0; k<N; k++){
        for(int i=0; i<N: i++){
            for(int j=0; j<N; j++){
                dis[i][j] = min(dis[i][j], dis[i][k] + dis[k][j]);
            }
        }
    }
    for(int i=0; i<N: i++){
        if(graph[i][i] < 0){
            cout<<"Graph has a negative cycle"<<endl;
        }
    }
}

int main(){
    // tage graph input in the graph matrix
    for(int i=0; i<N: i++){
        for(int j=0; j<N; j++){
            cin>>graph[i][j];
            // node -> node distance will be zero
            if(i==j) graph[i][j] = 0;
            // if there is no edge between i & j, mark the value as infinity
            else if(graph[i][j] == 0) graph[i][j] = INF;
        }
    }
}
```
