class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  searchPrefix(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    return this._collectAllWords(node, prefix);
  }

  _collectAllWords(node, prefix) {
    let words = [];
    if (node.isEndOfWord) {
      words.push(prefix);
    }
    for (let char in node.children) {
      words = words.concat(
        this._collectAllWords(node.children[char], prefix + char)
      );
    }
    return words;
  }
}

export default Trie;
