# 平衡二叉树

在计算机科学中，AVL树（以发明者Adelson-Velsky和Landis命名），是一种自平衡二叉搜索树。这是第一个被发明的数据结构。在AVL树中，任何节点两个子树的高度相差最多一个；当它们相差不止一个节点时，则重新执行以恢复平衡。查找、插入和删除在平均和最差情况下的时间复杂度都是`O(log n)`，其中n是操作前树中的节点数。插入和删除可能需要通过一个或多个树循环重新平衡树。

演示将多个元素插入AVL树的动画。它包括左、右、左-右和右-左旋转。
![AVL Tree](https://upload.wikimedia.org/wikipedia/commons/f/fd/AVL_Tree_Example.gif)

具有平衡因子的AVL树 (绿色)
![AVL Tree](https://upload.wikimedia.org/wikipedia/commons/a/ad/AVL-tree-wBalance_K.svg)

### AVL树旋转

**左-左旋转**

![Left-Left Rotation](http://btechsmartclass.com/DS/images/LL%20Rotation.png)

**右-右旋转**

![Right-Right Rotation](http://btechsmartclass.com/DS/images/RR%20Rotation.png)

**左-右旋转**

![Left-Right Rotation](http://btechsmartclass.com/DS/images/LR%20Rotation.png)

**右-左旋转**

![Right-Right Rotation](http://btechsmartclass.com/DS/images/RL%20Rotation.png)

## 引用

* [Wikipedia](https://en.wikipedia.org/wiki/AVL_tree)
* [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/avl_tree_algorithm.htm)
* [BTech](http://btechsmartclass.com/DS/U5_T2.html)
* [AVL Tree Insertion on YouTube](https://www.youtube.com/watch?v=rbg7Qf8GkQ4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=12&)

---------------------------
**平衡因子**

把二叉树的每个节点的左子树减去右子树定义为该节点的平衡因子。二叉平衡树的平衡因子只能是1、0或者-1

