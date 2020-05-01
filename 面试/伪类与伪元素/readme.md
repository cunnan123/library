区别：伪类添加元素的特殊效果，而伪元素则是添加元素的内容，当然内容可以是空的，相当于空的div。

伪类
    属性	描述	CSS
    :active	选择正在被激活的元素	1
    :hover	选择被鼠标悬浮着元素	1
    :link	选择未被访问的元素	1
    :visited	选择已被访问的元素	1
    :first-child	选择满足是其父元素的第一个子元素的元素	2
    :lang	选择带有指定 lang 属性的元素	2
    :focus	选择拥有键盘输入焦点的元素	2
    :enable	选择每个已启动的元素	3
    :disable	选择每个已禁止的元素	3
    :checked	选择每个被选中的元素	3
    :target	选择当前的锚点元素	3
    :first-of-type	选择满足是其父元素的第一个某类型子元素的元素	3
    :last-of-type	选择满足是其父元素的最后一个某类型子元素的元素	3
    :only-of-type	选择满足是其父元素的唯一一个某类型子元素的元素	3
    :nth-of-type(n)	选择满足是其父元素的第n个某类型子元素的元素	3
    :nth-last-of-type(n)	选择满足是其父元素的倒数第n个某类型的元素	3
    :only-child	选择满足是其父元素的唯一一个子元素的元素	3
    :last-child	选择满足是其父元素的最后一个元素的元素	3
    :nth-child(n)	选择满足是其父元素的第n个子元素的元素	3
    :nth-last-child(n)	选择满足是其父元素的倒数第n个子元素的元素	3
    :empty	选择满足没有子元素的元素	3
    :in-range	选择满足值在指定范围内的元素	3
    :out-of-range	选择值不在指定范围内的元素	3
    :invalid	选择满足值为无效值的元素	3
    :valid	选择满足值为有效值的元素	3
    :not(selector)	选择不满足selector的元素	3
    :optional	选择为可选项的表单元素，即没有“required”属性	3
    :read-only	选择有"readonly"的表单元素	3
    :read-write	选择没有"readonly"的表单元素	3
    :root	选择根元素     3

伪元素
    属性	描述	CSS
    ::first-letter	选择指定元素的第一个单词	1
    ::first-line	选择指定元素的第一行	1
    ::after	在指定元素的内容前面插入内容	2
    ::before	在指定元素的内容后面插入内容	2
    ::selection	选择指定元素中被用户选中的内容	3

