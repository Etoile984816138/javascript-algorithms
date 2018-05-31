import TrieNode from './TrieNode';

const HEAD_CHARACTER = '*';

export default class Trie {
  constructor() {
    this.head = new TrieNode(HEAD_CHARACTER); // 构建字典树
  }

  addWord(word) { // 字典树中添加单词
    const characters = Array.from(word);
    let currentNode = this.head;
    for (let charIndex = 0; charIndex < characters.length; charIndex += 1) {
      const isComplete = charIndex === characters.length - 1;
      currentNode = currentNode.addChild(characters[charIndex], isComplete);
    }
  }

  suggestNextCharacters(word) { // 返回下一个子节点
    const lastCharacter = this.getLastCharacterNode(word);

    if (!lastCharacter) {
      return null;
    }

    return lastCharacter.suggestChildren();
  }

  doesWordExist(word) {
    return !!this.getLastCharacterNode(word);
  }

  getLastCharacterNode(word) { // 判断单词是否存在，存在返回最后一个节点
    const characters = Array.from(word);
    let currentNode = this.head;
    for (let charIndex = 0; charIndex < characters.length; charIndex += 1) {
      if (!currentNode.hasChild(characters[charIndex])) {
        return null;
      }
      currentNode = currentNode.getChild(characters[charIndex]);
    }

    return currentNode;
  }
}
