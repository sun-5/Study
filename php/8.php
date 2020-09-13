<?php
/*
数组相关函数
1.排序函数：对数组元素进行排序，都是按照ASCII码进行比较，可以进行英文比较 首字母比较
sort():顺序排序 下标重排
rsort():逆序排序
asort():顺序排序 下标保留
arsort():逆序排序
ksort():顺序排序 按照键名 下标
krsort():逆序排序
shuffle():随机打乱数组元素 ,下标和值都打乱
*/
$arr = array(3,1,5,2,0);
echo '<pre>';
 //sort($arr);
//asort($arr);
//ksort($arr);
shuffle($arr);
print_r($arr);
shuffle($arr);
print_r($arr);
/*
指针函数
reset():重置指针，将数组指针回到首位 返回第一个单元的值
end():将数组指针指向最后一个元素 返回最后一个单元的值
next():将数组指针指向下一个元素 返回下一个单元的值
prev():将数组指针指向上一个元素 返回上一个单元的值
current():获取当前指针对应的元素值
key():获取当前指针对应的下标值
*/
//指针函数
$arr2 = array(3,1,5,2,0);
echo current($arr2),'<br>';
echo key($arr2),'<br>';
echo next($arr2),next($arr2),'<br>';
echo prev($arr2),'<br>';
echo end($arr2),'<br>';
echo reset($arr2),'<br>';
//next prev移动指针可能移动到最前或最后（离开数组），导致数组不能使用，只能通过reset end进行指针重置

/*
数组相关函数
count():统计数组中元素的数量
array_push():往数组中加入一个元素（数组后面）
array_pop():从数组中取出一个元素（数组后面）
array_shift():从数组前面取出一个元素
array_unshift():从数组前面加入一个元素
php模拟数据结构：
栈：压栈，先进去后出来（FILO）
队列：排队，先进去的先出去（FIFO）
array_reverse():数组元素反过来
in_array():判断一个元素在数组中是否存在
array_keys():获取一个数组的所有下标，返回一个索引数组
array_values():获取一个数组的所有值，返回一个索引数组
*/
//模拟数据结构：栈和队列
$arr3 = array();
//压栈 先进后出
array_push($arr3,3);
array_push($arr3,2);
array_push($arr3,1);
print_r($arr3);
// 出栈
echo array_pop($arr3),array_pop($arr3),array_pop($arr3),'<br>';

//队列 先排列先出来
$arr4 = array();
//入队
array_unshift($arr4,3);
array_unshift($arr4,2);
array_unshift($arr4,1);
print_r($arr4);
//出队

//echo array_pop($arr4),array_pop($arr4),array_pop($arr4),'<br>';
print_r(array_reverse($arr4));
var_dump(in_array(6,$arr4));
?>
