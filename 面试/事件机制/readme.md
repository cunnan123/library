一个事件发生后，会在子元素和父元素之间传播（propagation）。这种传播分成三个阶段。
    第一阶段：从window对象传导到目标节点（上层传到底层），称为“捕获阶段”（capture phase）。
    第二阶段：在目标节点上触发，称为“目标阶段”（target phase）。
    第三阶段：从目标节点传导回window对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）。
    这种三阶段的传播模型，使得同一个事件会在多个节点上触发。
    div.addEventListener('click', callback, true);  捕获阶段触发
    div.addEventListener('click', callback, false); 冒泡阶段触发
