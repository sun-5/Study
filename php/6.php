<?php
header('Content-type:text/html;charset=utf-8');
/*
字符串类型
字符串定义语法：
1.单引号字符串
2.双引号字符串
引号方式：适合定义比较短，没有结构要求的字符串
3.nowdoc字符串：没有单引号的单引号字符串
    $str = <<< '边界符'
        字符串内容
    边界符;
4.heredoc字符串：没有双引号的双引号字符串
    $str = <<< 边界符
        字符串内容
    边界符;
*/
//nowdoc
$str = <<<'EOD'
        hello
                world
EOD;
//heredoc
$str1 = <<<EOD
    hello
            world
EOD;

var_dump($str ,$str1);
echo '<hr>';
/*
字符串转义
转义的含义：在计算机通用协议中，有一些特定的方式定义的字母，系统会特定处理：通常这种方式都是使用反斜杠+字母（单词）的特性：
\r\n: 回车换行

php在识别转义字符的时候也是使用同样的模式：反斜杠+字母
php中系统常用转义符号：
\'：在单引号字符串中显示单引号
\"：在双引号字符串中显示双引号
\r：代表回车（理论上是回到当前行的首位置）
\n：代表新一行
\t：类似tab按键，输出4个空格
\$：在php中使用$符号作为变量符号 因此需要特定识别

*/
//单引号能够识别\' ; 双引号就不能识别\'
$str2 = 'abc\r\n\def\t\'\"\$fg';
$str3 = "abc\r\ndef\t\'\"\$fg";

echo $str2,'<br>',$str3;
echo '<hr>';
$a = 'hello';
//变量识别
//单引号不识别$ 双引号可识别$可以解析变量
$str4 = 'asd $a asd';
$str5 = "asd $a asd";
//变量本身系统能够与后面内容区分，应该保证变量独立性
//使用变量专业标识符区分，给变量加上{}
$str6 = "asd {$a} asd";
echo $str4,'<br>',$str5,'<br>',$str6;
echo '<hr>';
/*
结构化定义的规则
    上边界符 后面不能加任何符号和空格包括注释
    下边界符号 必须要顶格
    下边界符号，后面只能跟分号，不能加任何内容
结构化定义字符串的内部（边界符之间）的所有内容都是字符串本身，包括空格
*/
$str7 = <<<EOD
 弹出一个内容
    <script>
        alert('$str6');//js弹出字符串必须加引号
    </script>
EOD;
echo $str7;

/*
字符串长度
1.获取字符串长度 基本函数strlen()  字节为单位
2.多字节字符串长度问题：包含中文长度
3.多字节字符串扩展模块：mbstring扩展（mb:Multi Bytes）
*/
$str8 = 'asgasafsh';//9
$str9 = '你好中国123';//15 中文在utf-8下占3个字节
echo strlen($str8),'<br>',strlen($str9);
echo '<hr>';
echo mb_strlen($str8),'<br>',mb_strlen($str9);//9  7 中文一个字对应一个

/*
字符串相关函数
1.转换函数
implode(连接方式，数组):将数组中元素按照某个规则连接成一个字符串
explode(分割字符，目标字符串)：将字符串按照某个格式进行分割，变成数组
str_split(字符串，字符长度)：按照指定长度拆分字符串得到数组

2.截取函数
trim(字符串，指定字符):默认用来去除两边的空格，也可以指定要去除的内容，按照指定的内容循环去除两边有的内容，直到碰到一个不是目标字符为止
ltrim():去除左边
rtirm():去除右边 
substr(字符串，起始位置，长度)：指定位置开始截取字符串，可以截取指定长度（不指定就到最后）
strstr(字符串，匹配字符):指定位置开始截取字符串，截取到最后(可以用来去文件后缀名)

3.大小转换函数：
strtolower:全部小写
strtoupper：全部大写
Ucfirst：首字母大写

4.查找函数
strpos():判断字符在目标字符串中出现的位置（首次）
strrpos()：判断字符在目标字符串中最后一次出现的位置

5.替换函数
str_replace(匹配目标，替换的内容，字符串本身):将目标字符串中部分字符串进行替换

6.格式化函数
printf/sprintf(输出字符串有占位符，顺序占位内容。。)：格式化输出数据 %d 十进制 %b 二进制

7.其他
str_repeat():重复某个字符串N次
str_shuffle()：随机打乱字符串



*/
$str10 = 'abcd e f ';
$str11 = ' abc.apk';

var_dump(trim($str10));
echo '<br>';
echo substr($str10,1,3);//abc
echo '<br>';
echo strstr($str11,'.');//.apk
echo '<br>';
echo strtoupper($str10),'<br>';
echo Ucfirst($str10),'<br>';
echo '<hr>';
$str12 = '123a234a465b234a';
echo strpos($str12,'a'),'<br>';//和substr配合截取
echo strrpos($str12,'a'),'<br>';
echo str_replace('a','!',$str12),'<br>';
//格式化输出
$age = 50;$name = 'Tom';
echo sprintf('你好，今年我%b岁,我叫%s',$age,$name),'<br>';

echo str_repeat($str12,2),'<br>';
echo str_shuffle($str12),'<br>';

?>