# Trie

## Implementaion

```cpp
class Node {
    public:
        Node* character[26];
        bool endOfWord = false;
        bool exist(char ch){
            return character[ch-'a'] != nullptr;
        }
        Node* goTo(char ch) {
            return character[ch-'a'];
        }
        void create(char ch) {
            character[ch-'a'] = new Node();
        }
};

class Trie {
    Node *root;
public:
    Trie() {
        root = new Node();
    }

    void insert(string word) {
        Node *curr = root;
        for(char ch : word){
            if(!curr->exist(ch)) curr->create(ch);
            curr = curr->goTo(ch);
        }
        curr->endOfWord = true;
    }

    bool search(string word) {
        Node *curr = root;
        for(char ch : word){
            if(!curr->exist(ch)) return false;
            curr = curr->goTo(ch);
        }
        return curr->endOfWord;
    }

    bool startsWith(string prefix) {
        Node *curr = root;
        for(char ch : prefix){
            if(!curr->exist(ch)) return false;
            curr = curr->goTo(ch);
        }
        return true;
    }
};
```
