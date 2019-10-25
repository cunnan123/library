class string{
    constructor(){
        this.init()
    }
    dataType(value){
        //串中元素仅有一个字符组成，相邻元素具有前驱和后继关系
    }
    strAssign(){
        //生成一个其值等于字符串常量的串

    }
    srtCopy(){
        //串s存在，由串s复制得到串t
    }
    clearStr(){
        //串存在，清空串
    }
    stringEmpty(){
        //串为空时返回true，不为空时返回false
    }
    strLength(){
        //返回串的长度，即元素个数
    }
    strCompare(){
        //若s>t 返回值>0 若s=t 返回值0 若s<t 返回值<0
    }
    concat(){
        //用t返回由s1和s2联接而成的新串
    }
    subString(){
        //串s存在 1<=pos<=strLength(s)  且0<=len<=stringlength(s)-pos+1
        //用sub返回串s的第pos个字符起长度为len的子串
    }
    index(){
        //串s和t存在 t是非空串 1<=pos<=strlength(s)
        //若主串中存在和串t值相同的子串 则返回它在主串s中第pos个字符之后第一次出现的位置 否则返回0
    }
    replace(){
        //串s t和v都存在 t是非空串 用v替换主串s中出现的所有与t相等的不重叠的子串
    }
    strInsert(){
        //串s和t存在 1<=pos<=strlength(s)+1 在串s的第pos个字符之前插入串t
    }
    strDelete(){
         //串s存在 1<=pos<=strlength(s)-len+1  从串s中删除第pos个字符起长度为len的子串
    }

}