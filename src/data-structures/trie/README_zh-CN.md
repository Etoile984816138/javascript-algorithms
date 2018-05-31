# Trie
# 字典树
在计算机科学中，字典树，又称数字树，有时也被称为基树或前缀树（因为它们可以根据前缀搜索），是一种搜索树——一种用于存储动态集或关联数组的有序树数据结构，其中键一般为字符串。与二叉搜索树不同，树中没有结点存储与该节点相关联的键；相反，它在树中的位置决定了与它相关联的键。节点的所有后代都具有与该节点关联的字符串的公共前缀，根与空字符串关联。值不一定与每个节点相关联。相反，值往往只与叶子，或者与一些与你感兴趣的键所对应的内部结点相关联。有关前缀树的空间优化表示，请参见压缩前缀树。

![Trie](https://upload.wikimedia.org/wikipedia/commons/b/be/Trie_example.svg)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Trie)
- [YouTube](https://www.youtube.com/watch?v=zIjfhVPRZCg&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=7&t=0s)

-------------------------------------------
## TODO
* 词频统计，压缩空间
* 前缀匹配（O(L)）
