# 二叉搜索树

在计算机科学中，二叉搜索树（BST），有时被称为有序或排序二叉树，是一种特殊类型的容器：在内存中存储“项”（如数字、名称等）的数据结构。它允许快速查找、添加和删除项目，并可用于实现元素的动态集合，或者允许根据元素的key值查找表（例如：根据姓名查找某个人的电话号码）。

二叉搜索树需要保持它们的key值处于有序状态，以便可以使用二叉搜索进行查找或进行其它操作：当查找树中的某一个key时（或者在该处插入一个新的key），它们从根到叶子节点遍历树，与存储在树节点中的键进行比较，并根据比较结果决定在左子树或右子树中继续搜索。平均来看，这意味着每次比较可以跳过大约一半的树，因此每次查找、插入或删除所需的时间都是与存储在树中的元素数量成对数比例的，这比在(未排序的)数组中按键查找项所需的线性时间好得多，但比哈希表上的相应操作慢。

大小为9、深度为3的二叉搜索树，根为8。
叶子节点没有画出来。
![Binary Search Tree](https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg)

## 引用

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree)
- [Inserting to BST on YouTube](https://www.youtube.com/watch?v=wcIRPqTR3Kc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=9&t=0s)
