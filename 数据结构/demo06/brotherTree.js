class tree{
    constructor(){

    }
    dataType(){
        //树是由一个根节点和若干颗子树构成，树中节点具有相同数据类型及层次关系
        return {
            data:value,
            firstChild:firstChild,
            rightBrother:rightBrother
        }
    }
    initTree(t){
        //构造空树t
    }
    destroyTree(t){
        //销毁树t
    }
    createTree(t,definition){
        //按definition中给出树的定义来构造树

    }
    clearTree(t){
        //若树t存在，则将树t清为空树
        
    }
    treeEmpty(t){
        //若t为空树，返回true,否则返回false

    }
    treeDepth(t){
        //返回t的深度
    }
    root(t){
        //返回t的根节点
    }
    value(t,cur_e){
        //cur_e是树t中一个节点，返回此节点的值

    }
    assign(t,cur_e,value){
        //给树t的节点cur_e赋值为value
    }
    parent(t,cur_e){
        //若cur_e是树的非根节点，则返回他的双亲，否则返回空

    }
    leftChild(t,cur_e){
        //若cur_e是树的非叶节点，则返回他的最左孩子，否则返回空

    }
    rightSibling(t,cur_e){
        //若cur_e有右兄弟，则返回他的右兄弟，否则返回空

    }
    insertChild(t,p,i,c){
        //其中，p指向树t的某个节点，i为所指节点p的度加上1，非空树c与t不相交，操作结果为 插入c为树t中p指节点的第i颗子树
    }
    deleteChild(t,p,i){
        //其中p指向树t的某个节点，i为所指节点p的度，操作结果为删除t中p所指节点的第i颗子树
    }
}